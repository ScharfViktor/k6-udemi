import http from "k6/http"
import {sleep} from 'k6'

export const options = {
  vus: 10,
  duration: '10s'
}

export default function () {
  http.get('https://test.k6.io')
  sleep(1)
}

// import { check } from 'k6';
// import { browser } from 'k6/experimental/browser';

// export const options = {
//   scenarios: {
//     ui: {
//       executor: 'shared-iterations',
//       options: {
//         browser: {
//           type: 'chromium',
//         },
//       },
//     },
//   },
//   thresholds: {
//     checks: ["rate==1.0"]
//   }
// }

// export default async function () {
//   const page = browser.newPage();

//   try {
//     await page.goto('https://test.k6.io/my_messages.php');

//     page.locator('input[name="login"]').type('admin');
//     page.locator('input[name="password"]').type('123');

//     const submitButton = page.locator('input[type="submit"]');

//     await Promise.all([page.waitForNavigation(), submitButton.click()]);

//     check(page, {
//       'header': p => p.locator('h2').textContent() == 'Welcome, admin!',
//     });
//   } finally {
//     page.close();
//   }
// }