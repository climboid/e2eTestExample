/*
  The method below runs the assertions for the e2e home page test.
  Each assertion uses css selectors and proprietary nightwatch states
  Read the docs at nightwatchjs.org
*/

module.exports = {
  'Home Page' : function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('#body')
      .pause(1000)
      .assert.visible('#body')
      .assert.visible('input[type="submit"]')
      .setValue('#lst-ib', 'nightwatch')
      .pause(1000)
      .assert.visible('.sbsb_b')
      .click('.sbsb_c.gsfs:first-child')
      .pause(2000)
      .assert.containsText('h3.r:first-child','Nightwatch.js | Node.js powered End-to-End testing framework')
      .end();
  }
};
