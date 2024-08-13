/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from'react-router-dom';

const Countries = ({ allCountries }) => {
  return (
    <div className='all-countries bg-main-color p-5'>

      {allCountries.map((country) => {
          return (
            <div key={country.name.common} className='shadow bg-elements text-start rounded-2 bg-elements'>
            <Link to={`/${country.name.common}`} className='text-decoration-none custom-text-white'>
            <img className='w-100 shadow rounded-top-2' src={country.flags.png} alt="" />
            <div className='p-5'>
              <h3>{country.name.common}</h3>
              <p className='mb-1'><b>Population:</b> {country.population.toLocaleString()}</p>
              <p className='mb-1'><b>Region:</b> {country.region}</p>
              <p className='mb-1'><b>Capital:</b> {country.capital}</p>
            </div>
            </Link>
      </div>
          )
      })}

    </div>
  )
}

export default Countries