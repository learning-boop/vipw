# VIPW website (React + Vite)

Homepage redesign for **Vijaya Institute of Pharmaceutical Sciences for Women**, Vijayawada (vipw.in), laid out like a modern college template: white sticky header, full-photo hero slider, rounded photo shapes, programme cards, navy feature bands. The colours are VIPW's own: SRK logo navy `#2D3795` and red `#E2191E`, vipw.in steel blue `#145187`, NAAC gold `#DEB12E` and amber `#F5A506`.

Earlier designs are kept, unbuilt, in `previous-design/` (first redesign) and `previous-design-2/` ("pharmacopoeia" version).

## Run it

Needs Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev       # local dev server at http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the production build locally
```

## Deploy

Upload the **contents** of `dist/` to the web root (cPanel `public_html`, Netlify, Vercel, etc.).
`vite.config.js` uses `base: './'`, so the build also works from a sub-folder.

## Where things are

```
src/
  data/content.js        all copy, facts, links, codes and photo slots: edit content here
  components/            one component per section
    TopBar, Header       social/contact strip, sticky white header with mobile menu
    Hero                 full-width photo "film" with captions, campus video pop-up, "Current events" strip
    About                photo collage and intro
    Counters             count-up figures over a photo
    Programmes           filterable programme cards
    VideoBlock           featured YouTube video
    WhyChoose            navy feature section with arched photo
    AdmissionCta         admissions banner
    Departments          five department cards
    Enquiry              enrolment form, admission steps, counselling codes
    Gallery              campus photo grid
    Disclosures          disclosure links and accreditation badges
    Footer               footer and back-to-top button
    SectionTitle, Reveal, Photo, Icon   shared pieces
  hooks/                 useInView, useCountUp, useReducedMotion
  lib/submitEnquiry.js   where the enquiry form sends its data
  index.css              all styles; brand colours are CSS variables at the top
public/
  srk-logo.png, naac-a-plus.png
```

## Before going live

1. **Photos.** All photos in `public/images/` come from vipw.in: the gallery and the infrastructure page, resized to 1000–1600px wide. To change one, replace the file or set its `photo` field in `src/data/content.js`.
2. **Logo.** `public/srk-logo.png` and `public/naac-a-plus.png` were cut from the header image and are small (about 130 × 90 px). Replace them with the original files at the same names for sharper results.
3. **Enquiry form.** Copy `.env.example` to `.env` and set `VITE_ENQUIRY_ENDPOINT` to a URL that accepts a JSON POST (PHP mailer, Google Apps Script, Formspree, CRM webhook). Until then the form only logs to the browser console.
4. **Entrance exam naming.** The site uses "AP EAPCET (EAMCET)". Change it in `content.js` if the institute prefers "EAMCET" alone.

## Motion and accessibility

- Scroll reveals, count-ups and the steps line use `IntersectionObserver`, so they work in every modern browser.
- Visitors who turn on "reduce motion" in their device settings get the page without animations.
- Keyboard: skip link, visible focus rings, arrow-key navigation between programme tabs, Escape closes the mobile menu.
- `index.html` includes the meta description, Open Graph tags and `CollegeOrUniversity` structured data.
