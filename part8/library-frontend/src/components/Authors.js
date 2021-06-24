  
import React, { useEffect, useState } from 'react'

const Authors = (props) => {
  const [authors, setAuthors] = useState([])
  if (!props.show) {
    return null
  }

  
  console.log(authors)

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

    </div>
  )
}

export default Authors
