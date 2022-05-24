Feature: Open Teksty page

        # @CDAction
        Scenario Outline: Opening teksty page
        Given The user enters the main page
        When The user clicks the Teksty button
        Then The Teksty page is opened

        Examples:
            | TestID      | ExpectedURL           |
            | DEMO_TC004  | httpps://webdriver.io/"|