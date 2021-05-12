import React, { useState } from 'react'
import NewPerson from "./components/NewPerson";
import Filter from "./components/Filter";
import FilterResult from "./components/FilterResult";

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
        <Filter filter={filter} filterHandler={(event) => filterHandler(event)}/>
        <NewPerson newPerson={newPerson} submitHandler={(event) => submitHandler(event)} handleNumberChange={(event) => handleNumberChange(event)} handleNameChange={(e) => handleNameChange(e)}/>
        <FilterResult filterResult={filterResult}/>
      </div>
  )
}

export default App