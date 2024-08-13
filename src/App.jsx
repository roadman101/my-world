import './App.css';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import CountryDetail from './pages/CountryDetail';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

function App() {

// eslint-disable-next-line no-unused-vars
const [allCountries, setAllCountries] = useState([]);
const [filteredCountries, setFilteredCountries] = useState([]);

const [isLoading, setIsLoading] = useState(true);

useEffect(() => {

  //  ============ FETCHING API ===================
  const getData = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    setAllCountries(data);
    setIsLoading(false);
  };

  setTimeout(() => {
    getData();
  }, 3000)
}, [])

// ============ FILTER BY REGION ============
  const filterByRegion = (region) => {
    const selectedRegion = allCountries.filter((eachCountry) => {
      return eachCountry.region === region;
    });

    console.log(selectedRegion);
    

    setFilteredCountries(selectedRegion);
  }; 





// ============ FILTER BY SEARCH ============
  const filterBySearch = (input) => {
    const searchedCountry = allCountries.filter((country) => {
      return country.name.common.toLowerCase().includes(input);
    });

    // console.log(searchedCountry);
    
    setFilteredCountries(searchedCountry);
  };



  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage allCountries={filteredCountries.length > 0 ? filteredCountries : allCountries}
            filterByRegion = {filterByRegion}
            filterBySearch = {filterBySearch}
            isLoading = {isLoading}
          />}
          
          />
          <Route path='/:countryName/' element={<CountryDetail/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
