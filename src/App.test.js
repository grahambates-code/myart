const puppeteer = require('puppeteer');
const URL = 'http://localhost:3000/';
const LOGIN_USER    = 'mogmog+test@gmail.com';
const PASSWORD_USER = 'Password123';

jest.setTimeout(6000);

describe('User Tests', () => {

 let browser = null;
 let page = null;

    async function login(page) {
        await page.focus('#username');
        await page.keyboard.type(LOGIN_USER);

        await page.focus('#password');
        await page.keyboard.type(PASSWORD_USER);

        return page.click('button[type="submit"]');
    }

    test('login works', async () => {

         browser = await puppeteer.launch({
          headless: false,
          width : 1024,
          height : 800
         });

         page = await browser.newPage();

         await page.goto(URL);
         await login(page);
         await page.waitForSelector('div[data-test-id=Homepage]');

    })

    test('forms show for a new user ', async () => {
        await page.waitForSelector('div[data-test-id=formHolder]');

       await page.waitForSelector('div[data-test-id=TAndCForm]');

    })

  afterAll(() => {
    browser.close()
  })

});

