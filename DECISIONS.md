# Frontend decisions — Beyond Pakistan

## 1. Keep discovery controls together and preserve useful context
- **Problem:** Travel listings can make it difficult to narrow a large set of tours and compare options without losing the current context.
- **Decision:** The home page keeps keyword search, category filter and sort controls in one compact toolbar above the same results grid. Empty results include a clear recovery action.
- **Alternative:** Separate category pages or a multi-step search form.
- **Reason:** Visitors can refine the ten-route catalogue without leaving the page; the controls work together.
- **Tradeoff:** The toolbar is denser on narrow screens, so it wraps and keeps search full-width on mobile.
- **Code location:** Home in `src/App.jsx`; `.filters`, `.trip-grid`, and mobile media query in `src/styles.css`.
- **Evidence:** On `/`, search for “Hunza”, select “Valley”, then sort by price. Clear the search with a no-match phrase to see the empty state.

## 2. Keep selections in shared state and local storage
- **Problem:** When visitors move between listing, details and plan pages, losing a chosen trip makes the booking journey frustrating.
- **Decision:** A single cart state in App is passed to the pages; changes use immutable array updates and are persisted to local storage.
- **Alternative:** Keep selected trips only inside each page or pass them through URL query parameters.
- **Reason:** The plan remains consistent across routes and after a refresh without introducing a backend.
- **Tradeoff:** Browser storage is device-specific and can contain stale demo data; the user can remove selections or clear the plan.
- **Code location:** App, add, updateQty, and Plan in `src/App.jsx`.
- **Evidence:** Add a trip, open Your plan, navigate back to Explore and refresh; the plan count and selection remain.

## 3. Put trip constraints beside the decision and use a responsive detail layout
- **Problem:** If difficulty, group limits and booking conditions appear only during checkout, visitors may invest time in an unsuitable trip.
- **Decision:** Detail pages show duration, difficulty, altitude, capacity and a short rule callout beside the traveller selector. The detail content and booking summary stack on mobile.
- **Alternative:** Put all conditions in a separate FAQ or display them only in the final form.
- **Reason:** The information is available at the point where the traveller chooses a route; the same constraints are checked again during submission.
- **Tradeoff:** Detail pages are longer and repeat some information from the plan summary.
- **Code location:** Detail in `src/App.jsx`; `.detail-layout`, `.booking-box`, and responsive rules in `src/styles.css`.
- **Evidence:** Open `/experiences/fairy-meadows` and inspect the challenging-route notice, then open `/plan` and test the fitness acknowledgement.
