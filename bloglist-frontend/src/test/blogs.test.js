import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Blog from '../components/Blog'
import { fireEvent, prettyDOM } from '@testing-library/dom'

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
    })

    test('renders content', () => {
        component = render(<Blog blog={blog}></Blog>)
        component.debug()
        expect(component.container).toHaveTextContent('Balaskandan')
    })

    test('Confirm the toggle is not opened', () => {
        component = render(<Blog blog={blog}></Blog>)
        const div = component.container.querySelector('button')
        console.log(prettyDOM(div))
        expect(div).toHaveTextContent('view')
    })

    test('after clicking the button, children are displayed', () => {
        component = render(<Blog blog={blog}></Blog>)
        const button = component.getByText('view')
        fireEvent.click(button)
        component.debug()
        expect(component.container).toHaveTextContent('3000')
    })

    test('clicking like twice, communicates with parent twice', () => {
        const isLoading = jest.fn()
        const component = render(<Blog blog={blog} isLoading={isLoading}></Blog>)
        component.debug()
        const viewButton = component.getByText('view')
        fireEvent.click(viewButton)
        const like = component.getByText('like')
        fireEvent.click(like)
        fireEvent.click(like)
        console.log(prettyDOM(like))
        expect(isLoading.mock.calls).toHaveLength(2)
    })
})