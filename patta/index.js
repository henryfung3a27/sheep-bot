var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var puppeteer = require('puppeteer');
var app = express();

// app.get('/', function(req, res) {
//   //All the web scraping magic will happen here
//   url = 'https://www.patta.nl/patta-pferd-t-shirt-white';
//   console.log('request was made');
//
//   // The structure of our request call
//   // The first parameter is our URL
//   // The callback function takes 3 parameters, an error, response status code and the html
//   var json;
//   request(url, function(error, response, html) {
//     console.log('the request has been made');
//
//     if (!error) {
//       var $ = cheerio.load(html);
//       console.log('cherrio loaded the page');
//       res.send(html);
//       // console.log(html);
//       // $('#js-productPageFops').filter(function() {
//       //   console.log('it filtered out this class');
//       //   console.log($(this));
//       // });
//       // res.send('nothing');
//     }
//   });
// });

async function screenshot() {
  const BUTTON_SELECTOR = '#product-addtocart-button';

  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.patta.nl/patta-pferd-t-shirt-white');
  await page.click(BUTTON_SELECTOR);
}

screenshot();
