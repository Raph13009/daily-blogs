---
title: "Fixing the GitHub Verified Commit Issue"
description: "My commits weren’t showing as Verified. Here's how I solved it using GPG and a proper setup."
date: "2025-06-19"
---

**Fixing the GitHub Verified Commit Issue**

&nbsp;

For a while, my GitHub commits weren't showing up as **Verified**. Even though I was using SSH, GitHub didn’t recognize my signatures.

&nbsp;

Here’s what was wrong:
- I hadn’t generated a GPG key yet (the most reliable way to sign commits).
- My Git config included `gpg.format = ssh`, which broke the signing process.
- The email I set in Git didn’t match the one on my GitHub account.

&nbsp;

To fix it, I did the following:

- I generated a new GPG key using: `gpg --full-generate-key`
- Then exported the public key: `gpg --armor --export ID`
- I pasted the key into [GitHub > Settings > GPG Keys](https://github.com/settings/keys)
- I updated my Git config:

&nbsp;

  `git config --global user.signingkey ID`
  `git config --global commit.gpgsign true`

I removed the `gpg.format = ssh` line from my `.gitconfig`

And I updated my Git email to match the one used on GitHub
After that, I made a new commit — and this time it showed up as Verified ✅.

 &nbsp;

![My commits](/images/commitVerified.png)


Now every commit I make is signed and trusted, which feels more professional and clean (I guess).

 &nbsp;

Lesson learned: GitHub verification isn’t automatic, even with SSH. You need GPG, the right config, and matching identity details.
