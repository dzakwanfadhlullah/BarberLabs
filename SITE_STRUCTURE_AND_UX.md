# Barber Labs Site Structure & UX

## 1. Purpose of This Document

This document defines the structure, user experience, page behavior, booking flow, and product scope for the Barber Labs website.

This file should be used together with:

```text
DESIGN_DIRECTION.md
```

The design direction file defines how the website should look and feel.

This file defines how the website should work.

The main goal is to create a website that is:

- Visually minimal
- Easy to navigate
- Clear for booking
- Consistent across desktop and mobile
- Practical for real customers
- Simple enough for MVP execution
- Flexible enough for future booking system upgrades

The website should not only look good. It must help users quickly understand the service, view haircut references, choose a barber, and book an appointment.

---

## 2. Product Positioning

Barber Labs is a modern appointment-based barbershop.

The website should function as:

```text
Editorial landing page + haircut archive + appointment booking system
```

The website should serve four main user needs:

1. Understand what Barber Labs is.
2. View available services, prices, and durations.
3. Browse haircut references and barber styles.
4. Book an appointment quickly and clearly.

The experience should feel calm and premium, but the booking process must remain obvious and easy.

---

## 3. Primary User Goals

Users visiting the website may have different intentions.

### 3.1 User Goal: Book Quickly

The user already wants a haircut and needs to book a slot.

The website should help them:

- Find the booking CTA immediately
- Choose a service
- Choose a barber or select any available barber
- Pick a date and time
- Enter name and WhatsApp number
- Confirm the booking

Primary path:

```text
Home → Booking → Confirm via WhatsApp
```

---

### 3.2 User Goal: Explore Haircut References

The user wants to see examples before booking.

The website should help them:

- Browse selected cuts
- Filter by haircut category
- Open a cut detail page
- Book based on that haircut reference

Primary path:

```text
Home → Cuts Archive → Cut Detail → Book This Cut
```

---

### 3.3 User Goal: Choose a Barber

The user wants to pick a specific barber.

The website should help them:

- View barber names and specialties
- See selected cuts by each barber
- Check availability
- Book directly with that barber

Primary path:

```text
Home → Barbers → Barber Detail → Book With Barber
```

---

### 3.4 User Goal: Find Location

The user wants to know where the barbershop is.

The website should help them:

- Find the address
- Open Google Maps
- Check opening hours
- Contact via WhatsApp

Primary path:

```text
Home → Location & Hours → Maps / WhatsApp
```

---

## 4. Site Map

The recommended site structure is:

```text
/
Home

/book
Booking Appointment

/cuts
Cuts Archive

/cuts/[slug]
Cut Detail

/barbers
Barbers

/barbers/[slug]
Barber Detail

/location
Location & Hours

/booking-confirmed
Booking Confirmation

/policy
Booking Policy
```

---

## 5. Page Priority

### 5.1 MVP Pages

The MVP should include:

```text
/
Home

/book
Booking Appointment

/cuts
Cuts Archive

/barbers
Barbers

/location
Location & Hours

/policy
Booking Policy
```

The MVP can skip separate detail pages if time is limited, but the structure should be prepared for them.

---

### 5.2 Recommended Full Version Pages

The full version should include:

```text
/
Home

/book
Booking Appointment

/cuts
Cuts Archive

/cuts/[slug]
Cut Detail

/barbers
Barbers

/barbers/[slug]
Barber Detail

/location
Location & Hours

/booking-confirmed
Booking Confirmation

/policy
Booking Policy
```

---

## 6. Global UX Rules

These rules apply to all pages.

### 6.1 Booking CTA Must Always Be Available

Users should never struggle to find the booking action.

Desktop:

- Show `Book` or `Book Appointment` in the header.
- Show contextual CTAs inside sections.
- On booking-related pages, keep the confirmation CTA visible near the summary.

Mobile:

- Show `Book` in the header.
- On high-intent pages, use a sticky bottom CTA if appropriate.
- The CTA should be easy to tap.

---

### 6.2 Navigation Should Stay Minimal

Preferred desktop navigation:

```text
Barber Labs                                      Book
```

Optional expanded navigation:

```text
Barber Labs                  Services   Cuts   Barbers   Location   Book
```

Preferred mobile navigation:

```text
Barber Labs                         Book
```

Avoid large navigation menus unless the website becomes content-heavy.

---

### 6.3 Every Page Should Have a Clear Purpose

Each page must answer one main user need.

Do not overload pages with unrelated content.

Examples:

- Home introduces and directs.
- Booking handles appointment selection.
- Cuts Archive displays visual references.
- Barbers helps users choose a barber.
- Location helps users visit or contact.
- Policy explains booking rules.

---

### 6.4 Keep Copy Short

Copy should be direct and functional.

Good:

```text
Choose your service, select a time, and confirm your chair.
```

Avoid long promotional paragraphs.

---

### 6.5 Make Click Behavior Predictable

Rows, images, and CTAs should behave consistently.

Examples:

- Clicking a service on Home opens Booking with that service preselected.
- Clicking a cut opens Cut Detail.
- Clicking `Book This Cut` opens Booking with relevant service preselected.
- Clicking a barber opens Barber Detail.
- Clicking `Book With Barber` opens Booking with barber preselected.

---

## 7. Shared Content Model

The site should use structured content wherever possible.

### 7.1 Service Model

Each service should include:

```text
id
name
description
duration
price
category
isAvailable
```

Example:

```text
id: regular-cut
name: Regular Cut
description: Clean haircut with natural finish.
duration: 30 min
price: Rp75.000
category: haircut
isAvailable: true
```

Recommended services:

```text
Regular Cut
Fade / Taper
Haircut + Wash
Beard Trim
```

---

### 7.2 Barber Model

Each barber should include:

```text
id
name
specialty
shortBio
availability
portraitImage
selectedCuts
isAvailable
```

Example:

```text
id: alex-reyes
name: Alex Reyes
specialty: Fades, texture, classic cuts
availability: Tue–Sun
selectedCuts: low-fade, textured-crop, skin-fade
```

---

### 7.3 Cut Model

Each cut should include:

```text
id
title
slug
date
category
image
barber
service
shortDescription
```

Example:

```text
id: low-fade-apr-2026
title: Low Fade
slug: low-fade-apr-2026
date: APR 2026
category: Fade
barber: Alex Reyes
service: Fade / Taper
shortDescription: Clean low fade with natural texture and soft neckline.
```

---

### 7.4 Booking Model

Each booking should include:

```text
service
barber
date
time
name
whatsappNumber
notes
totalPrice
status
```

For MVP, booking status can be:

```text
request_sent
pending_confirmation
confirmed
cancelled
```

If booking is confirmed manually via WhatsApp, do not display `confirmed` automatically.

Use:

```text
Booking request sent
```

instead of:

```text
Booking confirmed
```

unless there is a real confirmation system.

---

# 8. Home Page

## 8.1 Route

```text
/
```

---

## 8.2 Purpose

The Home page introduces Barber Labs, communicates the appointment-based concept, shows core services, previews haircut references, introduces barbers, and provides location details.

The Home page should answer:

1. What is Barber Labs?
2. Can I book a haircut?
3. What services are available?
4. What does the work look like?
5. Where is the barbershop?

---

## 8.3 Required Sections

The Home page should include:

```text
Header
Hero
Services Preview
Cuts Archive Preview
Barbers Preview
Location & Hours
Short About
Footer
```

---

## 8.4 Desktop Layout

Recommended desktop composition:

```text
[Header]

        [Hero headline]              [Services preview]

[Cuts Archive Preview]

[Barbers Preview]    [Location & Hours]    [Short About]

[Footer]
```

The hero should be typography-led, with a large headline and clear CTA.

The services preview can sit on the right side of the hero area.

The cuts archive should span a wide horizontal area.

The lower section can be arranged in 2–3 columns.

---

## 8.5 Mobile Layout

Recommended mobile order:

```text
Header
Hero
CTA
Services Preview
Cuts Archive Preview
Barbers Preview
Location & Hours
Footer
```

Mobile should be more direct and practical.

The `Book` CTA should be visible near the top.

---

## 8.6 Hero Content

Recommended headline:

```text
Haircuts /
by appointment
```

Recommended subline:

```text
Clean cuts, clear schedule, no waiting.
```

Primary CTA:

```text
Book Appointment →
```

CTA behavior:

```text
Click → /book
```

---

## 8.7 Services Preview

Display services as a minimal list.

Recommended content:

```text
01 / Services

Regular Cut             30 min       Rp75.000
Fade / Taper            40 min       Rp100.000
Haircut + Wash          45 min       Rp120.000
Beard Trim              20 min       Rp50.000

All services by appointment only.
```

Interaction:

```text
Click service row → /book?service=[service-id]
```

The selected service should be prefilled on the booking page.

---

## 8.8 Cuts Archive Preview

Display a curated preview of 4–8 cuts.

Section label:

```text
02 / Cuts 2025–2026
```

Each item should include:

```text
Image
Title
Date
```

Example:

```text
Low Fade
APR 2026
```

Interaction:

```text
Click image or caption → /cuts/[slug]
```

CTA:

```text
View all cuts →
```

CTA behavior:

```text
Click → /cuts
```

---

## 8.9 Barbers Preview

Section label:

```text
03 / Barbers
```

Recommended layout:

```text
+   Alex Reyes       Fades, Texture, Classic Cuts
+   Jordan Kim       Tapers, Scissor Cuts, Beards
+   Sam Patel        Short Styles, Lineups, Details
```

Interaction:

```text
Click barber row → /barbers/[slug]
```

CTA:

```text
View all barbers →
```

CTA behavior:

```text
Click → /barbers
```

---

## 8.10 Location & Hours Preview

Section label:

```text
04 / Location & Hours
```

Content:

```text
Barber Labs
[Street Address]
[City]

View on map →
```

Hours:

```text
Mon     Closed
Tue     10:00–19:00
Wed     10:00–19:00
Thu     10:00–20:00
Fri     10:00–20:00
Sat     09:00–18:00
Sun     Closed
```

CTA behavior:

```text
View on map → external maps link
```

---

## 8.11 Footer

Footer content:

```text
Instagram     WhatsApp     Maps                         © 2026 Barber Labs
```

Mobile footer can stack links vertically or use a simple row.

---

# 9. Booking Page

## 9.1 Route

```text
/book
```

Optional query parameters:

```text
/book?service=fade-taper
/book?barber=alex-reyes
/book?cut=low-fade-apr-2026
```

---

## 9.2 Purpose

The Booking page allows users to create a booking request.

The booking page should be the most functional page, but it must still follow the minimal editorial direction.

The page should help users complete these steps:

1. Choose service
2. Choose barber
3. Choose date
4. Choose time
5. Enter contact details
6. Review summary
7. Confirm via WhatsApp

---

## 9.3 Desktop Layout

Recommended desktop composition:

```text
[Header]

[Large heading]        [Service]        [Date]        [Booking Summary]
                       [Barber]         [Time]        [Booking Notes]
                       [Contact]
```

Left side:

```text
Book /
your cut

Choose your service, select a time, and confirm your chair.
```

Center:

- Service selector
- Barber selector
- Date picker
- Time picker
- Contact fields

Right:

- Booking summary
- Confirm button
- Booking notes

---

## 9.4 Mobile Layout

Recommended mobile order:

```text
Header
Book Appointment
01 / Choose service
02 / Choose barber
03 / Choose date
04 / Choose time
05 / Your details
Booking summary
Confirm via WhatsApp
Booking notes
```

Mobile should use a vertical step-by-step structure.

Avoid monthly calendar on mobile if it becomes too cramped. Use a weekly date picker instead.

---

## 9.5 Service Selection

Service options:

```text
Regular Cut
Fade / Taper
Haircut + Wash
Beard Trim
```

Each service should show:

```text
Name
Duration
Price
Selection state
```

Example:

```text
Fade / Taper
40 min
Rp100.000
```

UX behavior:

- Default selection can be `Regular Cut`.
- If a service query parameter exists, preselect that service.
- Entire service row should be clickable.
- Selected service updates booking summary.
- Selected service updates available time slots if needed.

---

## 9.6 Barber Selection

Options:

```text
Any Barber
Alex Reyes
Jordan Kim
Sam Patel
```

Default:

```text
Any Barber
```

This reduces friction for users who only care about the earliest available slot.

Each barber should show:

```text
Name
Specialty
Availability status
Optional small portrait
```

UX behavior:

- If a barber query parameter exists, preselect that barber.
- If `Any Barber` is selected, show all available time slots.
- If a specific barber is selected, show that barber’s availability only.
- Selected barber updates booking summary.

---

## 9.7 Date Picker

Desktop:

- Use a minimal monthly calendar.
- Selected date should be clearly visible.
- Disabled dates should appear muted.
- Available dates should be clickable.

Mobile:

- Prefer a weekly date picker.
- Allow users to move between weeks.
- Selected date should be black with white text.

UX behavior:

- Date selection updates available time slots.
- If no time slots are available, show a clear empty state.

Empty state example:

```text
No available slots on this date.
Choose another date.
```

---

## 9.8 Time Slot Picker

Display time slots as minimal outlined buttons.

Example:

```text
10:00   10:30   11:00   11:30
12:00   12:30   13:00   13:30
14:00   14:30   15:00   15:30
```

States:

```text
Available
Selected
Unavailable
```

Behavior:

- Available slots are clickable.
- Selected slot updates summary.
- Unavailable slots are disabled.
- User must select a time before confirmation.

---

## 9.9 Contact Fields

Required fields:

```text
Name
WhatsApp Number
```

Optional field:

```text
Notes
```

Validation:

- Name is required.
- WhatsApp number is required.
- WhatsApp number should accept local or international format.
- If invalid, show a minimal inline error.

Example error:

```text
Enter a valid WhatsApp number.
```

Avoid aggressive validation while typing.

---

## 9.10 Booking Summary

The booking summary should update live.

It should include:

```text
Service
Barber
Date
Time
Total
```

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
```

Desktop behavior:

- Summary can be sticky on the right side.
- Confirm button should be inside or below summary.

Mobile behavior:

- Summary appears before final CTA.
- Confirm button should be full width.

---

## 9.11 Confirmation CTA

Primary CTA:

```text
Confirm via WhatsApp
```

Alternative if backend is implemented:

```text
Confirm Booking
```

For MVP, use WhatsApp confirmation.

Behavior:

- Validate required fields.
- Generate a prefilled WhatsApp message.
- Open WhatsApp link.
- Optionally redirect to `/booking-confirmed`.

---

## 9.12 WhatsApp Confirmation Flow

For MVP, booking is sent to Barber Labs via WhatsApp.

The generated WhatsApp message should include:

```text
Hello Barber Labs, I want to book an appointment.

Service: Fade / Taper
Barber: Jordan Kim
Date: Thu, 29 May 2026
Time: 13:00
Name: [Customer Name]
WhatsApp: [Customer Number]
Notes: [Optional Notes]
```

If the booking is not automatically confirmed, use this language:

```text
Booking request sent.
We will confirm your appointment via WhatsApp.
```

Do not show:

```text
Booking confirmed.
```

unless there is real confirmation logic.

---

## 9.13 Booking Notes

Booking notes should be displayed near the summary.

Recommended notes:

```text
Reschedule
You can reschedule up to 2 hours before your appointment.

Please arrive on time
A 10-minute grace period is allowed.

No-show policy
No-shows may be subject to cancellation or fee.
```

Link to full policy:

```text
Read booking policy →
```

---

# 10. Cuts Archive Page

## 10.1 Route

```text
/cuts
```

---

## 10.2 Purpose

The Cuts Archive page showcases selected haircut results and visual references.

It should feel like a curated archive, not an Instagram grid.

Users should be able to:

- Browse haircut examples
- Filter by category
- Open a cut detail page
- Book based on a specific cut

---

## 10.3 Required Content

Page title:

```text
Cuts
2025–2026
```

Optional subline:

```text
Selected cuts, details, tools, and station archive.
```

Filters:

```text
All
Fade
Taper
Scissor
Beard
Details
```

Gallery items:

```text
Image
Title
Date
Category
Optional barber
```

---

## 10.4 Desktop Layout

Use a sparse asymmetrical grid.

Example:

```text
[small image]         [small image]             [medium image]

Low Fade              Chair Detail              Mid Taper
APR 2026              MAR 2026                  MAR 2026


             [large image]          [small image]

             Textured Crop          Tools
             FEB 2026               JAN 2026
```

Do not pack images too tightly.

The archive should use whitespace intentionally.

---

## 10.5 Mobile Layout

Use a simple 2-column grid with occasional full-width featured images.

Recommended mobile structure:

```text
Cuts
2025–2026

All  Fade  Taper  Scissor  Beard  Details

[image] [image]
[caption] [caption]

[featured image]
[caption]
```

Filters can be horizontally scrollable.

---

## 10.6 Filter Behavior

Filter behavior:

- `All` shows all items.
- Other filters show matching categories.
- Active filter should be visually clear but minimal.
- Avoid colorful pills.
- Use underline or bold text for active state.

---

## 10.7 Click Behavior

Clicking a gallery item should open:

```text
/cuts/[slug]
```

If Cut Detail is not implemented in MVP, clicking can open a modal or directly route to Booking with selected cut context.

Preferred full behavior:

```text
Click cut → Cut Detail → Book This Cut
```

---

# 11. Cut Detail Page

## 11.1 Route

```text
/cuts/[slug]
```

---

## 11.2 Purpose

The Cut Detail page gives more context for a specific haircut reference.

It should help users decide:

- Is this the haircut I want?
- Which service should I book?
- Which barber did this cut?
- Can I book this cut?

---

## 11.3 Required Content

Each cut detail page should include:

```text
Title
Date
Large image
Category
Related service
Barber
Short notes
Book This Cut CTA
Related cuts
```

Example:

```text
Low Fade
APR 2026

Service
Fade / Taper

Barber
Alex Reyes

Notes
Clean low fade with natural texture and soft neckline.

Book this cut →
```

---

## 11.4 Desktop Layout

Recommended composition:

```text
[Title + metadata]        [Large image]

[Details]                 [Book this cut CTA]

[Related cuts]
```

---

## 11.5 Mobile Layout

Recommended order:

```text
Title
Image
Details
Book this cut CTA
Related cuts
```

Use sticky bottom CTA if useful:

```text
Book this cut
```

---

## 11.6 CTA Behavior

`Book This Cut` should route to:

```text
/book?cut=[cut-id]&service=[service-id]&barber=[barber-id]
```

The booking page should preselect:

- Related service
- Related barber, if available
- Optional note referencing the selected cut

---

# 12. Barbers Page

## 12.1 Route

```text
/barbers
```

---

## 12.2 Purpose

The Barbers page helps users choose a barber based on specialty, style, and availability.

It should not feel like a corporate team page.

It should feel like a minimal editorial list.

---

## 12.3 Required Content

Page title:

```text
Barbers
```

Optional subline:

```text
Choose by style, availability, or first available.
```

Barber list:

```text
Name
Specialty
Availability
Optional portrait
CTA
```

---

## 12.4 Desktop Layout

Preferred list format:

```text
+   Alex Reyes       Fades, Texture, Classic Cuts       Available Tue–Sun
+   Jordan Kim       Tapers, Scissor Cuts, Beards       Available Mon–Sat
+   Sam Patel        Short Styles, Lineups, Details     Available Wed–Sun
```

Click behavior:

```text
Click barber row → /barbers/[slug]
```

Secondary CTA:

```text
Book first available →
```

Behavior:

```text
Click → /book?barber=any
```

---

## 12.5 Mobile Layout

Mobile should use stacked rows.

Example:

```text
Alex Reyes
Fades, Texture, Classic Cuts
Available Tue–Sun
Book with Alex →

Jordan Kim
Tapers, Scissor Cuts, Beards
Available Mon–Sat
Book with Jordan →
```

---

# 13. Barber Detail Page

## 13.1 Route

```text
/barbers/[slug]
```

---

## 13.2 Purpose

The Barber Detail page builds trust and helps users book with a specific barber.

It should show:

- Barber specialty
- Short bio
- Availability
- Selected cuts
- Booking CTA

---

## 13.3 Required Content

```text
Name
Specialty
Portrait or working photo
Short bio
Availability
Selected cuts
Book with barber CTA
```

Example:

```text
Alex Reyes

Fades, Texture,
Classic Cuts

Focused on clean fades, natural texture, and consistent short styles.

Available
Tue–Sun

Book with Alex →
```

---

## 13.4 Desktop Layout

Recommended composition:

```text
[Name + specialty]        [Portrait / working photo]

[Short bio]               [Availability]

[Selected cuts gallery]

[Book with barber CTA]
```

---

## 13.5 Mobile Layout

Recommended order:

```text
Name
Specialty
Photo
Short bio
Availability
Selected cuts
Book with barber
```

CTA behavior:

```text
Book with barber → /book?barber=[barber-id]
```

The booking page should preselect the selected barber.

---

# 14. Location & Hours Page

## 14.1 Route

```text
/location
```

---

## 14.2 Purpose

The Location page helps users find Barber Labs and understand operating hours.

It should be practical and clear.

---

## 14.3 Required Content

```text
Address
Opening hours
Google Maps link
WhatsApp link
Payment methods
Parking or landmark notes
```

---

## 14.4 Desktop Layout

Recommended composition:

```text
Location

[Address]                [Hours]

[Open in Maps]           [Payment / Notes]

[Optional map]
```

Address:

```text
Barber Labs
[Street Address]
[City]
```

Hours:

```text
Mon     Closed
Tue     10:00–19:00
Wed     10:00–19:00
Thu     10:00–20:00
Fri     10:00–20:00
Sat     09:00–18:00
Sun     Closed
```

CTAs:

```text
Open in Maps →
WhatsApp →
Book Appointment →
```

---

## 14.5 Mobile Layout

Mobile should prioritize action.

Recommended order:

```text
Location
Address
Open in Maps
WhatsApp
Book Appointment
Hours
Payment methods
Notes
```

---

# 15. Booking Confirmation Page

## 15.1 Route

```text
/booking-confirmed
```

---

## 15.2 Purpose

The Booking Confirmation page gives users a clear next step after submitting a booking request.

For MVP, if booking is sent via WhatsApp and still needs manual confirmation, the page should say:

```text
Booking request sent
```

Do not say:

```text
Booking confirmed
```

unless the system actually confirms availability automatically.

---

## 15.3 Recommended Content

```text
Booking request sent

We will confirm your appointment via WhatsApp.

Service
Fade / Taper

Barber
Jordan Kim

Date
Thu, 29 May 2026

Time
13:00

Barber Labs
[Address]

Open Maps →
Back to Home →
```

---

## 15.4 Optional Actions

```text
Add to Calendar
Open Maps
Contact via WhatsApp
Reschedule
```

For MVP, `Contact via WhatsApp` is the most important.

---

# 16. Booking Policy Page

## 16.1 Route

```text
/policy
```

---

## 16.2 Purpose

The Booking Policy page explains appointment rules.

It should be clear, short, and easy to understand.

---

## 16.3 Content Structure

Recommended sections:

```text
Booking Policy

01 / Appointment
All services are by appointment.

02 / Reschedule
Please reschedule at least 2 hours before your appointment.

03 / Late Arrival
A 10-minute grace period is allowed.

04 / No Show
No-shows may be subject to cancellation or fee.

05 / Payment
Cash, QRIS, and bank transfer are accepted.

06 / Contact
For changes, contact us via WhatsApp.
```

---

# 17. Main User Flows

## 17.1 Home to Booking

```text
Home
→ Click Book Appointment
→ Booking Page
→ Select service
→ Select barber
→ Select date
→ Select time
→ Enter details
→ Confirm via WhatsApp
```

Success message:

```text
Booking request sent.
We will confirm your appointment via WhatsApp.
```

---

## 17.2 Service to Booking

```text
Home
→ Click service row
→ Booking Page with selected service
→ Continue booking
```

Example route:

```text
/book?service=fade-taper
```

---

## 17.3 Cuts to Booking

```text
Home
→ Cuts Archive
→ Cut Detail
→ Book This Cut
→ Booking Page with selected service and barber
```

Example route:

```text
/book?cut=low-fade-apr-2026&service=fade-taper&barber=alex-reyes
```

---

## 17.4 Barber to Booking

```text
Home
→ Barbers
→ Barber Detail
→ Book with Barber
→ Booking Page with selected barber
```

Example route:

```text
/book?barber=alex-reyes
```

---

## 17.5 Location to Maps / WhatsApp

```text
Home
→ Location
→ Open Maps
```

or:

```text
Home
→ Location
→ WhatsApp
```

---

# 18. Booking Validation Rules

Before confirming booking, validate:

```text
Service is selected
Barber is selected
Date is selected
Time is selected
Name is filled
WhatsApp number is filled
Booking policy is accepted
```

Optional validation:

```text
WhatsApp number format is valid
Selected slot is still available
Selected barber is available
```

---

## 18.1 Error States

Errors should be minimal and clear.

Examples:

```text
Choose a service.
Choose a time.
Enter your name.
Enter a valid WhatsApp number.
Please accept the booking policy.
```

Avoid long error messages.

---

## 18.2 Empty States

If no time slots are available:

```text
No available slots for this date.
Choose another date or barber.
```

If no cuts match a filter:

```text
No cuts found for this category.
```

If barber has no available schedule:

```text
No available slots with this barber.
Try another date or choose Any Barber.
```

---

# 19. Mobile UX Requirements

Mobile is critical because many users will book from their phone.

Mobile requirements:

- Booking CTA must be visible early.
- Form fields must be easy to tap.
- Time slots must have comfortable tap size.
- Date selection must not feel cramped.
- Summary must appear before final CTA.
- WhatsApp confirmation must be obvious.
- Avoid large desktop-style calendars if they hurt usability.

Minimum tap target:

```text
44px height
```

Recommended CTA height:

```text
52px
```

---

# 20. Desktop UX Requirements

Desktop should feel more editorial and spacious.

Desktop requirements:

- Large typography-led hero
- Side-by-side layout where appropriate
- Booking summary can be sticky
- Archive grid can be asymmetrical
- Footer remains minimal
- CTA visible in header or hero

---

# 21. MVP Scope

The MVP should focus on a polished, functional first version.

## 21.1 MVP Pages

Required:

```text
Home
Booking
Cuts Archive
Barbers
Location & Hours
Booking Policy
```

Optional but recommended:

```text
Booking Confirmation
```

---

## 21.2 MVP Features

Required:

```text
Service list
Service prices and durations
Booking form
Barber selection
Date selection
Time slot selection
Name field
WhatsApp number field
Booking summary
WhatsApp confirmation link
Cuts archive preview
Barbers list
Location and hours
Booking policy
Responsive desktop and mobile layout
```

---

## 21.3 MVP Booking Logic

For MVP, booking can be handled through WhatsApp.

Flow:

```text
User selects booking details
User clicks Confirm via WhatsApp
Website generates prefilled WhatsApp message
WhatsApp opens
Admin manually confirms booking
```

The website does not need real-time slot management for MVP.

However, the UI should be structured so real availability can be added later.

---

## 21.4 MVP Content

Use placeholder content if real content is unavailable.

Placeholder services:

```text
Regular Cut             30 min       Rp75.000
Fade / Taper            40 min       Rp100.000
Haircut + Wash          45 min       Rp120.000
Beard Trim              20 min       Rp50.000
```

Placeholder barbers:

```text
Alex Reyes
Fades, Texture, Classic Cuts

Jordan Kim
Tapers, Scissor Cuts, Beards

Sam Patel
Short Styles, Lineups, Details
```

Placeholder hours:

```text
Mon     Closed
Tue     10:00–19:00
Wed     10:00–19:00
Thu     10:00–20:00
Fri     10:00–20:00
Sat     09:00–18:00
Sun     Closed
```

---

# 22. Future Scope

These features should not block the MVP but can be added later.

## 22.1 Real Availability

Future booking system can include:

```text
Real-time barber availability
Blocked dates
Booked slots
Service-specific duration logic
Automatic slot generation
Admin schedule management
```

---

## 22.2 Admin Dashboard

Admin dashboard can include:

```text
View bookings
Confirm bookings
Cancel bookings
Reschedule bookings
Manage services
Manage barbers
Manage availability
Manage cuts archive
```

---

## 22.3 Customer Notifications

Future notifications:

```text
WhatsApp confirmation
WhatsApp reminder
Email confirmation
Calendar invite
Reschedule link
Cancellation notice
```

---

## 22.4 Payment

Future payment options:

```text
Deposit payment
QRIS payment
Full online payment
Cancellation fee
No-show fee
```

---

## 22.5 Customer Accounts

Customer accounts are not needed for MVP.

Possible future features:

```text
Booking history
Favorite barber
Saved contact details
Loyalty system
```

Only add accounts if they provide clear value.

---

# 23. Execution Checklist

Before considering the website complete, verify:

```text
Home page clearly explains Barber Labs.
Booking CTA is visible.
Services show price and duration.
Booking page works on desktop and mobile.
Users can choose service, barber, date, and time.
Users can enter name and WhatsApp.
Booking summary updates correctly.
Confirm via WhatsApp generates correct message.
Cuts Archive is visually consistent.
Barbers page is clear.
Location page includes address, hours, maps, and WhatsApp.
Policy page is accessible from booking.
All pages are responsive.
All pages follow the design direction.
No page feels like a generic salon template.
```

---

# 24. Final UX Goal

The final user experience should feel like:

```text
Open the site.
Understand the brand.
See the work.
Choose a cut or barber.
Book without confusion.
Arrive without waiting.
```

The website should be visually quiet but functionally clear.

It should feel editorial, but never difficult to use.

It should make booking a haircut feel simple, calm, and intentional.