import React, {useEffect, useState} from 'react';
import axios from 'axios';

const DisplayResult = ({result,country}) => {

  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    if(result.length === 1) {
      axios.get('http://api.weatherstack.com/current?access_key='+process.env.REACT_APP_API_KEY+'&query='+result[0].name).then(({data}) => {
        console.log(data);
        setWeatherData(data);
      })
    }
  },[result]);
  console.log(result);
  const displayWeatherData = weatherData ? <>
  <h2> Weather in {result[0].name}</h2>
  <p><b>temperature:</b> {weatherData.current.temperature} celcius</p>
  <img src={weatherData.current.weather_icons[0]}/>
  <p><b>wind:</b> {weatherData.current.wind_speed}</p>
  </> : null;
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
        {displayWeatherData|| null}
      </div>
    );
  }
   else {
    return result.map(res => {
    return (
      <>
      <p>{res.name} <button onClick={() => country(res.name)}>show</button></p>
      
      </>
    )
  });
  }
}

function App() {
  const [country, setCountry] = useState('');
  const [data, setData] = useState([]);
  const [result, setResult] = useState([]);
  console.log(process.env.REACT_APP_Test);
  console.log(process.env.REACT_APP_API_KEY);
  console.log(process.env);
  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
      setData(response.data);
    });
  }, [])

  const filter = (val) => {
    setCountry(val);
    setResult(data.filter((c) => {
      if(c.name.toLowerCase().includes(val.toLowerCase())){
        return c;
      } 
    }
    ));
  }
  const handleInputChange =(event) =>{
    const val = event.target.value;
    filter(val);
    console.log(result);
  };

  
  return(
      <div>
        <div>find countries <input value={country} onChange={handleInputChange}/></div>
        <DisplayResult result={result} country={(c) => filter(c.toLowerCase())}/>
      </div>
  );
}

export default App;
