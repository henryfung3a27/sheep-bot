
var url = "https://www.size.co.uk";
var item = "adidas ultraboost";
var size = "11";
var fname = "John";
var lname = "Smith";
var pnumber = "07123456789";
var email = "john.smith@gmail.com";
var address1 = "University of Birmingham";
var address2 = "Edgbaston";
var city	= "Birmingham";
var county = "West Midlands";
var postcode = "B15 2TT";
var cardNumber = "0000 0000 0000 0000";
var expiryM = "01";
var expiryY = "2020";
var security = "000";


const puppeteer = require('puppeteer');

async function hello(){

  	const browser = await puppeteer.launch({headless: false});
  	const page = await browser.newPage();
  	page.setViewport({width:1920, height:1080});
  	await page.goto(url);
  	await page.click("#searchButton");
  	await page.keyboard.type(item);
  	await page.keyboard.press("Enter");
  	await page.waitForNavigation();
  	// setTimeout(async function(){
  	// 	await page.click("#productListMain > li:nth-child(1) > span > span.itemOverlay > span > svg");
  	// }, 2000);
  	// setTimeout(async function(){
  	// 	await page.click("#itemOptions > div.options > button:nth-child(3)");
  	// }, 4000);
  	// setTimeout(async function(){
  	//   	await page.click("#lbOpenCt > div > div.quickRight > div > div.pin-bottom > div > div > div.quickViewButtonDraw > div > button.btn.btn-default.add-to-basket");
  	// }, 6000);
  	// setTimeout(async function(){
  	// 	await page.click("a.btn-level1:nth-child(3)");
  	// }, 12000);
  	//page.on('load', async function(){

  		await page.click("#productListMain > li:nth-child(1) > span > span.itemOverlay > span > svg");
  	//setTimeout(async function(){
  		await page.waitFor(700);
  		await page.click("button[title='Select\ Size\ " +size+ "']");
  	//}, 4900);		
  	
  		
  		// for (var i = 0;i<options.length;i++){
  		// 	if (options[i].title == "Select Size " + size)

  		// }
  	//});
  	//page.on('load', async function(){
	// await page.click("#itemOptions > div.options > button:nth-child(3)");
 //  	//});
 //  	page.on('load', async function(){
   	  	
   	  	await page.click("#lbOpenCt > div > div.quickRight > div > div.pin-bottom > div > div > div.quickViewButtonDraw > div > button.btn.btn-default.add-to-basket");
   	  	await page.waitForNavigation();
   	  	await page.click("#basketTotals > div.basketContinue > a");
   	  	await page.waitFor(700);
   	  	await page.click("#guestEmail");
   	  	await page.keyboard.type(email);
   	  	await page.waitFor(700);
   	  	await page.click("#checkoutGuest");
   	  	await page.waitForNavigation('domcontentloaded');
   	  	await page.waitFor("#checkoutContent > div.fs-mod.formList.selectDeliveryMethod > div.fs-mod-cnt > div > div > ul > li:nth-child(3) > div.formListInfo > span");
   	  	await page.waitFor(1500);
   	  	await page.click("#checkoutContent > div.fs-mod.formList.selectDeliveryMethod > div.fs-mod-cnt > div > div > ul > li:nth-child(3) > div.formListInfo > span");
   	  	await page.waitFor(500);
   	  	await page.click("#firstName");
   	  	await page.keyboard.type(fname);
   	  	await page.click("#lastName");
   	  	await page.keyboard.type(lname);
   	  	await page.click("#phone");
   	  	await page.keyboard.type(pnumber);

   	  	await page.click("#showAutoCompletables");
   	  	await page.waitFor(500);
   	  	await page.click("#address1");
   	  	await page.keyboard.type(address1);
   	  	await page.click("#address2");
   	  	await page.keyboard.type(address2);
   	  	await page.click("#town");
   	  	await page.keyboard.type(city);
   	  	await page.click("#county");
   	  	await page.keyboard.type(county);
   	  	await page.click("#postcodeLook");
   	  	await page.keyboard.type(postcode);
   	  	await page.click("#saveAddressFormCheckoutV3 > div:nth-child(9) > div > span > label > span.chkbox");
   	  	await page.click("#continueSecurelyButton");
   	  	await page.waitForNavigation('domcontentloaded');
   	  	await page.waitFor(1500);
   	  	await page.click("#selectPaymentMethod > div.fs-mod-cnt > div.fs-grp.paymentButtons > div.fs-row.but.act.hlb.paybyCARD > div > button");
   	  	//await page.waitForNavigation('domcontentloaded');
   	  	await page.waitFor(7000);
   	  	await page.click("#input1");
   	  	await page.keyboard.type(cardNumber);
   	  	await page.click("#input2");
   	  	await page.keyboard.type(expiryM);
   	  	await page.click("#input3");
   	  	await page.keyboard.type(expiryY);
   	  	await page.click("#input4");
   	  	await page.keyboard.type(security);
 //  	});#lastName
 //  	page.on('load', async function(){
 //  		await page.click("a.btn-level1:nth-child(3)");
 //  	});

  	//await page.reload();
  	//
  	//await page.click("#lbOpenCt > div > div.quickRight > div > div.pin-bottom > div > div > div.quickViewButtonDraw > div > button.btn.btn-default.add-to-basket");
  	// await page.click("#itemOptions > div.options > button:nth-child(10)");
  	//await page.click(".add-to-basket");
  	// const dimensions = await page.evaluate(() => {
   //  	return {
   //   		width: Math.floor(getWidth(),getHeight()),
   //    		height: Math.floor(document.documentElement.clientHeight),
   //    		deviceScaleFactor: window.devicePixelRatio
   //  	};
  	// });
  	// console.log('Dimensions:', dimensions);
 // page.setViewport(dimensions.width, dimensions.height);
  	

  
  //await page.screenshot({path: 'example.png'});

  //await browser.close();
}
hello();