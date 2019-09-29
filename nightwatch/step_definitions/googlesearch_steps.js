const { Given, When, Then } = require('cucumber');
const { client } = require('nightwatch-cucumber');


Given('user is on Google search page', function () {
    return client
        .url('http://google.com')
        //.windowMaximize()
        //.waitForElementVisible('body', 2000);
});
When('user enter keyword {string}', function (string) {
    return client.waitForElementVisible('input[title="Search"]', 3000)
        .setValue('input[title="Search"]', 'motorola')
});

When('user click on search button', function () {
    return client.waitForElementVisible('input[value="Google Search"]', 4000)
    .click('input[value="Google Search"]')
});

Then('user should be able to see motorola homepage link', function () {
    return client.waitForElementVisible('body', 4000)
        .saveScreenshot('./reports/search-result.png')
        .element('css selector', 'a[href="https://www.motorola.co.uk/home"]', function(visible) {
            client.assert.ok(visible.state === 'success')
        })
        .pause(4000)

});