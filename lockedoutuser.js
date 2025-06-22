const { Builder, Browser, By, Key } = require("selenium-webdriver");

let driver = new Builder().forBrowser(Browser.CHROME).build();

async function testRunner() {
  await driver.manage().window().maximize();
  await driver.get("https://www.saucedemo.com/");
  console.log(`Site Title: ${await driver.getTitle()}`)
  await driver.findElement(By.id('user-name')).sendKeys('locked_out_user');
  await driver.findElement(By.id('password')).sendKeys('secret_sauce');
  await driver.findElement(By.id('login-button')).click();
  
  
  

  await driver.sleep(5000);
  await driver.quit();
}

testRunner();
