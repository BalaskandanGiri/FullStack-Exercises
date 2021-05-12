import React, {useEffect, useState} from 'react';
import axios from 'axios';

const DisplayResult = ({result}) => {
  console.log(result);
  if(result.length > 10) {
    return <p>To many matches, please be more specific</p>;
  } else if(result.length === 1) {
    return (
      <div>
        <h1>{result[0].name}</h1>
        <p>Capital - {result[0].capital}</p>
        <p>Population - {result[0].population}</p>
        <h2>Languages</h2>
        <ul>
        {result[0].languages.map((lang) => {
          return <li>{lang.name}</li>;
        })}
        </ul>
        <img src={result[0].flag} width="20%" ></img>
      </div>
    );
  }
   else {
    return result.map(res => <p>{res.name}</p>);
  }
}

function App() {
  const [country, setCountry] = useState('');
  const [data, setData] = useState([]);
  const [result, setResult] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
      setData(response.data);
    });
  }, [])
  const handleInputChange =(event) =>{
    const val = event.target.value;
    setCountry(val);
    setResult(data.filter((c) => {
      if(c.name.toLowerCase().includes(val.toLowerCase())){
        return c;
      } 
    }
    ));
    console.log(result);
  };

  
  return(
      <div>
        <div>find countries <input value={country} onChange={handleInputChange}/></div>
        <DisplayResult result={result}/>
      </div>
  );
}

export default App;
