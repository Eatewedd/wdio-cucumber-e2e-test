Feature: Open Na Luzie page

    # @CDAction
    Scenario Outline: Opening Na Luzie page
        Given The user enters the main page
        When The user clicks the Na Luzie button
        Then The Na Luzie page is opened

        Examples:
            | TestID      | ExpectedURL           |
            | DEMO_TC010  | httpps://webdriver.io/"|