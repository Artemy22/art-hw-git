
///<reference types="cypress"/>


describe('Registr and Auth', () => {
    let loginName = `ShoPochalos${Date.now()}`
    let passwordU = 'Password123!'

    it('Registration flow', () => {
        cy.visit('https://automationteststore.com/')
        cy.get('#customer_menu_top').click()
        cy.get('[title="Continue"]').click()
        cy.get('[name="firstname"]').type('firstname').should('have.value', 'firstname')
        cy.get('[name="lastname"]').type('lastname').should('have.value', 'lastname')
        cy.get('[id="AccountFrm_email"]').type(`ShoPochalos${Date.now()}@email.com`).should('have.value', `ShoPochalos${Date.now()}@email.com`)
        cy.get('[id="AccountFrm_address_1"]').type('address_1').should('have.value', 'address_1')
        cy.get('[id="AccountFrm_city"]').type('city').should('have.value', 'city')
        cy.get('[id="AccountFrm_country_id"]').select('220').should('have.value', '220')
        cy.get('[id="AccountFrm_zone_id"]').select('3490').should('have.value', '3490')
        cy.get('[id="AccountFrm_postcode"]').type('postcode').should('have.value', 'postcode')
        cy.get('[id="AccountFrm_loginname"]').type(loginName).should('have.value', loginName)
        cy.get('[id="AccountFrm_password"]').type(passwordU)
        cy.get('[id="AccountFrm_confirm"]').type(passwordU)
        cy.get('[id="AccountFrm_newsletter0"]').click()
        cy.get('[id="AccountFrm_agree"]').click()
        cy.get('[title="Continue"]').click()
        cy.url().should('include', 'rt=account/success')
        cy.url().should('eq', 'https://automationteststore.com/index.php?rt=account/success')
        cy.contains('Congratulations! Your new account has been successfully created!')    
    })

    it('Sign In flow', () => {
        cy.visit('https://automationteststore.com/')
        cy.get('#customer_menu_top').click()
        cy.get('[id="loginFrm_loginname"]').type(loginName)
        cy.get('[id="loginFrm_password"]').type(passwordU)
        cy.get('[title="Login"]').click()
        cy.get('.menu_text').should('contain', 'Welcome back firstname')
    })
})  