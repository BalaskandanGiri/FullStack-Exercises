import React from 'react';

const Filter = ({filter,filterHandler}) => {
    return (
        <div>
            <h2>Phonebook</h2>
            Filter shown with <input value={filter} onChange={filterHandler}/>
        </div>
    );
};

export default Filter;