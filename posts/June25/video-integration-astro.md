---
title: "How I Finally Added a Background Video to My Website"
description: "I had no clue how to embed a video in my code. Turns out it was way simpler than I thought — and it opened a new world of Instagram-style interactions."
date: "2025-06-26"
image: "/images/video-bg.jpg"
layout: ../../layouts/BlogLayout.astro
---

<h1 class="text-3xl font-bold mb-6">How I Finally Added a Background Video to My Website</h1>

<p>I had seen it so many times those flashy landing pages with a looping video in the background. The most iconic one I remember is the [windsurf devs](https://windsurf.dev/) — yeah, the guys literally coding on a board. Hilarious and smart.</p>

<p>I always thought it was too complex to do. Like, maybe you had to host your video on a CDN, encode it manually, or use some obscure embed method. At first, I tried to upload my `.mp4` directly into Lovable (the AI website builder I was testing). Fail. File too large. No compression. No support.</p>

&nbsp;

<p>Then I switched to Cursor, opened my project, and just dropped my file into a new folder: `/public/video`. Done.</p>

&nbsp;

<p>I added this in my code:</p>

&nbsp;

<p>`&lt;video autoplay muted loop playsinline class="absolute top-0 left-0 w-full h-full object-cover z-0"&gt;
  &lt;source src="/video/hero.mp4" type="video/mp4" /&gt;
&lt;/video&gt;`</p>

&nbsp;

<p>And it worked instantly. No plugin. No backend. Just drop it in public like an image.</p>

<p>Bonus: I added an Instagram-style sound toggle so users can activate/deactivate audio if they want. It was just a `muted` property toggle in JS. Super easy.</p>

&nbsp;

<h2 class="text-xl font-semibold mb-4 mt-10">What It Taught Me (Beyond Just Video)</h2>

<p>- Time to market really improves when you use the right tools (Cursor + Astro = fast iterations)</p>
<p>- You don’t need a “video team” or “heavy infra” to look professional</p>
<p>- Prototyping visual interactions (like sound on/off, hover play, or responsive video) can be done with very little code</p>
<p>- The perceived UX quality goes way up when you add motion in a smart way</p>

&nbsp;

<h2 class="text-xl font-semibold mb-4 mt-10">And for AI builders?</h2>

<p>- If you’re working on a generative product (video, UI, design), this shows how close we are to no-code-level creativity</p>
<p>- Imagine pairing a GPT agent that generates short branded videos, and just uploads them straight into a `/public/video` folder with copy/paste-ready code</p>
<p>- It opens doors to fast MVPs in marketing, SaaS, even personal portfolios with*zero Figma, zero devs</p>

&nbsp;

<p>Honestly, the hardest part was not technical — it was thinking too big. Once I approached it like a TikTok feature rather than a backend feature… it just clicked.</p>

<p>If you're stuck like I was, just try dropping a `.mp4` into `/public/video`, and see what happens.</p>

&nbsp;
