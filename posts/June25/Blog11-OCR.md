---
title: "How I Converted Messy PDFs to Excel"
description: "Tried OCR with full Python, not 100% reliable, then used GPT-4 Vision to convert PDF certificates into clean Excel files. Here’s the full journey, code-free and API-powered."
date: "2025-06-17"
image: "/images/OCR.png"
layout: ../../layouts/BlogLayout.astro
---

<BlogContent>
  <h1 class="text-3xl font-bold mb-6">Building a Smarter OCR with GPT Vision</h1>

  <p>I was asked to “convert a bunch of certificates from PDF into Excel.” Simple, right? I said yes without thinking — classic move.</p>

  <p>So I started with what everyone tries first: a homemade OCR with Python. I used <code>pdfplumber</code> to extract pages, <code>pytesseract</code> to read text from the images, and <code>pandas</code> to structure the output into .xlsx files.</p>

  <p>And… it kind of worked. But not reliably. Some PDFs were clean. Others? Not so much. Blurry sections, columns that shifted by a few pixels, broken text.</p>

  &nbsp;

  <p><strong>The result:</strong> Excel sheets full of empty cells, weird errors, and frustration. And to be honest, I still don’t fully know what went wrong.</p>

  &nbsp;

  <h2 class="text-xl font-semibold mb-4 mt-10">Why OCR in Python Didn’t Work for PDF to Excel</h2>

  <p>Next, I tried to fix things manually. I defined pixel zones for each text block: “read between x=45 and x=220, paste in column A,” and so on. That worked great — but only as long as the PDF layout never changed. One extra line, one missing row, and the whole thing broke.</p> 
  <p>Not scalable, not smart, not something I could hand off to a client.</p>

  &nbsp;

  <h2 class="text-xl font-semibold mb-4 mt-10">Using OpenAI GPT-4 Vision to Read Certificates</h2>

  <p>I had a thought: “Why not let GPT read the document like a human would?” But I couldn’t just upload sensitive PDFs to ChatGPT Web — the client was right to be cautious. So I built a local Python script that sends certificate images to the OpenAI API (<strong>GPT-4o Vision</strong>), and asks:<em>“Extract the general information block and the technical table from this certificate. Return structured JSON.”</em></p>

&nbsp;

  <p>The result? Honestly magical.</p>

  &nbsp;

  <h2 class="text-xl font-semibold mb-4 mt-10">Final Setup to Convert PDFs to Excel Automatically</h2>

  <p>Here’s what worked best:</p>

  <p>1. Convert each PDF page to <code>.png</code><br/>
  2. Send the image to GPT Vision via API<br/>
  3. Parse the JSON response<br/>
  4. Use <code>pandas</code> to insert everything into a clean Excel template</p>

&nbsp;

  <p>✅ It handles messy PDFs<br/>
  ✅ No need to define pixel zones<br/>
  ✅ Super fast and secure<br/>
  ✅ Costs less than $0.01 per file — way cheaper than 30 mins of manual work</p>

  &nbsp;

  <h2 class="text-xl font-semibold mb-4 mt-10">From Script to Real Interface</h2>

  <p>I didn’t share the Python script — instead, I built a public drag-and-drop page on my personal site. You upload your PDF, and it does the job. Simple interface, same logic. You can try it <a href="https://www.boostaiconsulting.com/convert" class="underline">here</a>.</p>

  <p>I added a cost limit on the OpenAI key, so I don’t end up paying for the world’s PDFs 😅. But if it starts getting traffic, I’m ready to add a password gate. For now: it’s free, and it works.</p>

  <img src="/images/OCR.png" alt="Preview of the drag-and-drop OCR tool" />

  &nbsp;

  <h2 class="text-xl font-semibold mb-4 mt-10">What I Learned About Automating PDF to Excel</h2>

  <p>Sometimes the best solution isn’t 100% code. I tried OCR, I tried pixel math — but in the end, combining a modern API with a good UI was the real fix.</p>

  <p>And I’m keeping this setup. It could work for invoices, reports, medical forms… anything structured. GPT Vision isn’t just a toy. It’s now part of my toolbox.</p>
</BlogContent>

<p>Here’s the full <code>main.py</code> script used to convert PDF certificates into Excel files using GPT-4 Vision:</p>

  &nbsp;

<div class="code-wrapper">
<pre><code class="language-python">
import os
import json
import base64
import time
import pandas as pd
from openai import OpenAI
from dotenv import load_dotenv
from pathlib import Path
from pdf2image import convert_from_path
from PIL import Image

# API Key
load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

INPUT_DIR = "input_png"
OUTPUT_DIR = "output_excel"
os.makedirs(OUTPUT_DIR, exist_ok=True)

PROMPT = """
This is a quality certificate.

Extract two structured sections:

1. A key:value list of certificate metadata (e.g. Product, Lot no., Expiration Date, etc.)
2. A full table with columns: Characteristic, Method, Specification, Result.

Be exhaustive, even if some values are missing.

Return a JSON object like:
{
  "header": [{"key": "...", "value": "..."}, ...],
  "table": [{"Characteristic": "...", "Method": "...", "Specification": "...", "Result": "..."}, ...]
}
"""

def encode_image(image_path):
    with open(image_path, "rb") as img_file:
        return base64.b64encode(img_file.read()).decode("utf-8")

def parse_gpt_response(content):
    try:
        match = content[content.index("{"):content.rindex("}")+1]
        return json.loads(match)
    except Exception as e:
        print(f"❌ JSON parsing error: {e}")
        return None

def process_image(image_path):
    b64_image = encode_image(image_path)
    try:
        response = client.chat.completions.create(
            model="gpt-4o",
            messages=[
                {"role": "user", "content": [
                    {"type": "text", "text": PROMPT},
                    {"type": "image_url", "image_url": {"url": f"data:image/png;base64,{b64_image}"}}
                ]}
            ],
            max_tokens=2000
        )
        return response.choices[0].message.content
    except Exception as e:
        print(f"❌ API error on {image_path}: {e}")
        return None

def save_excel(json_data, excel_path):
    header_df = pd.DataFrame(json_data["header"])
    header_df.columns = ["Clé", "Valeur"]
    table_df = pd.DataFrame(json_data["table"])
    with pd.ExcelWriter(excel_path, engine="openpyxl") as writer:
        header_df.to_excel(writer, index=False, startrow=0, startcol=0, sheet_name="Sheet1")
        table_df.to_excel(writer, index=False, startrow=len(header_df) + 2, startcol=0, sheet_name="Sheet1")

def convert_pdf_to_pngs(pdf_dir, png_dir):
    os.makedirs(png_dir, exist_ok=True)
    for pdf_path in Path(pdf_dir).glob("*.pdf"):
        pdf_stem = pdf_path.stem
        first_png = Path(png_dir) / f"{pdf_stem}_page1.png"
        if first_png.exists():
            continue
        try:
            images = convert_from_path(str(pdf_path), dpi=300)
            for i, img in enumerate(images):
                out_path = Path(png_dir) / f"{pdf_stem}_page{i+1}.png"
                img.save(out_path, "PNG")
            print(f"🖼️ {pdf_path.name} -> {len(images)} PNG(s)")
        except Exception as e:
            print(f"❌ Conversion error {pdf_path.name}: {e}")

def main():
    convert_pdf_to_pngs("input_pdf", "input_png")
    png_files = list(Path(INPUT_DIR).glob("*.png"))
    if not png_files:
        print("📂 No PNG files found in input_png/")
        return

for png_path in png_files:
        start = time.time()
        print(f"\n🔍 Processing {png_path.name}...")

response_text = process_image(png_path)
        if not response_text:
            continue

txt_path = Path(OUTPUT_DIR) / f"{png_path.stem}_raw.txt"
        with open(txt_path, "w", encoding="utf-8") as f:
            f.write(response_text)

data = parse_gpt_response(response_text)
        if not data:
            continue

excel_path = Path(OUTPUT_DIR) / f"{png_path.stem}_gpt4o.xlsx"
        save_excel(data, excel_path)
        print(f"✅ Done: {excel_path.name} ({time.time() - start:.1f}s)")

    if __name__ == "__main__":
     main()
</code></pre>
</div>
