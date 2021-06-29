import { gql } from '@apollo/client'

export const ALL_AUTHORS = gql`
    query{
        allAuthors{
            name
            booksCount
            born
        }
    }
`

export const ALL_BOOKS = gql`
    query{
        allBooks{
            title
            author {
                name
            }
            published
        }
    }
`
export const ADD_BOOK = gql`
    mutation createBook($title: String!, $author: String!, $published: Int!, $genres: [String!]!){
        addBook(
            title: $title,
            author: $author,
            published: $published,
            genres: $genres
        ){
            title
            author
            published
        }
    }
`

export const EDIT_AUTHOR = gql`
    mutation editAuthor($name: String!, $born: Int!){
        editAuthor(
            name: $name,
            setBorn: $born
        ) {
            name
            booksCount
            born
        }
    }
`