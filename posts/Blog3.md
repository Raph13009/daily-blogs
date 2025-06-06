---
title: "How I Actually Fixed Image Centering on Desktop"
description: "That feeling when your image looks 'centered' but it's not. Here's what really worked."
date: "2025-06-06"
---

# What I use now to center my images in my blogs

&nbsp;

I thought I had nailed image behavior on my blog: full width on mobile, centered on desktop. Simple.

&nbsp;

I had a small Astro plugin that wraps every `<img>` in a `<figure>` with a caption. I added a `.fullwidth` class, then used CSS to set `100vw` on mobile, and `max-width: 900px` with `margin: auto` on desktop.

&nbsp;

But nope. On desktop, the images looked kind of centered — but they were actually aligned with the text block. Which means: they were visually pushed to the right. It was subtle, but once I saw it, I couldn’t unsee it.

&nbsp;

I assumed this would be enough: `margin-left: auto;` and `margin-right: auto;`

&nbsp;

But since the image was inside a `.prose` container, it only centered within that — not relative to the full screen.

&nbsp;

So I went back to basics and added the classic CSS trick that just works: `position: relative; left: 50%; transform: translateX(-50%)`

&nbsp;

Boom. The image was finally centered — not just mathematically, but visually.

&nbsp;

If you're using Astro or any static site generator and want proper alignment, don’t overcomplicate it. Sometimes, old CSS wins.
