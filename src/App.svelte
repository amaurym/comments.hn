<script lang="ts">
	import { commentsHn, parseQueryParams } from './commentsHn';
	import type { AlgoliaHit } from './commentsHn';
	import Hit from './Hit.svelte';

	const WEBSITE_NAME = 'MootHN';
	const parsedQuery = parseQueryParams(location.search);

	let hits: AlgoliaHit[] = [];
	let err: Error;
	parsedQuery &&
		commentsHn(parsedQuery)
			.then((h) => (hits = h))
			.catch((e) => (err = e));
</script>

<main>
	<h1>{WEBSITE_NAME}</h1>
	<p>
		Preprend <code><mark><strong>{WEBSITE_NAME}?q=</strong></mark></code> to
		any website to see its Hacker News comments.
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
								><mark>{WEBSITE_NAME}?q=</mark
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
				href="https://github.com/amaurym/moothn.io/issues"
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
		<br />
		<small
			><strong>{WEBSITE_NAME}</strong> is an
			<a
				href="https://github.com/amaurym/moothn.io"
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
	</footer>
</main>
