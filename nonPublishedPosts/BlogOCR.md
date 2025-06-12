---
title: "From PDF to Excel — My Real Fix"
description: "Turning messy certificates into clean Excel files wasn’t as easy as it sounded. Here’s the full story (with GPT inside)."
date: "2025-06-20"
image: "/images/pdf-to-excel.png"
layout: ../../layouts/BlogLayout.astro
---

<h1 class="text-xl font-semibold mb-4 mt-10">My homemade OCR</h1>

&nbsp;

It sounded simple on paper.

“Can you convert these certificates from PDF into clean Excel files?”

I said: “Yeah sure, no problem 👌” (classic). But of course... it wasn’t that simple.

&nbsp;

<h2 class="text-xl font-semibold mb-4 mt-10">🧪 First Try — Python + OCR Stack</h2>

I went with the usual setup:

`pdfplumber` to read the PDF  
`pytesseract` for OCR (to read text from the image)  
`pandas` to format everything into `.xlsx`

And honestly? It kind of worked.

&nbsp;

But the PDF was messy.  
Some sections were blurry, columns slightly off, text broken in weird ways.  
Result: blank cells, misread text, and half-broken tables in Excel.

&nbsp;

<h2 class="text-xl font-semibold mb-4 mt-10">🧪 Second Try — Manual Coordinates</h2>

Plan B: define each text zone with pixel precision, like: “Read between x=45 and x=220, and paste that into the 'Product' column.” It worked! But only if the layout never changed, the moment there’s an extra line or the layout shifts a bit, it all breaks.
Not scalable. Not smart. And I wanted something **robust**, **reliable**, and low-maintenance.

&nbsp;

<h2 class="text-xl font-semibold mb-4 mt-10">💡 Third Try — GPT in the Loop (Securely)</h2>

Of course I thought: “Why not just send the PDF to ChatGPT and ask it to interpret it like a human?” But the client didn’t want their sensitive docs on ChatGPT Web — totally fair. So I hooked up the **OpenAI API** directly in my Python script. And then… **magic.**

&nbsp;

<h2 class="text-xl font-semibold mb-4 mt-10">🎯 The Final Setup</h2>

<p>Here’s what actually worked:</p>

&nbsp;

<p>1. Manually convert each PDF page to <code>.png</code></p>

<p>2. Send the image to <strong>GPT-4o Vision</strong> via API</p>

<p>3. Ask GPT: <em>“Read this certificate. Extract the general info block and the technical table. Return clean JSON.”</em></p>

<p>4. Use <code>pandas</code> to insert that into an Excel template</p>


&nbsp;

**Result?**

✅ Super reliable  
✅ Handles weird line breaks or extra rows  
✅ No need to define pixel coordinates  
✅ Fully local with secure API (no training data leakage)

&nbsp;

![PDF to Excel process](/images/OCR.png)

&nbsp;

<h2 class="text-xl font-semibold mb-4 mt-10">What’s Next?</h2>

I’m adding automatic PDF-to-PNG conversion next — so the user doesn’t even have to think about it. And honestly, this combo (Vision + GPT + Excel) could work for **invoices**, **reports**, **certificates**, even **medical data**. I learned a lot from this. And now I have a solution that just works.

</BlogContent>
