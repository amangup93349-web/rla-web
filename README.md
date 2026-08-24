# Rankers & Learners Academy — Website

## Folder Guide — kya kahan edit karein

| Folder / File | Kya change hota hai |
|---|---|
| `data/courses.js` | Courses offered + "Why Us" list |
| `data/founders.js` | Founders (name, photo, points, quote, bio) |
| `data/mentors.js` | Mentors list (name, optional photo, lines) |
| `data/faculty.js` | Faculty list |
| `data/fees.js` | All fee tables (Commerce, Foundation, School) |
| `data/blog.js` | Blog posts |
| `data/branches.js` | Branch addresses + phone/email/Instagram |
| `data/gallery.js` | Gallery captions/photos |
| `css/style.css` | Colors, fonts, spacing, glass effect, layout |
| `js/main.js` | Admission form behaviour |
| `js/render.js` | Builds the page from the data files above (don't need to touch this) |
| `index.html` | Page structure/sections — rarely needs editing now |
| `assets/logo/logo.png` | Site logo — used in the navbar, hero fallback, and footer |
| `assets/team/` | Founder photos |
| `assets/mentors/` | Mentor photos (optional — mentors can also have no photo) |
| `blog.html` | The "View All Blogs" page — shows every post from `data/blog.js` (homepage only shows the latest 3) |
| `assets/hero-carousel/` | Auto-changing photo strip on the home page (add 8-10 photos here) |
| `data/carousel.js` | List of which photos to show in the hero carousel, and how often it changes |
| `assets/gallery/` | Drop real gallery photos here, then reference them in `data/gallery.js` |
| `google-apps-script/Code.gs` | Code to paste into Google Apps Script so the Admission Form saves to a Google Sheet |
| `google-apps-script/Code.gs` | Code to paste into Google Apps Script so the Admission Form saves to a Google Sheet |

## How to test locally

Because the page loads `data/*.js` files, some browsers block this if you just
double-click `index.html` (file:// restrictions). Easiest fix:

1. Install the **Live Server** extension in VS Code
2. Right-click `index.html` → "Open with Live Server"
3. It opens in your browser at `http://localhost:...` and everything works

## How to add a new founder (example)

Open `data/founders.js`, copy one `{ ... }` block, paste it, add a comma
between the two blocks, and edit the text + photo path. Put the photo file in
`assets/team/` first.

## How to add gallery photos (with click-to-open lightbox)

Each tile in `data/gallery.js` can hold several photos. Clicking the tile on
the site opens a full-screen lightbox with next/prev arrows through all of
that tile's photos.

1. Put the image file(s) in `assets/gallery/`
2. In `data/gallery.js`, find that tile's entry and list the files under `images`:
   ```
   { caption: "Classroom Session", images: [
       "assets/gallery/classroom1.jpg",
       "assets/gallery/classroom2.jpg"
   ] }
   ```
3. A tile with an empty `images: []` just stays a plain placeholder (not clickable) until you add photos.

## "View on Map" button on each branch

Each branch in `data/branches.js` has a `mapLink`. Right now it's a Google Maps
search link built from the address. For the exact pin instead of a text
search: open Google Maps, find the branch, click "Share" → "Copy link", and
paste that link in as the `mapLink` value.

## Icons (phone, email, Instagram, map pin)

These are built directly into `js/render.js` as small vector icons (no image
files to manage) — they automatically match the site's colors. If you'd
rather use your own icon images instead, put them in `assets/icons/` and
replace the matching `ICONS.xxx` line in `js/render.js` with an `<img>` tag.

## Hero carousel (auto-changing photos, every 5 seconds)

The card on the home page next to "Learn from Professionals..." can show a
rotating photo strip instead of the logo.

1. Add 8-10 photos to `assets/hero-carousel/`
2. Open `data/carousel.js` and list them, e.g.:
   ```
   images: [
     "assets/hero-carousel/photo1.jpg",
     "assets/hero-carousel/photo2.jpg",
     "assets/hero-carousel/photo3.jpg"
   ]
   ```
3. Change `intervalSeconds: 5` in that same file if you want it faster/slower.
4. If `images` is left empty, the card just shows the logo like before.

## Connecting the Admission Form to Google Sheets

This makes every form submission land as a new row in a Google Sheet you own.
One-time setup (about 5 minutes):

1. **Create a Google Sheet** — go to sheets.google.com, create a new blank sheet.
   Name it something like "Admissions".
2. In that sheet, go to **Extensions → Apps Script**. A code editor opens.
3. Delete anything in the editor, and paste in the entire contents of
   `google-apps-script/Code.gs` (from this project) instead.
4. Click **Save** (the disk icon), then **Deploy → New deployment**.
5. Click the gear icon next to "Select type" → choose **Web app**.
6. Set:
   - Execute as: **Me**
   - Who has access: **Anyone**
7. Click **Deploy**. Google will ask you to authorize — click through
   (you'll see an "unsafe" warning since it's your own unpublished script;
   click "Advanced" → "Go to project (unsafe)" → Allow). This is expected
   for personal scripts and is safe since you wrote/pasted the code yourself.
8. Copy the **Web app URL** it gives you (ends in `/exec`).
9. Open `js/main.js` in this project, find this line near the top:
   ```
   const GOOGLE_SCRIPT_URL = "PASTE_YOUR_GOOGLE_APPS_SCRIPT_URL_HERE";
   ```
   and replace the text inside the quotes with the URL you copied.
10. Save, re-upload/redeploy your site. Test the form — a new row should
    appear in your Google Sheet within a few seconds.

**Note:** if you ever change the form's questions, update `Code.gs` to match
(the column names in `sheet.appendRow([...])`) and redeploy the Apps Script
(Deploy → Manage deployments → Edit → New version).

## Mentors section

Works exactly like Faculty, but each mentor can optionally have a photo.

1. Open `data/mentors.js`
2. Copy one `{...}` block to add a new mentor, or delete one to remove
3. To add a photo: drop the image in `assets/mentors/` and set `photo: "assets/mentors/yourfile.jpg"`
4. To leave a mentor without a photo, just set `photo: ""`

## Blog "View All" page

The homepage Blog section shows up to **3** posts, and a "View All Blogs"
button (top-right of that section) opens `blog.html`, which lists **every**
post from `data/blog.js` — you don't need to maintain two lists, both pages
read the same file.

By default the homepage just shows the first 3 posts in the list. If you'd
rather hand-pick which ones appear on the homepage (e.g. your best/most
important posts), add `featured: true` to those specific posts in
`data/blog.js`. As soon as one post has `featured: true`, the homepage
switches to showing only featured posts (up to 3) — everything else still
shows on the "View All Blogs" page regardless of the flag.

## Branch icons

The "Main Branch" card automatically gets a slightly different icon (a small
building/home icon) than "First Branch" and "Second Branch" (which get a
location pin) — this is based on matching the exact text "Main Branch" in
`data/branches.js`. If you rename that branch, update the check in
`js/render.js` (search for `"Main Branch"`) to match your new name.

## Notes on fixes made in this update

While going through the uploaded project, a few things were fixed:
- The logo file was named `Logo.png` but the code referenced `logo.png` —
  this works on some computers but breaks on real hosting (which is
  case-sensitive). Renamed the file to `logo.png` to match.
- Prof. Raj Bisht and CA Ashish Medicala's photos were swapped in
  `data/founders.js` — fixed.
- The `<p id="formNote">` element had been deleted from the Admission Form,
  which would have silently broken the entire form (no success/error message,
  and depending on the browser, submissions may not have worked at all).
  Restored it.
- `google-apps-script/Code.gs` didn't have a column for the new "Branch"
  field — added it, so branch selections now save to the Sheet too.
- One Celebration gallery photo (`Celebration1.jpg`) had been accidentally
  commented out — restored it.
