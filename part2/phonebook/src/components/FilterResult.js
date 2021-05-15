import React from 'react';
import phoneService from '../service/phonebook'

const promptDelete = (id, refresh) => {
    if( window.confirm('Do you want to delete this?')) {
        phoneService.deletePhoneNumber(id).then(() => {
            refresh(id);
        });
    }
}

const FilterResult = ({filterResult, refresh}) => {
    console.log(filterResult);
    if (!filterResult) {
        return null;
    }

    return (
      <>
          <h2>Numbers</h2>
          {filterResult.map((per) => <p key={per.number}>{per.name} {per.number}<button onClick={() => {promptDelete(per.id, refresh)}}>delete</button></p>)}
      </>
    );
};

export default FilterResult;