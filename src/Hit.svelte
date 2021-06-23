<script lang="ts">
	import { HN_URL } from './commentsHn';
	import type { AlgoliaHit } from './commentsHn';
	import { timeSince } from './whatHnSays';

	export let hit: AlgoliaHit;
</script>

<main>
	<a
		href={`${HN_URL}${hit.objectID}`}
		rel="noopener noreferrer"
		target="_blank"
	>
		<div>
			<h3>{hit.title}</h3>
			<small>
				<mark>{hit.points}</mark> points •
				<mark>{hit.num_comments}</mark>
				comments • by <em>{hit.author}</em>
				• {timeSince(hit.created_at_i * 1000)}
			</small>
		</div>
	</a>
</main>
