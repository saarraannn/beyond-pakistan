# Beyond Pakistan

**CS4032 · Web Programming · Assignment 02 · Fall 2026**  
**Student:** Saraan Sikandar · **Roll:** i242080 · **Section:** B

Beyond Pakistan is a fictional small-group adventure travel brand for nature-focused journeys in Pakistan. This React frontend lets visitors browse ten routes, search and filter trips, inspect route details, create a multi-trip plan, complete a validated booking form and review a simulated confirmation.

- **GitHub:** https://github.com/saarraannn/beyond-pakistan
- **Vercel project:** https://vercel.com/someteam4/beyond-pakistan
- **Public site:** use the production URL shown in the Vercel project dashboard after the final deployment is Ready.

## Run locally

```bash
npm install
npm run dev
npm test
npm run build
npm run preview
```

## Main routes

| Route | Purpose |
| --- | --- |
| `/` | Browse, search, filter and sort all journeys |
| `/experiences/:id` | Read trip details and choose traveller count |
| `/plan` | Edit selections, enter booking details and review totals |
| `/confirmation` | Review the local simulated booking result |
| `/about` | Business approach and demo scope |

## Business rules

1. **Capacity:** a reservation has 1–6 travellers and cannot exceed the selected route's remaining capacity.
2. **Eligibility:** the challenging Fairy Meadows trek requires a fitness/preparation acknowledgement.
3. **Pricing:** the summary calculates a 30% illustrative deposit and the remaining balance. No payment is collected.

The shared rule functions live in `src/rules.js`; the Node test suite is `tests/rules.test.js`.

## Edge-case demonstrations

- **Invalid route:** open `/experiences/not-a-trip` to see the invalid-ID state.
- **Empty search:** enter a phrase that does not match a trip; use Clear filters to recover.
- **Loading failure:** on the home page, use “Simulate a loading issue”, then “Try loading again”.
- **Capacity boundary:** on a trip detail page, choose 7 travellers; the add action is disabled and a specific limit message is shown.
- **Eligibility:** add Fairy Meadows and continue to the plan without checking the fitness acknowledgement; submission is blocked.
- **Form validation:** submit with an invalid email or missing date; errors are shown while other entered values remain.
- **Persistence:** add a trip, refresh, and confirm the plan remains in local storage.

## Concept map

| Concept | Location |
| --- | --- |
| Function components, JSX, props and callback props | `src/App.jsx` |
| Routes and URL parameters | `src/App.jsx` |
| Shared state, functional updates and effects | `src/App.jsx` |
| Controlled form and validation feedback | `Plan` component in `src/App.jsx` |
| Derived totals and deposit | `calculatePayment` in `src/rules.js` |
| Local data and stable IDs | `src/data/trips.js` |
| Business rules | `src/rules.js` |
| Automated tests | `tests/rules.test.js` |
| Responsive layout and focus styles | `src/styles.css` |
| Async mock loading and retry | `App` and `Home` in `src/App.jsx` |

## Simulated operations and limitations

This is a frontend academic prototype. It uses local trip data, browser local storage and a simulated async loader. Booking confirmation is local to the browser; there is no booking backend, operator notification, live inventory, authentication or payment gateway. Prices, seat counts and departure dates are illustrative. Images are loaded from Unsplash URLs and require an internet connection. Do not enter sensitive or real payment information.

## Development milestones

The repository history records the initial setup followed by the React application implementation. Further changes should be committed as separate working increments; do not fabricate or backdate commits.
