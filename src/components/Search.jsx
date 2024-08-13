/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Dropdown from './Dropdown'
// eslint-disable-next-line no-unused-vars
import { BiSearchAlt2 } from "react-icons/bi"; 

const Search = ({filterByRegion, filterBySearch}) => {
  return (
    <div className='px-5 py-5 d-flex bg-main-color custom-text-white align-items-center justify-content-between'>
        <form action="" className='position-relative '>
            <BiSearchAlt2 className='fs-2 position-absolute search-icon ms-5' />
            <input onChange={(event) => {
              filterBySearch(event.target.value.toLowerCase());
            }}  className='w-lg-100 border-0 shadow py-3 rounded-2 bg-elements  custom-text-white' type="text" placeholder='Search for a country...'  />
        </form>
        <Dropdown filterByRegion={filterByRegion} />
    </div>
  )
}

export default Search