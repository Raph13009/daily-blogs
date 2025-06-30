---
title: "How I Organize My Git Workflow Now"
description: "Before, I made messy edits directly on GitHub. Now I follow a proper flow with branches, staging, and clean PRs. Here's how I work with our startup repo."
date: "2025-06-27"
image: "/images/github-flow.png"
layout: ../../layouts/BlogLayout.astro
---

<h1 class="text-3xl font-bold mb-6">A Cleaner GitHub Workflow That Works for Me</h1>

<p>I recently changed how I work with our GitHub repo — and honestly, it makes everything smoother and more professional.</p>

<p>We have a shared repository for our startup’s website. It includes two main branches:</p>

&nbsp;

<p>- <strong>main</strong>: this is our live production version, the one visitors actually see</p>
<p>- <strong>staging</strong>: this is used for testing features before pushing them live. We also have a staging URL linked to this branch.</p>

&nbsp;

<p>Before, I was doing things a bit chaotically. Sometimes I would edit files directly on GitHub, or push untested changes to staging.</p>

&nbsp;

<p>Now, I follow a simple and safe process every time I need to make an update:</p>

<p>- First, I pull the latest code from the <strong>staging</strong> branch (I work locally from a cloned repo)</p>
<p>- Then I checkout a new branch. We use names like <code>feat/video-update</code> or <code>fix/button-style</code></p>
<p>- I make my changes locally and commit them</p>
<p>- I push the new branch to GitHub and open a <strong>Pull Request</strong> comparing it to <strong>staging</strong></p>

&nbsp;

<h2 class="text-xl font-semibold mb-4 mt-10">How I Decide When to Merge</h2>

<p>If the changes are small and have <strong>no impact on user experience</strong> (like text updates or style tweaks), I merge the PR myself into staging.</p>

<p>But if there’s any doubt — like a code change that could break something — I leave the PR open and ask a developer on the team to review it.</p>

<p>This process is much cleaner. It helps keep staging stable, and makes it easier to understand who changed what and why.</p>

&nbsp;

<h2 class="text-xl font-semibold mb-4 mt-10">Why This Matters</h2>

<p>For any startup or solo project, it’s easy to take shortcuts. But in the long run, <strong>a structured Git workflow improves collaboration and avoids mistakes</strong>.</p>

&nbsp;

<p>It also shows you’re able to ship features while thinking about:</p>

<p>- Time to market (you don’t waste time fixing broken things later)</p>
<p>- UX (you avoid bugs on production)</p>
<p>- Scalability (other team members can follow your logic)</p>

&nbsp;

<p>It might look simple, but this kind of small discipline makes a big difference — especially if you plan to work in tech or manage product teams.</p>

&nbsp;
