Feature: Demo Feature

    @demo
    Scenario Outline: Log in feature
        Given Browser is opened
        When The user logs in
        Then The user is logged in

        Examples:
            | TestID        | Expected URL            |
            | CDACTION_TC001 | httpps://webdriver.io/"|
