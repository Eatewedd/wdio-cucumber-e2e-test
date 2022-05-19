Feature: Open Forum page

    # @CDAction
    Scenario Outline: Opening Forum page
        Given The user enters the main page
        When The user clicks the Forum button
        Then The Forum page is opened

        Examples:
            | TestID      | ExpectedURL           |
            | DEMO_TC011  | httpps://webdriver.io/"|