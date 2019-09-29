var reporter = require('cucumber-html-reporter');
 
var options = {
        theme: 'bootstrap',
        jsonFile: 'reports/cucumber.json',
        output: 'reports/cucumber_report.html',
        reportSuiteAsScenarios: true,
        //launchReport: true,
        metadata: {
            "Test Environment": "TEST",
            "Browser": "Chrome"
        }
    };
 
    reporter.generate(options);