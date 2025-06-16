---
title: "Why I Might Start This Project with Next.js Instead of Flutter"
description: "I'm exploring a music platform idea, and right now, building a simple MVP with Next.js seems more realistic than starting with Flutter. Here's what I'm thinking."
date: "2025-06-16"
image: "/images/nextjs-vs-flutter.png"
layout: ../../layouts/BlogLayout.astro
---

<BlogContent>
  <h1 class="text-3xl font-bold mb-6">Choosing the Right Stack for an MVP</h1>

  <p>I'm currently thinking about joining a project — a platform that helps artists connect with music professionals. Nothing is confirmed yet, but I'm exploring how I could help technically, and how we could build the first version.</p>

  <p>One of the first big questions is: <strong>Should I build an app, or just a website?</strong> And even more: <strong>Should I use Flutter or something like Next.js?</strong></p>

  &nbsp;

  <h2 class="text-xl font-semibold mb-4 mt-10">Why I'm leaning toward Next.js</h2>

  <p>At this stage, I think a simple website in <strong>Next.js</strong> might be the best move.</p>

  <p>Here's why:</p>

  <p>– I know Next.js better than Flutter</p> 
<p>– It’s faster to launch something basic</p>
<p>– I'm not sure yet if the project will really grow, so I need to move quickly and test it</p>

  &nbsp;

  <p>Flutter is cool because you can build one app for both iOS and Android, and even use it for web. But from what I’ve seen:</p>

  <p>– The web version of Flutter is <strong>bad for SEO</strong>  
– It's heavier and slower than a real website  
– It feels too much for a quick MVP</p>

  &nbsp;

  ![Next.js vs Flutter](/images/FluttervsReact.png)


  <h2 class="text-xl font-semibold mb-4 mt-10">How I could build the app later</h2>

  <p>If the project works and we want to build a real mobile app, there are a few options I'm keeping in mind:</p>

&nbsp;

  <p><strong>1. Build a real mobile app (Flutter or React Native)</strong>  
I can keep the backend (Supabase, Stripe, auth...) and just rebuild the mobile UI. It’s more work, but the result would be smooth and clean.</p>

  <p><strong>2. Wrap the website in a fake app (Capacitor + WebView)</strong>  
Basically, turn the site into a mobile app without changing much. It's fast, but not ideal for performance or App Store rules.</p>

  <p><strong>3. Migrate from Next.js to React Native (with Expo)</strong>  
This could be a smoother path, since both use React. I wouldn’t reuse everything, but it might save time compared to starting from scratch.</p>

  &nbsp;

  <h2 class="text-xl font-semibold mb-4 mt-10">What about the cost?</h2>

  <p>Building a basic site in Next.js could cost just a few hundred euros or be free if I do it myself. Maybe some fees for a cursor subscription or something like this.</p>

  &nbsp;

  <p>Turning it into an app later? Probably around <strong>€2,000–5,000</strong> if we already have the design, backend, and flows but want a freelance dev to do it.</p>

  &nbsp;

  <h2 class="text-xl font-semibold mb-4 mt-10">My conclusion (for now)</h2>

  <p>I’m not 100% sure yet. But for now, I feel like starting with a simple site in Next.js is the best balance: fast, flexible, and focused.</p>

  <p>If the project grows and people use it, then we can invest time and money into a real mobile app. But I don’t want to overbuild something that’s still in early validation.</p>

</BlogContent>
