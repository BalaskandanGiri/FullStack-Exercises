import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ])
  const [ newName, setNewName ] = useState('')

  const submitHandler = (event) => {
    event.preventDefault();
    setPersons(persons.concat({name: newName}));
    setNewName('');
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  }

  return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={submitHandler}>
          <div>
            name: <input value={newName} onChange={handleNameChange}/>
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        <div>debug: {newName}</div>
        <h2>Numbers</h2>
        {persons.map((per) => <p key={per.name}>{per.name}</p>)}
      </div>
  )
}

export default App