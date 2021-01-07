var webdriver = require('selenium-webdriver');
var ie = require('selenium-webdriver/ie');
var iedriver = require('iedriver');

var ieOption = null, driver = null;

async function timer(ms){
    return new Promise(res=>setTimeout(res,ms));
}

const doCraw = async function() {
  try {
   
  } catch (e) {
    console.log("selenium error", e);
  }
}

export default doCraw;