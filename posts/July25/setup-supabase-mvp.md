---
title: "How I Set Up a Database for a Real MVP (Without Being a Dev)"
description: "For the music startup I joined as CPO, I built the full database using Supabase and some AI help — with a focus on speed and clarity, not perfection."
date: "2025-07-15"
image: "/images/database-setup.png"
layout: ../../layouts/BlogLayout.astro
---

<h1 class="text-3xl font-bold mb-6">How I Set Up a Database for a Real MVP (Without Being a Dev)</h1>

&nbsp;

For the new music platform I joined as CPO, I had to create a real backend:  
users can sign up, send messages, rate each other and post projects.  
So yes I needed a proper database.

&nbsp;

It wasn’t my first time. I had already managed a complex one before (20+ tables, 60K+ users).  
But here, I had to **rebuild everything from scratch**, in staging and make it run locally to test fast.

&nbsp;

<h2 class="text-xl font-semibold mb-4 mt-10">Why I Picked Supabase</h2>

I went with **Supabase** because it’s perfect for MVPs.  
Super easy login system, simple SQL, no server setup.  
And if the project grows, we’ll rebuild everything later with a “real” backend dev.

&nbsp;

I also use Supabase for my personal site (BoostAI Consulting) for SEO-friendly blog storage.  
So I was already a bit familiar with the platform.

&nbsp;

<h2 class="text-xl font-semibold mb-4 mt-10">SQL Was My Friend… and My Trap</h2>

I created all the tables using SQL, helped by GPT.  
But I forgot to **check naming consistency** some columns have underscores, some don’t, some are lowercase, some aren’t…

&nbsp;

Now it slows me down a lot when I code.  
Lesson learned: always take time to align your database naming before building the rest.

&nbsp;

<h2 class="text-xl font-semibold mb-4 mt-10">Keep It Simple, Ship It Fast</h2>

I built the whole thing **alone with AI help**.  
The hardest part was finding the best structure, not too complex but solid enough.

&nbsp;

For example, we have 3 different user types.  
Instead of 3 tables, I just added a `role` column in a single `User` table.  
Not the cleanest solution, but hey it’s MVP logic. We move fast.

&nbsp;

The goal was: build something that works, is testable, and doesn’t block the product vision.  
And that’s exactly what I did.
