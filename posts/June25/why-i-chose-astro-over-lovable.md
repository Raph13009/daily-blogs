---
title: "Why I Built This Blog with Astro (Not Lovable)"
description: "A short story about AI tools, failed shortcuts, and taking back control of my code."
date: "2025-06-05"
image: "/images/lovableWebsite.jpg"
---

# I choosed Astro for my blog.

&nbsp;

I usually build websites and platforms pretty fast using AI. You can send a good prompt to tools like Lovable, and then clean up or adjust the code with Cursor or Windsurf. These tools are powerful for fast creation, but if you stop paying attention to the code, it can quickly fall apart.

For this blog, I wanted something different from what I usually do. I started from a strong reference — the blog of [**Paul Stamatiou**](https://paulstamatiou.com/). I didn’t want to spend a whole week designing from scratch, and having a base to start from really helped. That’s a big part of the creative process in my opinion.

&nbsp;

I won’t lie — I tried sending screenshots of the blog to Lovable and said: "I want this exact blog, in React but I don't want Supabase or any SQL database behind it, I planned to connect it to a Notion database instead, when the status is set to `published`, the blog post should go live.

When I saw the result, it was a mess. I spent around five hours trying to fix it, but the output was still terrible. That’s when I realized something: yes, these tools can generate modern layouts, but they all end up looking exactly the same.

&nbsp;

![Lovable style](/images/lovableWebsite.jpg)

And honestly, I didn’t feel okay publishing a blog that looks like that. A blog should feel more personal. So I asked GPT what would work best for something simple, personal, and static. Astro came up. It made total sense. No backend, no headaches — just a static site, clean and easy to maintain.

&nbsp;

That’s why this blog is now built fully in Astro, with a bit of TypeScript.  
Here’s the full code if you’re curious:
[**Repo Github**](https://github.com/Raph13009/daily-blogs)
