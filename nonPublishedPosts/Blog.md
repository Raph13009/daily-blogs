---
title: "Fixing the 'Unverified' Commit Problem on GitHub"
description: "My GitHub commits weren’t showing as verified. Here's how I finally fixed it using GPG."
date: "2025-06-14"
image: "/images/git-verified.png"
---

<h2 class="text-xl font-semibold mb-4 mt-10">The Problem</h2>

<ul>
  <li>GitHub didn’t recognize my commits as <strong>“Verified”</strong>, even though I was using SSH.</li>
  <li>The line <code>gpg.format = ssh</code> in my <code>.gitconfig</code> was breaking the signing process.</li>
  <li>I hadn’t created a <strong>GPG key</strong> yet — which is actually the most reliable way to sign commits.</li>
  <li>The email in my Git config didn’t match the one linked to my GitHub account.</li>
</ul>


<h2 class="text-xl font-semibold mb-4 mt-10">What I Did to Fix It</h2>


<ul>
  <li>Generated a GPG key using:<br />
    gpg --full-generate-key</code>&nbsp;&nbsp;(<code>rsa4096
  </li>

  <li><strong>🆔 Exported the public key</strong> with:<br />
    <code>gpg --armor --export &lt;ID&gt;</code>&nbsp;&nbsp;then pasted it into my 
    <a href="https://github.com/settings/keys" target="_blank">GitHub GPG Keys</a> page.
  </li>

  <li><strong>⚙️ Updated my Git config</strong> to sign commits by default:</li>
</ul>

<pre><code>
git config --global user.signingkey &lt;ID&gt;
git config --global commit.gpgsign true
</code></pre>

<ul>
  <li><strong>🧹 Cleaned up</strong> my <code>.gitconfig</code> file:
    <ul>
      <li>Removed <code>gpg.format = ssh</code></li>
      <li>Updated my Git email to match the one on GitHub</li>
    </ul>
  </li>

  <li><strong>✅ Final test:</strong>&nbsp;&nbsp;I made a signed commit and GitHub finally showed the green badge — <span style="color:green;"><strong>Verified ✅</strong></span></li>
</ul>

<p>
  It took a few steps, but it’s totally worth it. Signed commits look more professional, and they prevent warnings in GitHub when working on serious projects.
</p>
