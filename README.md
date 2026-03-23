# 1746 Abbot Kinney — Property Microsite

**Address:** 1746 Abbot Kinney Blvd, Venice, CA 90291  
**Size:** 6,055 SF  
**Type:** Creative Office Campus  
**Brokers:** Spencer Horak & Andrew Doan — Lee & Associates West LA

---

## Deployment Instructions

### Step 1 — Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: **`1746-abbot-kinney`**
3. Set to **Public**
4. Leave all other settings as defaults — do NOT initialize with README
5. Click **Create repository**

### Step 2 — Upload Files to GitHub

1. On the empty repo page, click **"uploading an existing file"**
2. Drag and drop the **entire unzipped folder contents** (including the `images/` subfolder) into the uploader
3. Commit message: `Initial commit`
4. Click **Commit changes**

### Step 3 — Deploy on Cloudflare Pages

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages**
2. Click **Connect to Git** → authorize GitHub → select the `1746-abbot-kinney` repo
3. Configure build settings:
   - **Framework preset:** None
   - **Build command:** *(leave blank)*
   - **Build output directory:** `/`
4. Click **Save and Deploy**

Your site will be live at `https://1746-abbot-kinney.pages.dev` in ~60 seconds.

---

## Custom Domain Setup

To use a custom domain (e.g., `1746abbotkinney.com` or `1746abbotkinney.leewestla.com`):

1. After deployment, go to your Pages project → **Custom domains** tab
2. Click **Set up a custom domain**
3. Enter your domain and follow the DNS instructions
4. If using a subdomain of a Cloudflare-managed domain, it auto-configures
5. For external domains, add the provided CNAME record at your registrar

**Recommended domain options:**
- `1746abbotkinney.com` — purchase via Cloudflare Registrar or Namecheap
- `1746abbotkinney.leewestla.com` — if you want it under your existing domain (add as CNAME in Cloudflare DNS)

---

## Adding Property Photos

Replace the placeholder images in the `images/` folder with real photos:

| Filename | Use |
|---|---|
| `hero.jpg` | Main hero banner (wide, landscape) |
| `overview.jpg` | Overview section right panel |
| `contact-bg.jpg` | Contact section background |
| `gallery1.jpg` | Gallery — tall left image |
| `gallery2.jpg` | Gallery — top center |
| `gallery3.jpg` | Gallery — top right |
| `gallery4.jpg` | Gallery — wide bottom left |
| `gallery5.jpg` | Gallery — bottom right |

**To swap images via GitHub:** Find the file → click `···` → Delete → commit, then Add file → Upload → commit.

---

## Making Edits

- **Text/price changes:** Edit `index.html` directly in GitHub (click the file → pencil icon)
- **PDF flyer swap:** Delete old PDF, upload new one with the same filename
- **Design changes:** Ask Claude to update and re-download the ZIP

---

## File Structure

```
1746-abbot-kinney/
├── index.html              Main site page
├── style.css               All styles
├── script.js               Scroll animations & behavior
├── _headers                Cloudflare Pages PDF download config
├── flyer_1746-abbot-kinney.pdf   Downloadable property flyer
├── README.md               This file
└── images/
    ├── LWLA_logo.png       Lee & Associates logo
    ├── hero.jpg            → Add your hero photo
    ├── overview.jpg        → Add overview photo
    ├── contact-bg.jpg      → Add contact background photo
    └── gallery1-5.jpg      → Add gallery photos
```
