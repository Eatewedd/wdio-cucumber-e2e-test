Feature: Open Technologie page

    # @CDAction
    Scenario Outline: Opening Technologie page
        Given The user enters the main page
        When The user clicks the Technologie button
        Then The Technologie page is opened

        Examples:
            | TestID      | ExpectedURL           |
            | DEMO_TC008  | httpps://webdriver.io/"|