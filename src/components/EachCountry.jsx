/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';



const EachCountry = ({ country }) => {
const navigate = useNavigate()

const borders = country.borders ? country.borders.map((border) => {
  return <p className='border px-4 py-1 rounded-1'>{border}</p>;
}): "No Border for this Country";

const nativeName = country.name?.nativeName ? Object.values(country.name.nativeName)[0].official : "No Native Name for this Country";

const languages = country?.languages ? Object.values(country.languages).join(", ") : "No Languages for this Country";

const currencies = country?.currencies ? Object.values(country.currencies)[0].symbol : "No Currency Spent";

  return (
    <div className='text-start p-5 bg-main-color custom-text-white each-country'>
        <div onClick={() => {
          navigate(-1)
        }} style={{cursor: "pointer"}} className='shadow d-flex gap-3 align-items-center px-4 py-2 rounded-2 back-btn mb-5'>
          <BsArrowLeft />
          <p className='m-0'>Back</p>
        </div>

        <div className='d-flex inner-each'>
          <img className='w-lg-50 w-100 me-5 shadow' src={country.flags?.png} alt="" />
          <div className='ms-lg-5 d-flex flex-column gap-4 inner-content'>
              <h2>{country.name?.common}</h2>

              <div className='d-flex align-items-start twodi gap-5 mb-5'>
                <div className='me-5'>
                  <p className='mb-1'><b className=''>Native Name:</b> {nativeName}</p>
                  <p className='mb-1'><b className=''>Population:</b>{country.population?.toLocaleString()}</p>
                  <p className='mb-1'><b>Region:</b>{country?.region}</p>
                  <p className='mb-1'><b>Sub Region:</b>{country?.subregion}</p>
                  <p className='mb-1'><b>Capital:</b>{country?.capital}</p>
                </div>
                <div>
                  <p><b>Top Level Domain:</b>{country?.tld}</p>
                  <p><b>Currencies:</b>{currencies}</p>
                  <p><b>Languages:</b>{languages}</p>
                </div>
              </div>

              <div className=''>
                <p><b>Border Countries:</b></p>
                <div className='d-flex gap-3'>
                  {borders}
                </div>
              </div>
          </div>
        </div>

    </div>
  )
}

export default EachCountry