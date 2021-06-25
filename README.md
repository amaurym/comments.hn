[![Actions Status](https://github.com/amaurym/comments.hn/workflows/pr/badge.svg)](https://github.com/amaurym/comments.hn/actions)

# [`comments.hn`](https://comments.hn)

Prepend `comments.hn?q=` to any website to see its Hacker News comments.

For example, if you're reading Ciechanowski's [article](https://ciechanow.ski/gears) on gears, just do:

> **comments.hn?q=https://ciechanow.ski/gears**

[See demo](https://comments.hn?q=https://ciechanow.ski/gears)

## Why?

This website is heavily based on the excellent Web Extension [What HN Says](https://github.com/pinoceniccola/what-hn-says-webext), some code par. It works well on desktop, but no on mobile.

`comments.hn` is the easiest way I can think of to simulate the same experience on mobile and tablets.

## Run Locally

Run the following commands

```bash
git clone https://github.com/amaurym/comments.hn
cd comments.hn
yarn install
yarn dev # The website should be running on http://localhost:5000
```

## Credits

-   Thanks @pinoceniccola for the [What HN Says](https://github.com/pinoceniccola/what-hn-says-webext) Web Extension.
-   Built upon [Algolia](https://www.algolia.com/), uses [hn.algolia.com](https://hn.algolia.com) under the hood.
