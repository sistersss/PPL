var driver = require('selenium-webdriver');

var chrome = require('selenium-webdriver/chrome');

var chromeDriver = require('chromedriver');

var expected = require('chai/register-expect');

chrome.setDefaultService(new chrome.ServiceBuilder(chromeDriver.path).build());

var tester = new driver.Builder().withCapabilities(driver.Capabilities.chrome()).build();

describe('Testing', ()=>{
    before(()=>{
        tester.get('http://spmb.polinema.ac.id/')
    });

    it('Accessing SPMB and Click Home button', ()=>{
        tester.findElement(driver.By.xpath('//*[@id="cssmenu"]/ul/li[1]/a')).click();
    });
});