import React from 'react';

const NewPerson = ({newPerson, submitHandler, handleNumberChange, handleNameChange}) => {


    return(
        <div>
            <h2>Add a new</h2>
            <form onSubmit={submitHandler}>
                <table>
                    <tbody>
                        <tr><td>name:</td><td><input value={newPerson.name} onChange={handleNameChange}/></td></tr>
                        <tr><td>number:</td><td><input value={newPerson.number} onChange={handleNumberChange}/></td></tr>
                        <tr><td></td><td><button type="submit">add</button></td></tr>
                    </tbody>
                </table>


            </form>
        </div>
    );

};

export default NewPerson;