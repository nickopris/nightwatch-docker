@googlesearch
Feature: User search on Google

    As a User
    I Want go to the Google search page
    So that i will search

    Scenario: user searches motorola
        Given user is on Google search page
        When user enter keyword "motorola"
        And user click on search button
        Then user should be able to see motorola homepage link
