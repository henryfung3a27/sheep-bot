var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var puppeteer = require('puppeteer');
var app = express();

async function buyTShirt(JSONFile) {
  const USERS_FIRSTNAME = 'Mr';
  const USERS_SECONDNAME = 'Sheep';
  const USERS_EMAIL = 'mrsheep@gmail.com';
  const USERS_PHONE_NUMBER = '07865666666';
  const USERS_COUNTRY = 'GB';
  const USERS_ADDRESS_LINE_ONE = '1';
  const USERS_ADDRESS_LINE_TWO = 'weeb street';
  const USERS_ZIP_CODE = 'CF64 1JS';
  const USERS_CITY = 'cardiff';

  const ADDRESS_LINE_ONE = '1';
  const ADDRESS_LINE_TWO = 'sheep street';
  const CITY = 'cardiff';
  const ZIP_CODE = 'CF64 3NJ';

  const BUTTON_SELECTOR = '#product-addtocart-button';
  const SIZE_SELECTOR = '#attribute180';
  const CART_SELECTOR =
    '#header > div:nth-child(1) > div.grid_12 > div > div.top-cart';
  const CHECKOUT_SELECTOR = '#topCartContent > div > div > button';
  ('#header > div:nth-child(1) > div.grid_12 > div > div.top-cart');

  const FIRST_NAME_SELECTOR = '#billing\\:firstname';
  const SECOND_NAME_SELECTOR = '#billing\\:lastname';
  const EMAIL_SELECTOR = '#billing\\:email';
  const PHONE_NUMBER_SELECTOR = '#billing\\:telephone';
  const COUNTRY_SELECTOR = '#billing\\:country_id';
  const ADDRESS_LINE_ONE_SELECTOR = '#billing\\:street1';
  const ADDRESS_LINE_TWO_SELECTOR = '#billing\\:street2';
  const CITY_SELECTOR = '#billing\\:city';
  const ZIP_CODE_SELECTOR = '#billing\\:postcode';
  const VISA_SELECTOR = '#p_method_msp_visa';
  const PLACE_ORDER_SELECTOR = '#onestepcheckout-place-order';

  //PRODUCT PAGE
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.patta.nl/patta-pferd-t-shirt-white', {
    waitUntil: 'networkidle0'
  });

  await page.select(SIZE_SELECTOR, '229');

  await page.click(BUTTON_SELECTOR);

  //CHECKOUT
  await page.goto('https://www.patta.nl/onestepcheckout/', {
    waitUntil: 'networkidle0'
  });
  await page.addScriptTag({
    content:
      "setTimeout(function(){ document.getElementById('onestepcheckout-place-order').click(); }, 3000);"
  });

  await page.click(VISA_SELECTOR);

  await page.type(FIRST_NAME_SELECTOR, USERS_FIRSTNAME);

  await page.type(SECOND_NAME_SELECTOR, USERS_SECONDNAME);

  await page.type(EMAIL_SELECTOR, USERS_EMAIL);

  await page.type(PHONE_NUMBER_SELECTOR, USERS_PHONE_NUMBER);

  await page.select(COUNTRY_SELECTOR, USERS_COUNTRY);

  await page.type(ADDRESS_LINE_ONE_SELECTOR, USERS_ADDRESS_LINE_ONE);

  await page.type(CITY_SELECTOR, USERS_CITY);

  await page.type(ZIP_CODE_SELECTOR, USERS_ZIP_CODE);

  //PAYMENT

  const CARD_NUMBER_SELECTOR = '#credit-card';
  const CARD_HOLDER_SELECTOR = '#field-extvar2';
  const EXPIRY_MONTH_SELECTOR = 'select[name=expiry-month]';
  const EXPIRY_YEAR_SELECTOR = 'select[name=expiry-year]';
  const CVC_SELECTOR = 'field-extvar4 cvc';
  const SUBMIT_SELECTOR = 'input[type=submit]';

  const USER_CARD_NUMBER = '0234592348';
  const USER_CARD_HOLDER = 'MrSheep';
  const USER_CARD_EXPIRY_MONTH = await page.type(CARD_NUMBER_SELECTOR);
}

buyTShirt();
