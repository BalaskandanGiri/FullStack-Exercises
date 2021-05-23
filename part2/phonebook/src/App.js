import React, { useState, useEffect } from 'react'
import NewPerson from "./components/NewPerson";
import Filter from "./components/Filter";
import FilterResult from "./components/FilterResult";
import Notification from "./components/Notification";
import phoneService from "./service/phonebook";

const App = initialState => {
  const [ persons, setPersons ] = useState([]);
  let [filterResult,setFilterResult] = useState(persons);
  const [ newPerson, setNewPerson ] = useState({name:'',number:''})
  const [filter, setFilter] = useState('');
  const [message, setMessage] = useState({msg:null,type:'success'});

  const getBackend = () => {
    phoneService.getPhoneBook().then((response) => {
      console.log('Response from db.json :', response);
      setPersons(response.data);
      setFilterResult(response.data);
    })
  }

  useEffect(() => {
    getBackend();
  }, []);


  const submitHandler = (event) => {
    event.preventDefault();
    let find = persons.find((x) => x.name === newPerson.name);
    console.log(find);
    if(find) {
      if(window.confirm("The person is already in the phone book? Do you want to update the phoneNumber?")) {
        phoneService.updatePhoneNumber(find.id, newPerson).then(() => {
          getBackend();
        }).catch((err) => {
          console.log(err);
          getBackend();
          setMessage({msg:"404 person was already deleted",type:"error"});
          setTimeout(() =>{setMessage({...message, msg:null})},5000)
        });
      }
    } else {
      phoneService.postPhoneNumber(newPerson).then((response) => {
        getBackend();
        setMessage({msg:"Created Phone number successfully", type:"success"});
        setTimeout(() =>{setMessage({...message, msg:null})},5000)
      }).catch((err) => {
        console.log(err.response.data.error);
        setMessage({msg:err.response.data.error, type:"error"});
        setTimeout(() =>{setMessage({...message, msg:null})},5000)
      })
    }
    setNewPerson({name:'',number:''});
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
        <Notification message={message.msg} type={message.type}/>
        <Filter filter={filter} filterHandler={(event) => filterHandler(event)}/>
        <NewPerson newPerson={newPerson} submitHandler={(event) => submitHandler(event)} handleNumberChange={(event) => handleNumberChange(event)} handleNameChange={(e) => handleNameChange(e)}/>
        <FilterResult filterResult={filterResult} refresh={(id) => {console.log(id);id && getBackend()}}/>
      </div>
  )
}

export default App