import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given(/^I am on the bank app$/, () => {
	cy.visit('/')
});

When(/^I click on the bank login button$/, () => {
	cy. clickElement('[class="btn btn-primary btn-lg"]')
});

When(/^I click on add customer button$/, () => {
	cy.fixture('Selectors').then((Sel) => {
		cy.clickElement(Sel.AddCustomerBtn)
	})
});

When(/^I type in the first name$/, () => {
	cy.fixture('Selectors').then((Sel) => {
		cy.typeAText(Sel.fNameField, Sel.fName)
});

When(/^I type in the last name$/, () => {
	cy.fixture('Selectors').then((Sel) => {
		cy.typrAText(Sel.lNamefield, Sel.lName)
});

When(/^I type in the post code$/, () => {
	cy.fixture('Selectors').then((Sel) => {
		cy.typeAText(Sel.PCodefield, Sel.PCode)
});

When(/^I click on create customer button$/, () => {
	cy.fixture('Selectors').then((Sel) => {
		cy. clickElement(Sel.CreateBtn)
});

Then(/^I should see the customer profile$/, () => {
	return true;
});

When(/^I click on open account button$/, () => {
	return true;
});

When(/^I select the customer name$/, () => {
	return true;
});

When(/^I select the currency$/, () => {
	return true;
});

When(/^I click on precess button$/, () => {
	return true;
});

Then(/^I should see the account number$/, () => {
	return true;
});

When(/^I click on the customers button$/, () => {
	return true;
});

When(/^I search for the user$/, () => {
	return true;
});

Then(/^I click on the delete button$/, () => {
	return true;
});
