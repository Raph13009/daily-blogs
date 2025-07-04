---
title: "Meta Ads Setup: Everything I Learned Launching My First Campaign"
description: "From Pixel configuration to asset linking, here’s what I figured out while launching my first Meta (Facebook + Instagram) ad. Clear steps, real mistakes, and how to avoid them."
date: "2025-07-04"
image: "/images/meta-ads-setup.png"
layout: ../../layouts/BlogLayout.astro
---

<h1 class="text-3xl font-bold mb-6">Meta Ads Setup: Everything I Learned Launching My First Campaign</h1>

<p>Until recently, I thought you just needed a Facebook account to run ads. Wrong.</p>

<p>Setting up Meta Ads — for Facebook or Instagram — is a whole system. It’s not just about the creative. It’s about permissions, accounts, Pixels, and a confusing maze of assets.</p>

<p>Here’s what I learned from scratch, the hard way, as a non-developer trying to get my first campaign live.</p>

<h2 class="text-xl font-semibold mb-4 mt-10">Business Manager is Mandatory</h2>

<p>You can’t just run ads from a personal account. You need a <strong>Meta Business Manager</strong>, which becomes the central hub to manage everything: your ad account, Facebook Page, Instagram, and Pixel.</p>

<p>If one of these assets isn't correctly linked, you’ll get stuck later. I lost hours wondering why my IG account didn’t show up in the campaign setup. It just wasn’t connected to the business account properly.</p>

<h2 class="text-xl font-semibold mb-4 mt-10">Pixel Setup Is a Full Step in Itself</h2>

<p>You have to <strong>create a Pixel</strong> from the Business Manager, then install the code snippet on your website (usually in the <code>&lt;head&gt;</code>).</p>

<p>But that’s not enough. The Pixel must also be <strong>linked to the right ad account</strong> — and the account must live inside the same Business Manager that owns the Pixel.</p>

<p>If not, it simply won’t appear as an option when setting up your campaign. This part took me way too long to understand.</p>

<h2 class="text-xl font-semibold mb-4 mt-10">Admin Rights Matter (a Lot)</h2>

<p>Another trap: even if something is "linked", it might not show up if you don’t have full admin rights.</p>

<p>Example: my Pixel was installed correctly, but I couldn’t select it in the ad setup. Turns out I wasn’t listed as an admin in the Business Manager that owned it.</p>

<p>Lesson learned: always <strong>double-check asset ownership and roles</strong> before launching.</p>

<h2 class="text-xl font-semibold mb-4 mt-10">Meta's Interface Isn’t User-Friendly</h2>

<p>Meta’s Ads Manager is powerful, but not intuitive. There are sub-menus hidden inside sub-menus, and asset permissions aren’t clearly explained.</p>

<p>Even things like "Advantage+ Creative" — which lets Meta test multiple versions of your visuals — sound simple but require careful setup if your ads have different headlines or formats.</p>

<p>You can't just upload all your ads in one go if they use different copies. You may need to create multiple <strong>ad sets or campaigns</strong>.</p>

<h2 class="text-xl font-semibold mb-4 mt-10">What I’d Do Differently Next Time</h2>

<p><strong>1. Prepare all assets in advance</strong>: Page, Instagram, Pixel, ad account, and admin roles. Check everything is connected inside Business Manager.</p>

<p><strong>2. Start small</strong>: With just one campaign, one creative, and one audience — to avoid confusion.</p>

<p><strong>3. Test formats intentionally</strong>: Meta performs differently on mobile, square, or Stories. It’s worth testing even with a low budget (around 1 €/day is possible).</p>

<h2 class="text-xl font-semibold mb-4 mt-10">Business Takeaways</h2>

<p>As someone coming from a business background, I realized this setup teaches real lessons in:</p>

<p>- <strong>Time to market</strong>: Delays often come from permissions, not just creative.</p>
<p>- <strong>Scalability</strong>: A clean asset structure lets you duplicate campaigns fast.</p>
<p>- <strong>ROI tracking</strong>: Without the Pixel, you’re flying blind. It’s your link between spend and real results.</p>

<p>Would I use Meta Ads again? Absolutely — but only with a checklist next time.</p>

&nbsp;