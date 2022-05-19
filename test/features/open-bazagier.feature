Feature: Open Baza Gier page

    # @CDAction
    Scenario Outline: Opening Baza Gier page
        Given The user enters the main page
        When The user clicks the Baza Gier button
        Then The Baza Gier page is opened

        Examples:
            | TestID      | ExpectedURL           |
            | DEMO_TC009  | httpps://webdriver.io/"|