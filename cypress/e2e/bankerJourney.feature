Feature: Banker Journey
A Banker should be able to create an account
Assign an account number
Delete an account

    Sceanrio: A banker should be abl to create and add an account numbeer then delete the account holder profile
        Given I am on the bank app
        When I click on the bank login button
        And I click on add customer button
        And I type in the first name
        And I type in the last name
        And I type in the post code
        And I click on create customer button
        Then I should see the customer profile
        When I click on open account button
        And I select the customer name
        And I select the currency
        And I click on precess button
        Then I should see the account number
        When I click on the customers button
        And I search for the user
        Then I click on the delete button