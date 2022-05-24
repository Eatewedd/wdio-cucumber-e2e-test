Feature: Open Newsy page

        # @CDAction
        Scenario Outline: Opening Newsy page
        Given The user enters the main page
        When The user clicks the Newsy button
        Then The Newsy page is opened

        Examples:
            | TestID      | ExpectedURL           |
            | DEMO_TC002  | httpps://webdriver.io/"|