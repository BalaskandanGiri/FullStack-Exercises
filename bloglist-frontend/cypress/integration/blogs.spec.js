describe('Blog app', function() {
    beforeEach(function() {
        cy.request('POST', 'http://localhost:3003/api/testing/reset')
        const user = {
            'name': 'Balaskandan',
            'username': 'balaskandan',
            'password': 'balaskandan'
        }
        cy.request('POST', 'http://localhost:3003/api/users', user)
        cy.visit('http://localhost:3000')
    })
    it('Login form is shown', function() {
        cy.contains('login')
    })

    describe('Login', function() {
        it('Login with username and password', function(){
            cy.get('#username').type('balaskandan')
            cy.get('#password').type('balaskandan')
            cy.contains('login').click()
            cy.contains('balaskandan logged in')
        })
        it('Login with username and password', function(){
            cy.get('#username').type('balaskandan')
            cy.get('#password').type('robertdiniro')
            cy.contains('login').click()
            cy.contains('invalid username or password')
            cy.get('.error').should('have.css','color','rgb(255, 0, 0)')
        })
    })

    describe('When logged in', function() {
        beforeEach(function() {
            cy.get('#username').type('balaskandan')
            cy.get('#password').type('balaskandan')
            cy.contains('login').click()
        })

        it.only('A blog can be created', function() {
            cy.contains('Create').click()
            cy.get('#title').type('balaskandan')
            cy.get('#author').type('balaskandan')
            cy.get('#url').type('balaskandan')
            cy.contains('Create').click()
            cy.contains('Title: balaskandan')
        })
    })
})