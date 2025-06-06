# 🧪 Astro Blog (lightweight)

Yo. This is a simple blog I made using [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/).  

## 🚀 How to start this thing

npm install  
npm run dev  

Then open localhost:4321 in your browser.

## ✍️ Writing a new post

1. Drop a `.md` file inside the `posts/` folder.
2. Paste this at the top:

---
title: "The post title"  
description: "Short vibe for the post"  
date: "2025-03-13"  
image: "/path/to/image.png" # optional  
---

Then write whatever you want in markdown.

3. Boom. It shows up on the homepage.

## 🧱 Folder

- src/pages/index.astro → homepage with your posts
- src/pages/blog/[slug].astro → for individual post pages
- posts/ → where all your markdown lives

## ☁️ Going live (with Vercel)

1. Push this repo to GitHub.
2. Hook it up to [Vercel](https://vercel.com/).
3. It auto-detects Astro and just works.

## 🪪 License

MIT. You can do whatever.
