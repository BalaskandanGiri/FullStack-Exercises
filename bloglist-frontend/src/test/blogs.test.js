import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Blog from '../components/Blog'
import { prettyDOM } from '@testing-library/dom'

describe('<Blog/>', () => {
    let blog, component
    beforeEach(() => {
        blog ={
            'likes': 3000,
            'author': 'Balaskandan',
            'url': 'www.harrypotter.com',
            'title': 'Harry Potter and Scoccers stone',
            'user': {
                'name': 'Balaskandan',
                'username': 'Harry Potter',
                'id': '60b24404d8bdb0281b199ae0'
            },
            'id': '60b4741f892b05a45f21c2f7'
        }
        component = render(<Blog blog={blog}></Blog>)
    })

    test('renders content', () => {
        component.debug()
        expect(component.container).toHaveTextContent('Balaskandan')
    })

    test('Confirm the toggle is not opened', () => {
        const div = component.container.querySelector('button')
        console.log(prettyDOM(div))
        expect(div).toHaveTextContent('view')
    })
})