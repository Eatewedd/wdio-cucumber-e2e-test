Feature: Open Czasopismo page

    @CDAction2
    Scenario Outline: Opening czasopismo page
        Given The user enters the main page
        When The user clicks the Czasopismo button
        Then The Czasopismo page is opened

        Examples:
            | TestID      | ExpectedURL           |
            | DEMO_TC007  | httpps://webdriver.io/"|