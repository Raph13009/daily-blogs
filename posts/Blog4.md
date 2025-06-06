---
title: "Why My Code Blocks Had No Style (and How I Fixed It)"
description: "rehype-prism-plus was installed, but nothing changed. Here’s why — and what finally worked."
date: "2025-06-07"
---

# How I generate a style to my code elements in my blogs

&nbsp;

At first, I thought everything was working. I installed `rehype-prism-plus`, updated `astro.config.mjs`, added code styles in `global.css`, and restarted the dev server.

&nbsp;

But still no visual change. My code blocks looked like plain text. No colors, no borders, no contrast.

&nbsp;

Turns out: the plugin only works when your Markdown blocks are written with triple backticks and a language indicator. I was sometimes using raw `<pre>` tags, and Prism doesn’t apply anything to that.

&nbsp;

This works: `.selector { margin: auto; color: red }`

But this doesn't: `.selector { margin: auto; }`

&nbsp;

Once I fixed that, I realized the Prism styles were still barely visible — my theme was so light. So I added my own styling for `pre` and `code` in `global.css` with better contrast, borders, and a subtle box shadow.

&nbsp;

Now the result is clean, readable, and consistent in both themes.

&nbsp;

Lesson learned: a plugin is only half the work — the rest is syntax, CSS, and design consistency.
