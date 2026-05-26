
````md
# Barber Labs Design Direction

## 1. Brand Positioning

Barber Labs is a minimal editorial barbershop booking website.

The website should feel less like a typical salon or barbershop template and more like a calm, curated visual archive with a functional booking system built into it.

The brand direction is:

- Minimal
- Editorial
- Monochrome
- Premium
- Precise
- Quietly confident
- Appointment-focused
- Archive-inspired

Barber Labs should feel like a modern barbershop for people who value clean cuts, clear schedules, and a calm experience.

The website should communicate:

> Clean cuts, clear schedule, no waiting.

The visual language should be inspired by white-space-heavy portfolio/archive layouts, with strong black typography, sparse visual rhythm, small captions, and carefully placed imagery.

Do not make the website feel like:

- A generic salon website
- A colorful beauty service landing page
- A startup SaaS product
- A marketplace booking app
- A loud promotional landing page
- A template-heavy barbershop website

The ideal feeling is:

> Editorial archive meets appointment system.

---

## 2. Core Visual Principles

### 2.1 White Background

The primary background must be white or near-white.

Recommended values:

```css
--color-background: #FFFFFF;
--color-surface: #FAFAFA;
--color-subtle: #F5F5F5;
````

Avoid tinted backgrounds, gradients, or decorative sections.

The whitespace is part of the identity. Do not try to “fill” empty space unnecessarily.

---

### 2.2 Black Typography

Typography should be bold, clean, and high-contrast.

Recommended values:

```css
--color-text-primary: #000000;
--color-text-secondary: #4A4A4A;
--color-text-muted: #777777;
--color-border: #DDDDDD;
--color-border-soft: #EAEAEA;
```

Main text should be black. Secondary information can use muted gray.

Do not use colorful text unless absolutely necessary for system feedback.

---

### 2.3 Extreme Whitespace

Whitespace should be generous and intentional.

Large empty areas are allowed and encouraged, especially on desktop.

The layout should not feel compact, crowded, or dashboard-like.

Use whitespace to create:

* Calmness
* Premium feeling
* Editorial rhythm
* Focus on typography
* Focus on images
* Clear booking flow

---

### 2.4 Monochrome / Desaturated Photography

Images should be mostly black-and-white or heavily desaturated.

Photography should feel raw, editorial, and precise.

Use images of:

* Haircut close-ups
* Fade details
* Taper details
* Hair texture
* Barber chair details
* Clippers
* Scissors
* Mirrors
* Barber station
* Hands working
* Neckline details
* Finished cuts

Avoid overly glossy, colorful, stock-photo-like images.

The photography should support the brand, not dominate it.

---

### 2.5 Minimal Dividers

Use thin dividers to organize information.

Recommended divider style:

```css
border-color: #DDDDDD;
border-width: 1px;
```

Dividers should be subtle and functional.

Use them for:

* Service rows
* Barber rows
* Booking summary
* Footer separator
* Form sections
* Schedule rows

Do not use heavy borders, colored borders, or decorative frames.

---

### 2.6 No Heavy Visual Effects

Avoid:

* Heavy shadows
* Gradients
* Bright accent colors
* Rounded colorful cards
* Glassmorphism
* Neumorphism
* Decorative blobs
* Floating stickers
* Playful illustrations
* Excessive icons

The design must remain restrained.

---

## 3. Typography Direction

Typography is the main visual identity of Barber Labs.

The website should rely on strong type hierarchy instead of decorative elements.

### 3.1 Font Direction

Use a clean grotesk or neo-grotesk sans-serif.

Preferred type direction:

* Neue Haas Grotesk
* Helvetica Now
* Suisse Intl
* ABC Diatype
* Inter
* Geist Sans

If premium fonts are unavailable, use:

```css
font-family: Inter, Helvetica, Arial, sans-serif;
```

Typography should feel:

* Sharp
* Modern
* Neutral
* Editorial
* Confident

Avoid:

* Decorative fonts
* Serif fonts for main UI
* Rounded playful fonts
* Overly futuristic fonts

---

## 4. Type Scale

### 4.1 Desktop Type Scale

Recommended desktop sizes:

```css
--text-xs: 12px;
--text-sm: 14px;
--text-base: 16px;
--text-md: 18px;
--text-lg: 22px;
--text-xl: 28px;
--text-2xl: 36px;
--text-hero: clamp(72px, 8vw, 112px);
```

### 4.2 Mobile Type Scale

Recommended mobile sizes:

```css
--text-xs: 11px;
--text-sm: 13px;
--text-base: 15px;
--text-md: 17px;
--text-lg: 20px;
--text-xl: 26px;
--text-hero: clamp(48px, 14vw, 68px);
```

---

## 5. Typography Usage

### 5.1 Brand Name

Use plain text for the logo.

```text
Barber Labs
```

Style:

* Bold
* Black
* Sans-serif
* No symbol required
* No decorative logo required

Desktop:

```css
font-size: 28px;
font-weight: 700;
letter-spacing: -0.04em;
```

Mobile:

```css
font-size: 22px;
font-weight: 700;
letter-spacing: -0.04em;
```

---

### 5.2 Hero Headline

Example:

```text
Haircuts /
by appointment
```

Style:

```css
font-size: clamp(72px, 8vw, 112px);
font-weight: 800;
line-height: 0.95;
letter-spacing: -0.06em;
```

The headline should feel large, direct, and confident.

It should not be centered by default. Prefer left or offset alignment.

Mobile:

```css
font-size: clamp(48px, 14vw, 68px);
line-height: 0.95;
letter-spacing: -0.055em;
```

---

### 5.3 Section Labels

Use numbered section labels consistently.

Examples:

```text
01 / Services
02 / Cuts 2025–2026
03 / Barbers
04 / Location & Hours
```

Style:

```css
font-size: 18px;
font-weight: 700;
letter-spacing: -0.02em;
```

Mobile:

```css
font-size: 16px;
font-weight: 700;
```

Section labels create the editorial/archive feeling. Use them across all major pages.

---

### 5.4 Body Copy

Body copy should be short and direct.

Good examples:

```text
Clean cuts, clear schedule, no waiting.
```

```text
Choose your service, select a time, and confirm your chair.
```

```text
All services by appointment only.
```

Style:

```css
font-size: 18px;
line-height: 1.4;
font-weight: 400;
letter-spacing: -0.02em;
```

Avoid long marketing paragraphs.

---

### 5.5 Captions

Captions are important for the archive feeling.

Example:

```text
Low Fade
APR 2026
```

Style:

```css
.caption-title {
  font-size: 14px;
  font-weight: 600;
  line-height: 1.2;
}

.caption-meta {
  font-size: 12px;
  font-weight: 400;
  color: #777777;
  text-transform: uppercase;
}
```

Captions should be small, clean, and understated.

---

## 6. Layout Composition

## 6.1 Desktop Grid

Use a 12-column grid.

Recommended desktop layout values:

```css
--page-padding-x: 32px;
--page-padding-y: 28px;
--grid-columns: 12;
--grid-gap: 24px;
--section-gap: 120px;
```

For wider screens:

```css
--page-padding-x: 48px;
--grid-gap: 32px;
--section-gap: 140px;
```

The layout should feel spacious and asymmetrical.

Avoid placing every section in a centered container. The design should feel more like an editorial spread than a standard landing page.

---

## 6.2 Mobile Grid

Use a single-column layout.

Recommended mobile values:

```css
--page-padding-x: 20px;
--page-padding-y: 24px;
--section-gap: 72px;
--item-gap: 24px;
```

Mobile must remain clean, but it should be more practical than desktop.

Booking actions must be easy to find.

---

## 6.3 Asymmetrical Composition

Use asymmetry to create a gallery/archive feeling.

Good composition patterns:

```text
[Brand]                         [Book]

        [Large headline]        [Services list]


[Archive gallery spread across width]


[Barbers]        [Location]        [About]
```

Avoid overly symmetrical section blocks such as:

```text
[Centered heading]
[Centered paragraph]
[Centered button]
[Three equal cards]
```

The website should not look like a generic landing page.

---

## 6.4 Editorial Spacing

Use large vertical gaps between major sections.

Recommended:

```css
.hero {
  min-height: 60vh;
}

.section {
  margin-top: 96px;
}

.large-section {
  margin-top: 140px;
}
```

Mobile:

```css
.section {
  margin-top: 64px;
}
```

Do not compress the layout too much.

---

## 7. Page-Level Composition Rules

### 7.1 Home Page

The home page should feel like a minimal editorial landing page.

Required composition:

```text
Header
Hero
Services preview
Cuts archive preview
Barbers preview
Location & Hours
Footer
```

The hero should be typography-led.

The services section may sit beside the hero on desktop.

The archive/gallery section should create the strongest visual resemblance to the reference direction.

---

### 7.2 Booking Page

The booking page should remain functional but visually consistent.

It should not become a colorful app dashboard.

Desktop composition:

```text
Large heading on left
Booking form in center
Booking summary on right
```

Mobile composition:

```text
Header
Heading
Step 01 / Service
Step 02 / Barber
Step 03 / Date
Step 04 / Time
Step 05 / Details
Summary
Confirm CTA
```

---

### 7.3 Archive / Cuts Page

The cuts page should feel like a visual archive.

Use sparse image placement, captions, and generous spacing.

Do not use a dense masonry grid with many images packed together.

Preferred direction:

* Small images
* Large whitespace
* Captions below images
* Occasional larger featured images
* Filters as simple text links

---

### 7.4 Barber Pages

Barber pages should use editorial list layouts, not profile cards that feel like a team template.

Use:

* Name
* Specialty
* Availability
* Selected cuts
* Book with barber CTA

Keep bios short and practical.

---

## 8. Component Style

## 8.1 Buttons

There are three button/link types only.

### Primary CTA

Used for final booking actions.

Examples:

```text
Confirm Booking
Confirm via WhatsApp
```

Style:

```css
background: #000000;
color: #FFFFFF;
height: 52px;
padding: 0 24px;
font-size: 16px;
font-weight: 600;
border: 1px solid #000000;
border-radius: 0;
```

Primary CTA should be rare and important.

Use it for:

* Confirm booking
* Confirm via WhatsApp
* Final submit action

Do not use primary CTA everywhere.

---

### Secondary CTA

Used for navigation.

Examples:

```text
Book Appointment →
View all cuts →
View on map →
Book this cut →
```

Style:

```css
background: transparent;
color: #000000;
border: none;
border-bottom: 1px solid #000000;
padding-bottom: 6px;
font-size: 16px;
font-weight: 600;
```

Hover behavior:

```css
transform arrow slightly to the right;
border-bottom remains visible;
```

This should be the main CTA style across the editorial pages.

---

### Tertiary CTA

Used for small actions.

Examples:

```text
Close
Back
Edit
Change
```

Style:

```css
font-size: 14px;
font-weight: 500;
text-decoration: none;
color: #000000;
```

Hover:

```css
text-decoration: underline;
```

---

## 8.2 Links

Links should be plain, black, and understated.

Avoid blue default browser links.

Use:

```css
a {
  color: #000000;
  text-decoration: none;
}
```

For editorial links, use underline or bottom border.

---

## 8.3 Forms

Forms should feel minimal and clean.

Input style:

```css
height: 48px;
border: 1px solid #DDDDDD;
background: #FFFFFF;
padding: 0 14px;
font-size: 15px;
border-radius: 0;
```

Focus state:

```css
border-color: #000000;
outline: none;
```

Avoid:

* Colored input borders
* Heavy rounded fields
* Floating labels
* Large icons inside inputs
* Complex validation UI

---

## 8.4 Service Rows

Service rows should be list-based, not card-based.

Example:

```text
Regular Cut             30 min       Rp75.000
Fade / Taper            40 min       Rp100.000
Haircut + Wash          45 min       Rp120.000
Beard Trim              20 min       Rp50.000
```

Style:

```css
.service-row {
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 32px;
  padding: 20px 0;
  border-bottom: 1px solid #DDDDDD;
}
```

Selected state for booking:

* Filled black radio
* Slightly darker divider
* No loud background

---

## 8.5 Barber Rows

Barber rows should follow the same visual language as service rows.

Example:

```text
+   Alex Reyes       Fades, Texture, Classic Cuts
+   Jordan Kim       Tapers, Scissor Cuts, Beards
+   Sam Patel        Short Styles, Lineups, Details
```

Style:

```css
.barber-row {
  display: grid;
  grid-template-columns: 32px 1fr 1.5fr;
  align-items: center;
  padding: 18px 0;
  border-bottom: 1px solid #DDDDDD;
}
```

Hover:

* Slight text movement
* Divider becomes darker
* No card shadow

---

## 8.6 Gallery Items

Gallery items are essential to the brand identity.

Each item should include:

* Image
* Title
* Date/meta

Example:

```text
[image]

Low Fade
APR 2026
```

Image style:

```css
object-fit: cover;
filter: grayscale(100%);
```

Optional:

```css
filter: grayscale(100%) contrast(1.05);
```

Caption spacing:

```css
margin-top: 10px;
```

Do not use:

* Rounded card containers
* Drop shadows
* Overlay text
* Colorful hover effects

---

## 8.7 Booking Summary

The booking summary should be clear, minimal, and sticky on desktop.

Example:

```text
Your Booking

Service
Fade / Taper
40 min

Barber
Jordan Kim

Date
Thu, 29 May 2026

Time
13:00

Total
Rp100.000

Confirm Booking →
```

Style:

```css
.summary {
  border-left: 1px solid #DDDDDD;
  padding-left: 32px;
}
```

Mobile:

```css
.summary {
  border: 1px solid #DDDDDD;
  padding: 16px;
}
```

The summary should prioritize clarity over decoration.

---

## 8.8 Footer

The footer should be very simple.

Desktop:

```text
Instagram     WhatsApp     Maps                         © 2026 Barber Labs
```

Style:

```css
.footer {
  border-top: 1px solid #DDDDDD;
  padding: 28px 0;
  display: flex;
  justify-content: space-between;
}
```

Mobile:

```text
Instagram
WhatsApp
Maps

© 2026 Barber Labs
```

Do not create a large multi-column footer.

---

## 9. Photography Direction

Photography should feel like an archive of the barbershop.

### 9.1 Subject Matter

Use images of:

* Low fade
* Mid taper
* Skin fade
* Textured crop
* Curly top
* Buzz cut
* Scissor cut
* Beard trim
* Barber chair
* Clippers
* Scissors
* Comb
* Mirror
* Station shelf
* Hair texture
* Neckline detail
* Hands cutting hair

---

### 9.2 Image Treatment

Images should be:

* Black-and-white
* Desaturated
* High contrast but not harsh
* Editorial
* Cropped intentionally

Recommended CSS:

```css
img {
  filter: grayscale(100%);
  object-fit: cover;
}
```

Optional hover:

```css
img:hover {
  filter: grayscale(100%) contrast(1.08);
}
```

Avoid:

* Bright colorful photos
* Overly warm salon lighting
* Stock photos with fake smiles
* Lifestyle images that feel too commercial
* Before-after promo graphics
* Text over images

---

### 9.3 Cropping

Recommended ratios:

```text
Archive thumbnail: 1:1
Portrait: 4:5
Wide detail: 3:2
Hero image: 4:5 or 3:2
```

Images should feel intentionally cropped, not randomly resized.

---

## 10. Icon Direction

Icons should be minimal and used sparingly.

Preferred style:

* Thin line icons
* Black
* 16–20 px
* No filled colorful icons

Use icons only when they improve usability, especially on booking pages.

Acceptable icons:

* Calendar
* Clock
* User
* Scissors
* WhatsApp
* Map pin

Avoid icons on purely editorial pages unless necessary.

---

## 11. Interaction Direction

Interactions should be subtle and restrained.

### 11.1 Hover

Use:

* Underline reveal
* Arrow movement
* Divider darkening
* Slight image contrast change

Avoid:

* Large scale animations
* Bouncy effects
* Colorful hover backgrounds
* Heavy transitions

Recommended:

```css
transition: all 180ms ease;
```

---

### 11.2 Page Transitions

If page transitions are implemented, keep them minimal.

Acceptable:

* Fade in
* Slight vertical movement
* Simple opacity transition

Avoid:

* Complex animation sequences
* Parallax-heavy behavior
* Scroll-jacking

---

### 11.3 Booking States

Booking UI states should be clear.

Available time:

```text
White background, gray border, black text
```

Selected time:

```text
Black background, white text
```

Unavailable time:

```text
Light gray text, disabled state
```

Focus state:

```text
Black border
```

Error state:

Use minimal red only if necessary.

```css
--color-error: #B00020;
```

Do not overuse red.

---

## 12. Color System

The website should be nearly monochrome.

Recommended tokens:

```css
:root {
  --color-black: #000000;
  --color-white: #FFFFFF;

  --color-gray-50: #FAFAFA;
  --color-gray-100: #F5F5F5;
  --color-gray-200: #EAEAEA;
  --color-gray-300: #DDDDDD;
  --color-gray-500: #777777;
  --color-gray-700: #4A4A4A;

  --color-text-primary: #000000;
  --color-text-secondary: #4A4A4A;
  --color-text-muted: #777777;

  --color-border: #DDDDDD;
  --color-border-soft: #EAEAEA;
}
```

Use color only for:

* Error state
* Success state
* System feedback

Even then, keep it minimal.

---

## 13. Spacing System

Use a consistent spacing scale.

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
--space-24: 96px;
--space-32: 128px;
--space-40: 160px;
```

Use large spacing between major editorial sections.

Do not create cramped sections.

---

## 14. Border Radius

Keep radius minimal.

Recommended:

```css
--radius-none: 0px;
--radius-sm: 2px;
--radius-md: 4px;
```

Use square or near-square geometry.

Avoid large rounded cards unless required for mobile usability.

---

## 15. Shadows

Avoid shadows.

If absolutely necessary, use very subtle shadows only for overlays or modals.

Recommended default:

```css
box-shadow: none;
```

The design should rely on spacing, typography, and lines instead of shadows.

---

## 16. Responsive Behavior

### 16.1 Desktop

Desktop should feel spacious, editorial, and asymmetrical.

Priority:

* Large headline
* Wide grid
* Sparse gallery
* Side-by-side content
* Sticky booking summary where useful

### 16.2 Tablet

Tablet should reduce complexity but preserve the editorial feeling.

Use:

* 2-column layouts
* Reduced headline size
* Slightly tighter spacing

### 16.3 Mobile

Mobile should be practical and readable.

Priority:

* Clear booking CTA
* Simple vertical sections
* Clean service list
* Compact gallery
* Easy date/time selection
* Sticky booking CTA on important pages

Do not force desktop asymmetry onto mobile.

---

## 17. Navigation Direction

Navigation should be minimal.

Desktop header options:

Preferred minimal version:

```text
Barber Labs                                      Book
```

Expanded version:

```text
Barber Labs                  Services   Cuts   Barbers   Location   Book
```

Use the minimal version if the page content already exposes sections clearly.

Mobile header:

```text
Barber Labs                         Book
```

The mobile header should be simple and stable.

Avoid large hamburger menus unless the site becomes content-heavy.

---

## 18. Tone of Voice

The copy should be short, direct, and calm.

Good copy:

```text
Haircuts / by appointment
Clean cuts, clear schedule, no waiting.
Choose your service, select a time, and confirm your chair.
All services by appointment only.
```

Avoid copy like:

```text
The best premium grooming experience in town.
Look fresh and feel confident with our professional stylists.
Book now and transform your look today!
```

The tone should be:

* Direct
* Precise
* Minimal
* Calm
* Confident

---

## 19. Do / Don’t

### Do

* Use white space generously
* Use strong black typography
* Use numbered editorial sections
* Use monochrome photography
* Use subtle dividers
* Keep forms minimal
* Keep CTAs restrained
* Make booking clear and easy
* Keep page structure consistent
* Use short, confident copy
* Let spacing and typography carry the design

### Don’t

* Do not use bright colors
* Do not use gradients
* Do not use heavy shadows
* Do not use generic salon template styling
* Do not use colorful cards
* Do not use long marketing paragraphs
* Do not use too many icons
* Do not center every section
* Do not over-design the booking interface
* Do not make the website feel like a marketplace
* Do not make the gallery feel like Instagram
* Do not use stock-photo-looking imagery

---

## 20. Consistency Checklist

Before finalizing any page, check:

* Does the page feel monochrome and minimal?
* Is the brand name placed consistently?
* Is the typography bold and editorial?
* Is there enough whitespace?
* Are section labels formatted consistently?
* Are buttons using the correct CTA hierarchy?
* Are images monochrome or desaturated?
* Are dividers subtle?
* Is the booking action easy to find?
* Does the page avoid generic salon/barbershop template styling?
* Does the page feel connected to the rest of the website?

---

## 21. Final Design Goal

The final website should feel like:

> A quiet, premium, editorial barbershop website with a clear appointment system.

It should be beautiful, but not decorative.

It should be minimal, but not empty.

It should be functional, but not app-like.

It should feel like Barber Labs:
clean, precise, calm, and appointment-first.

```
```
