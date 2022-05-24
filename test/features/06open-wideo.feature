Feature: Open Wideo page

    # @CDAction
    Scenario Outline: Opening wideo page
        Given The user enters the main page
        When The user clicks the Wideo button
        Then The Wideo page is opened

        Examples:
            | TestID      | ExpectedURL           |
            | DEMO_TC006  | httpps://webdriver.io/"|