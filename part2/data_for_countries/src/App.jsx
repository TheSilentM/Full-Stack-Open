import { useEffect, useState } from 'react';
import axios from "axios";
import SearchCountry from "../components/SearchCountry";
import "./index.css";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);


  const CountriesList = ({filteredResults, onShowInfo}) => {
    if (filteredResults.length > 5 && filter !== "") {
      return (
        <>
          <div>
            <p>Too many matches, add other words</p>
          </div>
        </>
      );
    } else if (filteredResults.length === 1) {
        const country = filteredResults[0];
        return (
          <div>
            <h2>{country.name}</h2>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area}</p>
            <br />
            <p>Languages: {country.languages}</p>
            <img src={country.flag} width="200px" height="150px" alt="Country flag"></img>
          </div>
        );
    } else {
      return (
        <div>
          <ul>
            {filteredResults.map(country => <li key={country.id}>{country.name}<button className='btn-show' onClick={() => onShowInfo(country)}>Show</button></li>)}
          </ul>
        </div>
      )
    }
  }
  

  const hook = () => {
    axios.get("http://localhost:3001/countries").then(response => {
      setCountries(response.data);
    });
  }

  useEffect(hook, []);

  
  const handleSearchCountries = (e) => {
    setFilter(e.target.value);
  }

  const handleShowInfo = (country) => {
    setSelectedCountry(country);
  }
  
  const filteredCountry = countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <>
      <SearchCountry filter={filter} handleSearchCountries={handleSearchCountries} />
      <br />
      {selectedCountry ? (
            <div>
              <h2>{selectedCountry.name}</h2>
              <p>Capital: {selectedCountry.capital}</p>
              <p>Area: {selectedCountry.area}</p>
              <p>Languages: {selectedCountry.languages}</p>
              <button onClick={() => setSelectedCountry(null)}>Back to list</button>
            </div>
        ) : (
          <CountriesList filteredResults={filteredCountry} onShowInfo={handleShowInfo} />
          )
      }
    </>
  );
}
export default App
