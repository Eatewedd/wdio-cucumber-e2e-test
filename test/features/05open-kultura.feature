Feature: Open Kultura page

        # @CDAction
        Scenario Outline: Opening Kultura page
        Given The user enters the main page
        When The user clicks the Kultura button
        Then The Kultura page is opened

        Examples:
            | TestID      | ExpectedURL           |
            | DEMO_TC005  | httpps://webdriver.io/"|