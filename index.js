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

    it('Accessing SPMB and Click Home button', (done)=>{
        setTimeout(()=>{
            tester.findElement(driver.By.xpath('//*[@id="cssmenu"]/ul/li[1]/a')).click();
            done();
        },1500)
    });

    it('Accessing SPMB and Click download at Home page',(done)=>{
        setTimeout(()=>{
            tester.get('http://spmb.polinema.ac.id/home')
            tester.findElement(driver.By.xpath('//*[@id="content-in"]/p[1]/a')).click();
            done();
        },1500)
    });

    it('Accessing SPMB and Click Magister (klik disini)',(done)=>{
        setTimeout(()=>{
            tester.get('http://spmb.polinema.ac.id/home')
            tester.findElement(driver.By.xpath('//*[@id="content-in"]/ul/li[1]/a')).click();
            done();
        },1500)
    });

    it('Accessing SPMB and Click prodi in navbar',(done)=>{
        setTimeout(()=>{
            tester.findElement(driver.By.xpath('//*[@id="cssmenu"]/ul/li[2]/a')).click();
            done();
        },1500)
    });

    it ('Accessing panitia login',(done)=>{
        setTimeout(()=>{
            tester.findElement(driver.By.xpath('//*[@id="panitia"]/a')).click();
            done()
        },1500)
    });
});