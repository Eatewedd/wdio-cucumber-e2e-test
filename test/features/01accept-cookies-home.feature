Feature: Accept coookies feature

    # @CDAction
    Scenario Outline: Accepting cookies test
        Given The user enters the main page
        When The user accepts all cookies
        Then The cookie bar is not visible

        Examples:
            | TestID     | ExpectedURL            |
            | DEMO_TC001 | "httpps://webdriver.io/"|