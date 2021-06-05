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
        describe('one blog is created', function() {
            beforeEach(function() {
                cy.contains('Create').click()
                cy.get('#title').type('balaskandan')
                cy.get('#author').type('balaskandan')
                cy.get('#url').type('balaskandan')
                cy.contains('Create').click()
            })
            it('A blog can be created', function() {
                cy.contains('Title: balaskandan')
            })

            it('checks that user can like a blog', function() {
                cy.contains('view').click()
                cy.contains('like').click()
                cy.contains('1')
            })

            it('checks that user can delete a blog', function() {
                cy.contains('view').click()
                cy.contains('delete').click()
                cy.contains('hellowoeld').should('not.exist')
            })

            it.only('checks that blogs are sorted according to likes', function() {
                cy.contains('Title: balaskandan').contains('view').click()
                cy.contains('like').click()
                cy.contains('hide').click()
                cy.get('#title').type('hellowoeld')
                cy.get('#author').type('hellowoeld')
                cy.get('#url').type('hellowoeld')
                cy.get('#createButton').click()
                cy.contains('Title: hellow').contains('view').click()
                cy.contains('like').click()
                cy.wait(2000)
                cy.contains('like').click()
                cy.wait(2000)
                cy.contains('like').click()
                cy.wait(2000)
                cy.contains('like').click()
                cy.contains('Title: balaskandan').contains('view').click()
                cy.get('#likes')
                    .should('contain', '3')
                    .should('not.contain', '1')
            })
        })


    })
})