import { cleanUrl, askAlgolia } from "./whatHnSays";

export const HN_URL = "https://news.ycombinator.com/item?id=";

export interface AlgoliaHit {
  author: string;
  created_at_i: number;
  num_comments: number;
  objectID: number;
  points: number;
  title: string;
}

/**
 * parseQueryParams parses a query params string (starting with "?"), and
 * returns the value of the "q=" component, if it exists.
 */
export function parseQueryParams(queryParams: string): string | undefined {
  if (!queryParams.startsWith("?")) {
    return;
  }

  const noQuestionMark = queryParams.substring(1); // Remove "?".
  const comps = noQuestionMark.split("&");

  // Find the query component that starts with `q=`
  for (let comp of comps) {
    if (comp.startsWith("q=")) {
      return comp.substring(2);
    }
  }
}

/**
 * Query hn.algolia.com with the given query.
 *
 * @param query - The query to search on HN.
 */
export async function commentsHn(query: string): Promise<AlgoliaHit[]> {
  const cleaned = cleanUrl(query);
  if (!cleaned) {
    return [];
  }

  console.log(`Searching on Algolia for query "${cleaned}".`);

  const { hits } = await askAlgolia(cleaned);
  console.log(hits);
  if (hits.length === 1) {
    location.replace(`${HN_URL}${hits[0].objectID}`);
  }

  return hits;
}
