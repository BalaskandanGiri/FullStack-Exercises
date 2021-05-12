import React from 'react';

const FilterResult = ({filterResult}) => {
    return (
      <>
          <h2>Numbers</h2>
          {filterResult.map((per) => <p key={per.number}>{per.name} {per.number}</p>)}
      </>
    );
};

export default FilterResult;