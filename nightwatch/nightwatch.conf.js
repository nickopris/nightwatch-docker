const seleniumServer = require('selenium-server');
const chromeDriver = require('chromedriver');
const geckoDriver = require('geckodriver')

require('nightwatch-cucumber')({
    cucumberArgs: [
        '--require', 'step_definitions',
        '--format', 'json:reports/cucumber.json',
       '--format', 'node_modules/cucumber-pretty',
       '--format', 'json:features/reports/cucumber.json',
        'features'
    ]
});

module.exports = {
    
    selenium: {
        start_process: true,
        server_path: seleniumServer.path,
        host: '127.0.0.1',
        port: 4444,
        cli_args: {
            "webdriver.chrome.driver" : chromeDriver.path,
            //"webdriver.gecko.driver" : geckoDriver.path
        }
    },
    test_settings: {
        default: {
            selenium_port: 4444,
            selenium_host: '127.0.0.1',
            desiredCapabilities: {
                browserName: 'chrome',
                javaScriptEnabled: true,
                maximizeWindow: false,
                elementScrollBehavior: 1,
                chromeOptions : {
                    "args" : [
                        'headless',
                        'disable-web-security',
                        'ignore-certificate-errors',
                        'disable-gpu',
                        '--no-sandbox',
                        'window-size=1440,900'
                    ]
                },
            },
            screenshots: {
                enabled: true,
                on_failure: true,
                on_error: true,
                path: 'reports/screenshots'
            },
        },
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome',
                javaScriptEnabled: true,
                chromeOptions : {
                    "args" : [
                        'headless',
                        'disable-web-security',
                        'ignore-certificate-errors',
                        'disable-gpu',
                        '--no-sandbox',
                        'window-size=1440,900'
                    ]
                },
                "acceptInsecureCerts": true,
            },
            // firefox: {
            //     desiredCapabilities: {
            //         browserName: 'firefox',
            //         marionette: true
                    
                // },
        }

    }
}
