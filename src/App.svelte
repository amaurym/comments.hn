<script lang="ts">
	import { commentsHn, parseQueryParams } from './commentsHn';
	import type { AlgoliaHit } from './commentsHn';
	import Hit from './Hit.svelte';

	const parsedQuery = parseQueryParams(location.search);

	let hits: AlgoliaHit[] = [];
	let err: Error;
	parsedQuery &&
		commentsHn(parsedQuery)
			.then((h) => (hits = h))
			.catch((e) => (err = e));
</script>

<main>
	<h1>Comments.hn</h1>
	<p>
		Preprend <code><mark><strong>comments.hn?q=</strong></mark></code> to any
		website to see its Hacker News comments.
	</p>
	<div>
		<p>
			For example, if you're reading Ciechanowski's <a
				href="https://ciechanow.ski/gears"
				rel="noopener noreferrer"
				target="_blank">article</a
			> on gears, just do:
		</p>
		<table>
			<tbody>
				<tr>
					<td><strong><code>URL Bar</code></strong></td>
					<td>
						<strong>
							<code
								><mark>comments.hn?q=</mark
								>https://ciechanow.ski/gears</code
							></strong
						>
					</td>
				</tr>
			</tbody>
		</table>
	</div>

	{#if !parsedQuery}
		<br />
	{:else if err}
		<h2>Aaaaaahhhhh! An error.</h2>
		<p>
			Please create an <a
				href="https://github.com/amaurym/comments.hn/issues"
				rel="noopener noreferrer"
				target="_blank">issue</a
			> on Github with the following text:
		</p>
		<pre>{err.message}</pre>
	{:else if hits.length}
		<h2>
			{hits.length} search results.
		</h2>
		<p>Searching for "{parsedQuery}".</p>
		{#each hits as hit}
			<Hit {hit} />
		{/each}
	{:else}
		<h2>Loading results...</h2>
		<p>Searching for "{parsedQuery}".</p>
	{/if}

	<footer>
		<hr />
		<p>
			<small>
				<strong>Comments.hn</strong> is an
				<a
					href="https://github.com/amaurym/comments.hn"
					rel="noopener noreferrer"
					target="_blank">open-source</a
				>
				website with no ads, no trackers, no React. 64kb gzipped. Its business
				model is
				<a
					href="https://github.com/sponsors/amaurym"
					rel="noopener noreferrer"
					target="_blank">donations</a
				>. Copyright
				<a
					href="https://github.com/amaurym"
					rel="noopener noreferrer"
					target="_blank">@amaurym</a
				> 2021.
			</small>
		</p>
		<p>
			<small>
				To use this website as a bookmarklet, drag <a
					href={'javascript:(function(){window.open("https://comments.hn?q="+location.href,"_blank")})()'}
					>this link</a
				> to your bookmarks toolbar.
			</small>
		</p>
	</footer>
</main>
