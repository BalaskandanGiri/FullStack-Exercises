import React from 'react';

const NewPerson = ({newPerson, submitHandler, handleNumberChange, handleNameChange}) => {


    return(
        <div>
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
        </div>
    );

};

export default NewPerson;