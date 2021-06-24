[![Actions Status](https://github.com/amaurym/moothn.io/workflows/pr/badge.svg)](https://github.com/amaurym/moothn.io/actions)

# [`moothn.io`](https://moothn.io)

Prepend `moothn.io?q=` to any website to see its Hacker News comments.

For example, if you're reading Ciechanowski's [article](https://ciechanow.ski/gears) on gears, just do:

> **moothn.io?q=https://ciechanow.ski/gears**

[See demo](https://moothn.io?q=https://ciechanow.ski/gears)

## Why?

This website is heavily based on the excellent Web Extension [What HN Says](https://github.com/pinoceniccola/what-hn-says-webext), some code par. It works well on desktop, but no on mobile.

`moothn.io` is the easiest way I can think of to simulate the same experience on mobile and tablets.

## Run Locally

Run the following commands

```bash
git clone https://github.com/amaurym/moothn.io
cd moothn.io
yarn install
yarn dev # The website should be running on http://localhost:5000
```

## Credits

-   Thanks @pinoceniccola for the [What HN Says](https://github.com/pinoceniccola/what-hn-says-webext) Web Extension.
-   Built upon [Algolia](https://www.algolia.com/), uses [hn.algolia.com](https://hn.algolia.com) under the hood.
