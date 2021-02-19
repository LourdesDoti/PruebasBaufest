const { Builder, By, Key, until, Keys } = require('selenium-webdriver');
const seleniumWebdriver = require ('selenium-webdriver');
const chromedriver = require('chromedriver');
const { assert, expect } = require('chai');
const { Given, When, Then } = require('cucumber');
const { default: axios } = require('axios');

Given ('Abro la pagina web', async function(){
    this.driver.get('https://www.demoblaze.com/index.html');
    this.driver.manage().window().maximize();
    this.driver.sleep(4000);
});

Given('Agrego una mascota', async function(){
    var body = {
        "id": 2,
        "category": {
            "id": 2,
            "name": "string"
        },
        "name": "Manchita",
        "photoUrls": [
          "string"
        ],
        "tags": [
            {
                "id": 2,
            "name": "string"
        }
    ],
    "status": "available"
      }
      var response = await axios.post(`https://petstore.swagger.io/v2/pet`, body);
      await assert (response.status == 200);
});

Given('Prueba', async function(){
    await this.driver.get('https://www.demoblaze.com/index.html');
 //   const originalWindow = await this.driver.getAllWindowHandles();

    var singUp = await this.driver.findElement(By.xpath("//a[@id='signin2']")).click();
    await this.driver.sleep(5000);
    var user = await this.driver.findElement(By.xpath("//input[@id='sign-username']")).sendKeys('2dddadi'+ Math.random());
    var pass = await this.driver.findElement(By.xpath("//input[@id='sign-password']")).sendKeys('aaadasaadasadas');
    await this.driver.sleep(5000);
    var incio = await this.driver.findElement(By.xpath("//button[contains(text(),'Sign up')]")).click();

    await this.driver.sleep(5000);
    await this.driver.switchTo().alert().accept();

    await this.driver.sleep(5000);
//    await this.driver.switchTo(originalWindow);
    await this.driver.sleep(5000);
    await this.driver.get('https://www.demoblaze.com/index.html');
    await this.driver.sleep(5000);
var login = await this.driver.findElement(By.xpath("//a[@id='login2']"));
await login.click();
await this.driver.sleep(5000)
var usuario = await this.driver.findElement(By.xpath("//input[@id='loginusername']")).sendKeys("a2dddadfdudsdlai");
var password = await this.driver.findElement(By.xpath("//input[@id='loginpassword']")).sendKeys("aaadasaadasadas");
var login = await this.driver.findElement(By.xpath("//button[contains(text(),'Log in')]")).click();
});




When('Voy a la seccion de laptops', async function(){
    await this.driver.sleep(4000);
    await this.driver.findElement(By.xpath('//a[@id="itemc"][2]')).click();
    await this.driver.sleep(4000);
});

When('Agrego una laptop al carrito', async function(){
    await this.driver.findElement(By.xpath('//div[@id="tbodyid"]/div[1]//a[@class="hrefch"]')).click();
    await this.driver.sleep(5000);
    await this.driver.findElement(By.xpath('//a[@onclick="addToCart(8)"]')).click();
    await this.driver.sleep(3000);
});



When('Busco a la mascota por su id', async function(){
      var response = await axios.get(`https://petstore.swagger.io/v2/pet/2`);
      await assert (response.status == 200);
      await assert (response.data.name == 'Manchita');
});

When('Modifico el nombre de la mascota agregada', async function(){
    var body = {
            "id": 2,
            "category": {
              "id": 2,
              "name": "string"
            },
            "name": "Pepe",
            "photoUrls": [
              "string"
            ],
            "tags": [
              {
                "id": 2,
                "name": "string"
              }
            ],
            "status": "available"
             }
    var response = await axios.put(`https://petstore.swagger.io/v2/pet`, body);
    await assert (response.status == 200);
    await assert (response.data.name == 'Pepe');
});

Then('Verifico que la laptop se agrego correctamente', async function(){
    var confirmacionCarrito = await this.driver.switchTo().alert().getText();
    await assert (confirmacionCarrito == 'Product added.');
    
    });