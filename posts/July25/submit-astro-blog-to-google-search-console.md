---
title: "Submitting My Astro Blog to Google Search Console"
description: "My blog wasn’t showing up on Google — turns out I forgot to generate and submit a sitemap. Here’s how I fixed it."
date: "2025-07-14"
image: "/images/sitemap-cover.png"
layout: ../src/layouts/MarkdownPost.astro
---

<h1 class="text-3xl font-bold mb-6">Submitting My Astro Blog to Google Search Console</h1>

I launched my Astro blog, traffic seemed okay, the Google tag was firing...  
But weeks later, none of my blog posts were showing up on Google.

&nbsp;

Turns out, I had skipped one essential step: generating and submitting a sitemap.  
Here’s exactly what I did to fix it — in case you ever run into the same issue.

&nbsp;

<h2 class="text-xl font-semibold mb-4 mt-10">1. Add the sitemap plugin</h2>

I ran:  
`npm install @astrojs/sitemap`

&nbsp;

Then I edited my `astro.config.mjs` like this:

&nbsp;

```js
import { defineConfig } from 'astro/config';  
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.byraphaellevy.com',
  integrations: [sitemap()]
});
```

&nbsp;

This generates a `sitemap-index.xml` file when you build your site.

&nbsp;

<h2 class="text-xl font-semibold mb-4 mt-10">2. Build and check the output</h2>

I ran:  
`npm run build`

&nbsp;

It created the sitemap files in the `dist/` folder. I then visited this URL to confirm:

`https://www.byraphaellevy.com/sitemap-index.xml`

&nbsp;

![Google Search Console success preview](/images/sitemap-preview.png)

&nbsp;

<h2 class="text-xl font-semibold mb-4 mt-10">3. Submit the sitemap to Google</h2>

I logged into [Google Search Console](https://search.google.com/search-console/about)  
Then in the "Sitemaps" section, I submitted this:  
`sitemap-index.xml`

**Important:** don’t include a `/` at the beginning — I did at first, and it returned an error.

&nbsp;

![Submitted sitemap](/images/search-console-submitted.png)

&nbsp;

<h2 class="text-xl font-semibold mb-4 mt-10">4. It worked!</h2>

After a few minutes, it showed 10 discovered URLs.  
That means my blog pages are finally eligible for indexing.

&nbsp;

Now that this is in place, I feel like the blog is "live" for real.

