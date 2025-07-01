---
title: "Building a Real-Time Chat with Supabase – What Went Wrong (And What Worked)"
description: "Tried to build a modern chat UI with Supabase Realtime and React, including file uploads, RLS policies, and optimistic updates. It almost worked... except for one critical bug."
date: "2025-06-30"
image: "/images/chat-supabase-ui.png"
layout: ../../layouts/BlogLayout.astro
---

<h1 class="text-3xl font-bold mb-6">Building a Real-Time Chat with Supabase – What Went Wrong (And What Worked)</h1>

<p>This week I tried to implement a complete real-time chat system using **Supabase** and **React**. It was meant to be clean, professional, and fully functional — real-time messaging, file uploads, beautiful UI. Most of it worked. But I hit a really painful bug I still can’t solve fully.</p>

&nbsp;

<h2 class="text-xl font-semibold mb-4 mt-10">The database: clear and scalable</h2>

<p>I created a <code>Message</code> table with all the expected fields:</p>

<p>- <code>id</code> (uuid, primary key)</p>
<p>- <code>content</code> (text)</p>
<p>- <code>senderId</code> (uuid)</p>
<p>- <code>receiverId</code> (uuid)</p>
<p>- <code>createdAt</code> (timestamp)</p>
<p>- <code>attachmentUrl</code> (text)</p>
<p>- <code>attachmentType</code> (text, e.g. image, audio, video…)</p>

<p>I also set up a **Supabase Storage bucket** named <code>chat-uploads</code>, with public read access and authenticated write access. It works perfectly.</p>

&nbsp;

<h2 class="text-xl font-semibold mb-4 mt-10">RLS Policies: annoying but necessary</h2>

<p>To protect the data, I added Row-Level Security policies on the <code>Message</code> table:</p>

<p>- <strong>INSERT:</strong> only if the user is the <code>senderId</code></p>
<p>- <strong>SELECT:</strong> only if the user is the <code>senderId</code> or the <code>receiverId</code></p>

<p>It took me hours to debug them. At some point, the condition didn’t work because I forgot to <code>::uuid</code> cast the IDs. Rookie mistake.</p>

&nbsp;

<h2 class="text-xl font-semibold mb-4 mt-10">UI/UX: clean, fixed layout like WhatsApp</h2>

<p>I took a lot of inspiration from apps like **Instagram DMs** and **WhatsApp**:</p>

<p>- The message input is always visible, even on mobile</p>
<p>- The main header is hidden when a chat is open, replaced with a chat-specific header</p>
<p>- You can preview and remove a file before sending it</p>

<p>It’s a small thing, but it really improves the experience and makes the app feel pro. Business school mindset: **UX boosts retention** and **reduces support tickets**.</p>

&nbsp;

<h2 class="text-xl font-semibold mb-4 mt-10">Sending messages: optimistic and fast</h2>

<p>Each message appears **instantly** in the UI (before server confirmation), thanks to optimistic updates. Files are uploaded to Supabase Storage, and the resulting public URL is saved in the message row.</p>

<p>Depending on <code>attachmentType</code>, the UI renders the right component:</p>

<p>- <code>&lt;img&gt;</code> for images</p>
<p>- <code>&lt;audio controls&gt;</code> for audio</p>
<p>- <code>&lt;video controls&gt;</code> for video</p>
<p>- Or just a basic download link</p>

&nbsp;

<h2 class="text-xl font-semibold mb-4 mt-10">Realtime Messaging: the frustrating part</h2>

<p>I set up a **Supabase Realtime** subscription on <code>Message</code> INSERT events. It listens to all messages and adds them to the chat if the current user is concerned.</p>

<p>**Problem:** it only works for the sender. The receiver never sees the new message in real-time. They have to refresh manually.</p>

<p>I spent a full day debugging this.</p>

&nbsp;

<h2 class="text-xl font-semibold mb-4 mt-10">What I tried (and what didn’t help)</h2>

<p>- Checked all **RLS policies**, with <code>::uuid</code> casting</p>
<p>- Switched to a global channel (no filter)</p>
<p>- Logged every callback</p>
<p>- Double-checked **Supabase Auth** and <code>getUser()</code> session</p>
<p>- Manually tested SELECT queries as the receiver (they work)</p>
<p>- Even tried a "USING (true)" policy — no effect</p>

<p>It’s probably a subtle policy bug or an edge case with Supabase Realtime. Possibly even a limitation. It really hurts the **Time to Market** when you’re solo shipping.</p>

&nbsp;

<h2 class="text-xl font-semibold mb-4 mt-10">Next debugging steps (if you hit the same wall)</h2>

<p>- In the receiver’s browser, check <code>supabase.auth.getUser()</code></p>
<p>- Try a SELECT manually via SQL editor as the receiver</p>
<p>- Relax the SELECT policy to the extreme to isolate the issue</p>
<p>- Update Supabase client and log the realtime WebSocket</p>
<p>- And if nothing works: open a ticket or go to the Discord</p>

&nbsp;

<h2 class="text-xl font-semibold mb-4 mt-10">Final thoughts</h2>

<p>This kind of setup is very **scalable** for early MVPs. You get:</p>

<p>- Auth + RLS + Storage in one platform</p>
<p>- Easy Realtime hooks</p>
<p>- Clean developer experience (when it works)</p>

<p>But the small bugs can kill your velocity. I’m still learning how to navigate them. At the end of the day, this was a great iteration — and a reminder that **shipping = learning**.</p>

&nbsp;

<p>Next step? Fix this realtime bug and move on to read indicators 🔥</p>

&nbsp;

<p><strong>Image used:</strong> ![Chat UI](/images/chat-supabase-ui.png)</p>
