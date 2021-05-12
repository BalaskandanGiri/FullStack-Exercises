import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number:'1234-567-89' }
  ]);
  const [ newPerson, setNewPerson ] = useState({name:'',number:''})

  const submitHandler = (event) => {
    event.preventDefault();
    let find = persons.find((x) => x.name === newPerson.name);
    console.log(find);
    if(find) {
      alert(`${newPerson.name} is already added to the phonebook`)
    } else {
      setPersons(persons.concat(newPerson));
      setNewPerson({name:'',number:''});
    }
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewPerson({...newPerson,name:event.target.value});
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewPerson({...newPerson,number:event.target.value});
  }

  return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={submitHandler}>
          <div>
            name: <input value={newPerson.name} onChange={handleNameChange}/>
          </div>
          <div>
            number: <input value={newPerson.number} onChange={handleNumberChange}/>
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        <div>debug: {newPerson.name}</div>
        <h2>Numbers</h2>
        {persons.map((per) => <p key={per.number}>{per.name} {per.number}</p>)}
      </div>
  )
}

export default App