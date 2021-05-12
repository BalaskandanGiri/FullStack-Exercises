import React, { useState } from 'react'

const App = initialState => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  let [filterResult,setFilterResult] = useState(persons);
  const [ newPerson, setNewPerson ] = useState({name:'',number:''})
  const [filter, setFilter] = useState('');


  const submitHandler = (event) => {
    event.preventDefault();
    let find = persons.find((x) => x.name === newPerson.name);
    console.log(find);
    if(find) {
      alert(`${newPerson.name} is already added to the phonebook`)
    } else {
      setPersons(persons.concat(newPerson));
      setNewPerson({name:'',number:''});
      setFilterResult(persons.concat(newPerson));
    }
  };

  const filterHandler = (event) => {
    let val = event.target.value.toLowerCase();
    console.log(val)
    setFilter(val);
    // console.log(filter);
    if(!val) {
      setFilterResult(persons);
    } else {
      setFilterResult(persons.filter((person) =>
          person.name.toLowerCase().includes(val)
      ))
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
        Filter shown with <input value={filter} onChange={filterHandler}/>
        <h2>Add a new</h2>
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
        {filterResult.map((per) => <p key={per.number}>{per.name} {per.number}</p>)}
      </div>
  )
}

export default App