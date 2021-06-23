import type { AlgoliaHit } from './commentsHn';

const BLACKLISTED_PARAMS = ['utm_', 'clid'];

export function timeSince(time: number): string | number {
	// from https://stackoverflow.com/a/12475270
	const time_formats = [
		[60, 'seconds', 1], // 60
		[120, '1 minute ago', '1 minute from now'], // 60*2
		[3600, 'minutes', 60], // 60*60, 60
		[7200, '1 hour ago', '1 hour from now'], // 60*60*2
		[86400, 'hours', 3600], // 60*60*24, 60*60
		[172800, 'Yesterday', 'Tomorrow'], // 60*60*24*2
		[604800, 'days', 86400], // 60*60*24*7, 60*60*24
		[1209600, 'Last week', 'Next week'], // 60*60*24*7*4*2
		[2419200, 'weeks', 604800], // 60*60*24*7*4, 60*60*24*7
		[4838400, 'Last month', 'Next month'], // 60*60*24*7*4*2
		[29030400, 'months', 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
		[58060800, 'Last year', 'Next year'], // 60*60*24*7*4*12*2
		[2903040000, 'years', 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
	];
	let seconds = (+new Date() - time) / 1000,
		token = 'ago',
		list_choice = 1;

	if (seconds == 0) {
		return 'Just now';
	}
	if (seconds < 0) {
		seconds = Math.abs(seconds);
		token = 'from now';
		list_choice = 2;
	}
	let i = 0,
		format;
	while ((format = time_formats[i++]))
		if (seconds < format[0]) {
			if (typeof format[2] == 'string') return format[list_choice];
			else
				return `${Math.floor(seconds / format[2])} ${
					format[1]
				} ${token}`;
		}
	return time;
}

export async function askAlgolia(url: string): Promise<{ hits: AlgoliaHit[] }> {
	// handle special case of www/no-www versions
	// here because it helps find more results but it's not strictly url canonicalization,
	// so results without www will eventually show up as "related url"
	url = url.startsWith('www.') ? url.replace(/www\./, '') : url;

	url = encodeURIComponent(url);
	const res = await fetch(
		`https://hn.algolia.com/api/v1/search?query=${url}&restrictSearchableAttributes=url&analytics=false`
	);
	const data = (await res.json()) as { hits: AlgoliaHit[] };
	return data;
}

function cleanUpParameters(url: string) {
	const urlObj = new URL(url);
	const params = urlObj.searchParams;
	const blacklistedKeys = [];

	for (const key of params.keys()) {
		if (BLACKLISTED_PARAMS.some((entry) => key.includes(entry))) {
			// Can't delete directly since it will mess up the iterator order
			// Saving it temporarily to delete later
			blacklistedKeys.push(key);
		}
	}

	for (const key of blacklistedKeys) {
		params.delete(key);
	}

	// Reconstruct search params after cleaning up
	urlObj.search = params.toString();

	return urlObj.toString();
}

export function cleanUrl(url: string): string {
	// (maybe) clean up analytics-related params
	url = url.includes('?') ? cleanUpParameters(url) : url;
	// strip protocol for better results
	url = url.replace(/(^\w+:|^)\/\//, '');
	// also, strip anchors
	url = url.replace(/(#.+?)$/, '');
	// also, strip index.php/html
	url = url.replace(/index\.(php|html?)/, '');
	// also, strip single leading slash, e.g. example.com/ -> example.com
	url =
		url.endsWith('/') && url.split('/').length < 3
			? url.replace(/\/+$/, '')
			: url;
	return url;
}
