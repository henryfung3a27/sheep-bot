const puppeteer = require('puppeteer');
var url = "https://www.google.co.uk";
var search = "Hello, World!";
async function hello(){
	const browser = await puppeteer.launch({headless: false});
  	const page = await browser.newPage();
  	page.setViewport({width:1920, height:1080});
  	await page.goto(url);
  	await page.mouse.click(1000,280);
  	await page.keyboard.type(search);
}


hello();