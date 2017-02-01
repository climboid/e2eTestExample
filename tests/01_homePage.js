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
      .assert.visible('#body')
      .assert.visible('input[type="submit"]')
      .end();
  }
};
