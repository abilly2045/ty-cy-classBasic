describe('Open the Bank App', () => {
  
   /*beforeEach('click manager login', () => {
    cy.visit('/')
    cy.contains('Bank Manager Login').click()
    cy.log('HomePage')*/
    /*cy.get('[class="btn btn-primary btn-lg"]').eq(1).click()*/

    before('click manager login', () => {
      cy.visit('/')
      cy.contains('Bank Manager Login').click()
      cy.log('HomePage')

  })

  it('Create Customer', () =>{
    cy.fixture('Selectors').then((Sel) => {
      cy.get(Sel.HomeBtn).should('exist')
      cy.clickElement(Sel.AddCustomerBtn)
      cy.typeAText(Sel.fNameField, Sel.fName)
      cy.typeAText(Sel.lNamefield, Sel.lName)
      cy.typeAText(Sel.PCodefield, Sel.PCode)
      cy. clickElement(Sel.CreateBtn)
      cy.on('window:alert', (text) => {
        expect(['Customer added successfully with customer id :6', 'Account created successfully with account Number :1016']).to.contains(text)
      })

      cy.get(Sel.OpenAccountBtn).should('exist').click()
      cy.get(Sel.CustomerList).should('exist').select(Sel.fName + " " + Sel.lName)
      cy.get(Sel.CurrencyList).should('exist').select(Sel.currency)
      cy.get(Sel.ProceedBtn).should('exist').click()

      cy.get(Sel.CustomerListBtn).should('exist').click()
      cy.get(Sel.SearchField).type(Sel.fName)
      cy.get(Sel.DeleteBtn).click()
    })

     //cy.log('Created Customer')
    /*
    cy.contains('Add Customer').click()
    cy.get('[ng-model="fName"]').type('Abill')
    cy.get('[ng-model="lName"]').type('Billintin')
    cy.get('[ng-model="postCd"]').type('SK23 7HD')
    cy.contains('Add Customer').click()*/
  }), 

  it.skip('Create an Account', () =>{
    
    cy.log('Created Account')
    
    //cy.contains('Open Account').click()
    
})
  
it.skip('Delete Customer', () =>{
  cy.log('Customer Deleted')


  
  //cy.contains('Delete Customer').click()
  
})

})