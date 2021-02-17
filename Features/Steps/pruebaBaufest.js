const { Builder, By, Key, until, Keys } = require('selenium-webdriver');
const seleniumWebdriver = require ('selenium-webdriver');
const chromedriver = require('chromedriver');
const { assert, expect } = require('chai');
const { Given, When, Then } = require('cucumber');

Given ('Abro la pagina web', async function(){
    this.driver.get('https://www.demoblaze.com/index.html');
    this.driver.manage().window().maximize();
    this.driver.sleep(4000);
});





Given ('Registro un usuario', async function (){ 
    await this.driver.findElement(By.xpath('//a[@id="signin2"]')).click();
    await this.driver.sleep(5000);
    await this.driver.findElement(By.xpath('//input[@id="sign-username"]')).sendKeys('ldtfdtadtcitrndpyrd');
    await this.driver.findElement(By.xpath('//input[@id="sign-password"]')).sendKeys('123456');
    await this.driver.sleep(5000);
    await this.driver.findElement(By.xpath('//button[@onclick="register()"]')).click();
    let handles = await this.driver.getAllWindowHandles();
    console.log(handles);
    await this.driver.sleep(5000);
    await this.driver.switchTo().alert().accept();
    await this.driver.switchTo().window(handles[0]);
  //  await this.driver.switchTo().window(originalWindow);
    await this.driver.sleep(5000);
   
});

Given('Inicio sesion', async function(){
    await this.driver.sleep(7000); 
    await this.driver.findElement(By.xpath('//a[@id="login2"]')).click();
    await this.driver.sleep(5000);
    await this.driver.findElement(By.xpath('//input[@id="loginusername"]')).sendKeys('ldtfdtadtcitrndpyrd');
    await this.driver.findElement(By.xpath('//input[@id="loginpassword"]')).sendKeys('123456');
    await this.driver.sleep(5000);
    await this.driver.findElement(By.xpath('//button[@onclick="logIn()"]')).click();
    await this.driver.sleep(5000);
});

When('Voy a la seccion de laptops', async function(){
    await this.driver.findElement(By.xpath('//a[@id="itemc"][2]')).click();
    await this.driver.sleep(5000);
});

When('Agrego una laptop al carrito', async function(){
    await this.driver.findElement(By.xpath('//div[@id="tbodyid"]/div[1]//a[@class="hrefch"]')).click();
    await this.driver.sleep(5000);
    await this.driver.findElement(By.xpath('//a[@onclick="addToCart(8)"]')).click();
    await this.driver.sleep(3000);
});

Then('Verifico que la laptop se agrego correctamente', async function(){
var confirmacionCarrito = await this.driver.switchTo().alert().getText();
await assert (confirmacionCarrito == 'Product added.');

});
