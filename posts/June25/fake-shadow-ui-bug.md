---
title: "When Your UI Looks Broken (But Isn't): The Fake Shadow Bug"
description: "Thought my shadow was broken. Turns out, it had no space to show up. Here's the quick fix that saved me hours."
date: "2025-06-30"
image: "/images/shadow-glitch.png"
layout: ../../layouts/BlogLayout.astro
---

<h1 class="text-3xl font-bold mb-6">That time my shadow looked broken (but wasn’t)</h1>

<p>Quick one. I had this weird visual glitch on my site. A card with a <code>box-shadow</code> that looked like it was cut at the bottom. No fade, just... sliced.</p>

<p>I thought it was an <code>overflow</code> thing. So I added padding, then margins, then more padding but nothing.</p>

<p>Turns out, it wasn’t a bug.</p>

<p>The parent and the card had the exact same height. So even if the shadow was "allowed" to show, it had literally no space to exist.</p>

![Card shadow glitch](/images/shadow-glitch.png)

<p>What fixed it? Just reducing the card’s height by a few pixels. Suddenly, the shadow popped out. Clean, soft, normal.</p>

<p>So yeah, sometimes the issue isn’t your CSS. It’s your layout logic. The component looked fine but had nowhere to breathe.</p>

<p>Lesson learned: always check real dimensions before assuming your styles are broken.</p>
