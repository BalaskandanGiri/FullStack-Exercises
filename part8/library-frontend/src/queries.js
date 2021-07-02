import { gql } from '@apollo/client'

// Fragments - data type definition. We could use this in other queries to retrieve the same data
const BOOK_DETAILS = gql`
    fragment BookDetails on Book {
        id
        title
        author {
            name
        }
        published
        genres
    }
`

export const ALL_AUTHORS = gql`
    query{
        allAuthors{
            name
            booksCount
            born
        }
    }
`

// Using the fragment BOOK_DETAILS to retrieve data
export const ALL_BOOKS = gql`
    query{
        allBooks{
            ...BookDetails
        }
    }
    ${BOOK_DETAILS}
`

export const ALL_BOOKS_WITH_GENRE = gql`
    query getallBooks($genre: String!) {
        allBooks(genre: $genre) {
            title
            published
            genres
            author {
                name
            }
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
            published
        }
    }
`

export const ADDED_BOOK = gql`
    subscription{
        bookAdded {
            ...BookDetails
        }
    }
    ${BOOK_DETAILS}
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

export const LOGIN = gql`
    mutation login($username: String!, $password: String!) {
        login(
            username: $username,
            password: $password) {
            value
        }
    }
`

export const ME = gql`
    query{
        me{
            username
            favoriteGenre
        }
    }
`