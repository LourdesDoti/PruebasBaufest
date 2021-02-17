const { setWorldConstructor, setDefaultTimeout, setDefinitionFunctionWrapper } = require('cucumber');
const seleniumWebdriver = require ('selenium-webdriver');
const chromedriver = require('chromedriver');
const chrome = require('selenium-webdriver/chrome');

function ThisWorld ({}) {
    setDefaultTimeout('60000');
    this.driver =  new seleniumWebdriver.Builder().forBrowser('chrome').build(); 
};
setWorldConstructor(ThisWorld);













