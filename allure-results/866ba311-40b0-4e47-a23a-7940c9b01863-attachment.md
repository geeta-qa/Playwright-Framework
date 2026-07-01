# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> Login SauceDemo - problem_user
- Location: tests\login.spec.js:8:9

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /inventory.html/
Received string:  "https://www.saucedemo.com/"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    14 × unexpected value "https://www.saucedemo.com/"

```

```yaml
- text: Swag Labs
- textbox "Username": problem_user
- textbox "Password": error_user
- 'heading "Epic sadface: Username and password do not match any user in this service" [level=3]':
  - button
  - text: "Epic sadface: Username and password do not match any user in this service"
- button "Login"
- heading "Accepted usernames are:" [level=4]
- text: standard_user locked_out_user problem_user performance_glitch_user error_user visual_user
- heading "Password for all users:" [level=4]
- text: secret_sauce
```

# Test source

```ts
  1  | 
  2  | import { test, expect } from '../fixture/index.js';
  3  | import fs from 'fs';
  4  | const loginData = JSON.parse(
  5  |     fs.readFileSync('./TestData/logindata.json', 'utf-8')
  6  | );
  7  | for (const data of loginData) {
  8  |     test(`Login SauceDemo - ${data.username}`, async ({ LoginPage, page }) => {
  9  |         await LoginPage.login(data.username, data.password);
> 10 |         await expect(page).toHaveURL(/inventory.html/);
     |                            ^ Error: expect(page).toHaveURL(expected) failed
  11 |     });
  12 | }
  13 | 
```