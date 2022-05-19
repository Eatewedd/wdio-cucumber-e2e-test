Feature: Open Recenzje page

        # @CDAction
        Scenario Outline: Opening recenzje page
        Given The user enters the main page
        When The user clicks the Recenzje button
        Then The Recenzje page is opened

        Examples:
            | TestID      | ExpectedURL           |
            | DEMO_TC003  | httpps://webdriver.io/"|