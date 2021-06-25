  
import React, { useEffect, useState } from 'react'
import { EDIT_AUTHOR, ALL_AUTHORS } from '../queries'
import { useMutation } from '@apollo/client'

const Authors = (props) => {
    const [authors, setAuthors] = useState([])

    const [ editAuthor ] = useMutation(EDIT_AUTHOR, {
                    refetchQueries: [{query: ALL_AUTHORS}]
        })

    if (!props.show) {
        return null
    }

    
    console.log(authors)

    const handleSubmit = (event) => {
        event.preventDefault()
        const authorName = event.target.authorName.value;
        const authorBirthYear = parseInt(event.target.birthYear.value)
        console.log(authorName, authorBirthYear)
        editAuthor({
            variables: {name: authorName, born:authorBirthYear}
        })
    }

    return (
        <div>
        <h2>authors</h2>
        <table>
            <tbody>
            <tr>
                <th></th>
                <th>
                born
                </th>
                <th>
                books
                </th>
            </tr>
            {props.authors.map(a =>
                <tr key={a.name}>
                <td>{a.name}</td>
                <td>{a.born}</td>
                <td>{a.booksCount}</td>
                </tr>
            )}
            </tbody>
        </table>
        <h2>Edit author</h2>
        <form onSubmit={handleSubmit}>
            Name: <select name="authorName">
                {props.authors.map(a => <option value={a.name}>{a.name}</option>)}
            </select>
            BirthYear: <input name="birthYear"></input>
            <button type="submit">Edit</button>
        </form>

        </div>
    )
}

export default Authors
