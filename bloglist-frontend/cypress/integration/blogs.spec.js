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
        it.only('Login with username and password', function(){
            cy.get('#username').type('balaskandan')
            cy.get('#password').type('robertdiniro')
            cy.contains('login').click()
            cy.contains('invalid username or password')
        })
    })
})