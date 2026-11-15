# Master checklist (select and tailor; don't copy everything)

Priority: **B** = Blocker, **S** = Should, **N** = Nice. Each item needs a short reason when shown to the user.

## 1. Product readiness (all)
- B: Core flow works end to end on a clean account/device (the thing users came for)
- B: Tested on mobile and desktop and at least two browsers
- B: Error states and empty states are handled (no blank screens)
- S: Broken links and placeholder text removed (lorem ipsum, "USERNAME", test data)
- S: Contact information is correct and tested
- N: A friendly 404 page

## 2. Domain, DNS, HTTPS (website/app/product page)
- B: Domain points to the right place; both with and without `www` behave as intended
- B: HTTPS works with no browser warnings
- S: Redirects set (old URLs, www/non-www)
- S: Email on the domain works if you will send/receive from it

## 3. Payments (only if taking money)
- B: A **real test purchase** completed end to end
- B: The buyer receives the product/access (delivery confirmed)
- B: Receipts/confirmation messages are correct
- B: Refund/cancellation process is defined and works
- S: Failed-payment and edge cases tried (cancelled, declined)
- S: You know how and when you get paid out
- Note: tax and business registration requirements are for the user to check with a professional or official sources.

## 4. Legal and policy pages (if collecting data or selling)
- B (if selling): Terms of sale and refund policy are published and match what the product page says
- B (if collecting personal data): Privacy policy describes what is collected, why, and who processes it
- S: License terms for digital products are stated clearly
- S: Cookie/consent approach decided if analytics or ads are used
- Note: don't claim compliance; have wording reviewed by a professional.

## 5. SEO basics (public websites)
- S: Unique title and description per page
- S: One H1 per page, sensible headings
- S: Social share image and preview checked
- S: Sitemap and robots settings decided; search engine indexing intended (not blocked by a staging setting)
- N: Structured data for key pages
- N: Search console/webmaster tools set up

## 6. Analytics and privacy
- S: Know what you measure and why (visits, key clicks)
- S: Analytics disclosed in the privacy policy if used
- N: Goal/conversion tracking configured

## 7. Performance and accessibility (websites/apps)
- S: Pages load acceptably on a mid-range phone and slow connection (measure, don't assume)
- S: Images sized and compressed; heavy effects have fallbacks
- S: Keyboard navigation works; contrast and alt text checked
- N: Respect reduced-motion preferences

## 8. Security and operations
- B: No secrets (keys, passwords) in the code or public repo
- B: Admin accounts use strong, unique passwords and two-step login where available
- S: Backups exist and a restore has been tried at least once
- S: Rollback plan (how to undo a bad release)
- S: Dependencies/plugins updated
- N: Uptime/error monitoring

## 9. Support and communication
- B: Visitors can reach you (email/chat/form) and you will see messages
- S: Response-time expectation stated (only one you can keep)
- S: FAQ for the top questions
- N: Feedback channel (form, issue tracker)

## 10. Announcement and first week
- S: Launch message prepared (where, when, what to say) with honest claims only
- S: Monitoring plan for launch day (who watches errors, messages, payments)
- S: Plan to collect early feedback and fix issues fast
- N: Follow-up post/update after one week

## By launch type (starting selection)
- **Landing page:** 1, 2, 5, 6, 7, 8 (security basics), 9, 10
- **Digital product/store:** 1, 2, 3, 4, 7, 8, 9, 10
- **App/SaaS:** 1, 2, 3 (if paid), 4, 6, 7, 8, 9, 10
- **Service offering (website + inquiry):** 1, 2, 4 (privacy if form), 5, 9, 10
