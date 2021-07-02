import React, {useState, useEffect} from 'react'


const Books = (props) => {
    const [genres, setGenre] = useState([])
    const [selectedGenre, setSelectedGenre] = useState('')
    const [books, setBooks] = useState([])
    const [filteredBooks, setFilteredBooks] = useState([])
    useEffect(() => {
        setBooks(props.books)
        let genres = ['All']
        props.books.forEach(element => {
            element.genres.forEach(genre => {
                if (genres.indexOf(genre) === -1) {
                    genres.push(genre)
                }
            })
        });
        setGenre(genres)
        setSelectedGenre('All')
    }, [props.books])

    useEffect(() => {
        if(selectedGenre === 'All') {
            setFilteredBooks(books)
        } else {
            setFilteredBooks(books.filter(book => book.genres.indexOf(selectedGenre) !== -1))
        }
    }, [books, selectedGenre])

    if (!props.show) {
        return null
    }

    return (
        <div>
        <h2>books</h2>

        <table>
            <tbody>
            <tr>
                <th></th>
                <th>
                author
                </th>
                <th>
                published
                </th>
            </tr>
            {filteredBooks.map(a =>
                <tr key={a.title}>
                <td>{a.title}</td>
                <td>{a.author.name}</td>
                <td>{a.published}</td>
                </tr>
            )}
            </tbody>
        </table>
        <div>
            {genres.length > 0 &&
            genres.map((g) => (
                <button onClick={() => setSelectedGenre(g)} key={g}>
                {g}
                </button>
            ))}
        </div>
        </div>
    )}

export default Books