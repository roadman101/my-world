/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { RiArrowDropDownLine } from "react-icons/ri";


const Dropdown = ({filterByRegion}) => {

  const [toggleDropdown, setToggleDropdown] = useState(false);

  const [options, setOptions] = useState([
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
    "...",
  ])

  const [selectedRegion, setSelectedRegion] = useState("Filter by Region");

  return (
    <div onClick={() => {
      setToggleDropdown(!toggleDropdown);
    }}  className='dropdown position-relative'>
        <div className='dropdown-display d-flex align-items-center bg-elements gap-4 shadow p-3'>
            <p className='m-0'>{selectedRegion}</p>
            <RiArrowDropDownLine style={{
              transform: toggleDropdown ? "rotate(180deg)" : "rotate(0deg)",
              transition: "0.3s ease-in-out",
            }} />
        </div>
       {toggleDropdown && (
         <ul className='dropdown-options list-unstyled position-absolute bg-elements mt-2 py-3 px-0 rounded-2'>
          {options.map((option) => {
            return <li onClick={() => {
              setSelectedRegion(option === "..." ? "Filter by Region" : option);
              setToggleDropdown(false);
              filterByRegion(option);
              // Add navigation logic here
            }}
            key={option}
            >{option}</li>
          })}
         {/* <li>America</li>
         <li>Asia</li>
         <li>Europe</li>
         <li>Oceania</li> */}
     </ul>
       )}
    </div>
  )
}

export default Dropdown