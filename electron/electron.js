var webdriver = require('selenium-webdriver');
var ie = require('selenium-webdriver/ie');
var iedriver = require('iedriver');

var ieOption = null, driver = null;

var URL = {
  KNOX: "http://samsung.net/portal/default.jsp",
  MAIN: "http://kr2.samsung.net/portal/desktop/main.do",
  UPLOAD: "https://apksign.sec.samsung.net/",
};

async function timer(ms){
    return new Promise(res=>setTimeout(res,ms));
}

const doCraw = async function() {
  try {
    console.log("doCrawl");
    var ieOption = new ie.Options()
      .addArguments('--ignore-certificate-errors')
      .addArguments('--ignore-ssl-errors')
      .addArguments('--disable-single-click-autofill');

    driver = new webdriver.Builder()
      .setIeOptions(ieOption)
      .withCapabilities(webdriver.Capabilities.ie()).build();

    await driver.get(URL.KNOX);

    await timer(2000);

    let selector = "body div:nth-child(3) .loginWrapper form div:nth-child(1) #USERID";
    await driver.findElement(webdriver.By.css(selector)).clear();
    await driver.findElement(webdriver.By.css(selector)).sendKeys(username);

    selector = "body div:nth-child(3) .loginWrapper form div:nth-child(1) #USERPASSWORD";
    await driver.findElement(webdriver.By.css(selector)).clear();
    await driver.findElement(webdriver.By.css(selector)).sendKeys(password);

    selector = "body div:nth-child(3) .loginWrapper form div:nth-child(1) #signIn";
    await driver.findElement(webdriver.By.css(selector)).click();

    await timer(2000);

    //đợi 5 trang load
    let currrentUrl = await driver.executeScript("return location.href");
    console.log("url", currrentUrl);
    await driver.wait(function () {
      return driver.executeScript('return document.readyState').then(function (readyState) {
        return readyState === 'complete';
      });
    });

    currrentUrl = await driver.executeScript("return location.href");
    console.log("url", currrentUrl);
    await driver.wait(function () {
      return driver.executeScript('return document.readyState').then(function (readyState) {
        return readyState === 'complete';
      });
    });

    currrentUrl = await driver.executeScript("return location.href");
    console.log("url", currrentUrl);
    // await driver.wait(until.urlIs('https://www.samsung.net//portal/login/login.do'));

    await driver.wait(function () {
      return driver.executeScript('return document.readyState').then(function (readyState) {
        return readyState === 'complete';
      });
    });
    currrentUrl = await driver.executeScript("return location.href");
    console.log("url", currrentUrl);
    //await driver.wait(until.urlIs('http://www.samsung.net/portal/login/jump_for_portal.do'));

    await driver.wait(function () {
      return driver.executeScript('return document.readyState').then(function (readyState) {
        return readyState === 'complete';
      });
    });
    currrentUrl = await driver.executeScript("return location.href");
    console.log("url", currrentUrl);

    //đợi load
    await timer(2000);

    selector = "body div:nth-child(1) div:nth-child(2)";
    let sshown = await driver.findElement(webdriver.By.css(selector)).isDisplayed();
    if (sshown) {

      console.log("displayed");
    } else {

      console.log("not displayed error");
    }

    await driver.get(URL.UPLOAD);
  } catch (e) {
    console.log("selenium error", e);
  }
}

export default doCraw;