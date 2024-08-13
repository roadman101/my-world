/* eslint-disable react/jsx-no-duplicate-props */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import {  BsMoon, BsMoonFill  } from "react-icons/bs";
import { Link } from 'react-router-dom';


const NavBar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem('darkMode')) || false;
  });

  if (darkMode) {
    document.body.classList.remove("light-mode");
  } else {
    document.body.classList.add("light-mode");
  }

  const icon = darkMode ? <BsMoonFill /> : <BsMoon />;

  return (
    <nav className='d-flex bg-elements custom-text-white justify-content-between align-items-center shadow p-5'>
        <Link to="/" className='text-decoration-none custom-text-white fs-2 fw-semibold' >Where in the world?</Link>
        <div style={{}} onClick={() => {
          document.body.classList.toggle("light-mode");
          setDarkMode(!darkMode);
          if (document.body.classList.contains("light-mode")) {
            localStorage.setItem("dark-mode", JSON.stringify(false));
          }  else {
            localStorage.setItem("dark-mode", JSON.stringify(false));
          }
        }} className='d-flex align-items-center gap-2' style={{ cursor: "pointer" }}>
            {icon}
            <p className='m-0'>{darkMode ? "Dark Mode" : "Light Mode"}</p>
        </div>
    </nav>
  )
}

export default NavBar