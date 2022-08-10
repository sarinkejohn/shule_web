import { React, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import {  Link, useNavigate } from "react-router-dom";
import { FcSettings,FcPrevious } from 'react-icons/fc';



function HeaderDynamic() {
  const navigate = useNavigate();
  const { user, logout } = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div>
    <nav className="nav--activity flex h-10 px-20 py-36 bg-#f8f1f1-800 mb-5 justify-cenetr align-center sticky shadow-blue-300">
      <div className=" absolute left-2 top-4">  <FcPrevious size={35} /> </div>
      <div className="header__activity--text ">
         
        <h2>Activities Window</h2>
      </div>
      <div className="header__activity--icon">
      <div className="group relative text-2xl">
    
    <button className="bg-#f8f1f1-300  text-gray-700  py-2 px-7 rounded inline-flex items-center group">
      <span className="mr-1"><FcSettings size={30} /> </span>
      <svg
        className="fill-current h-4 w-4 group-hover:rotate-180 hover:text-blue-500 transition-transform"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
      </svg>
    </button>
    
    {/* menu list */}
    <ul className="rounded absolute hidden text-gray-700 pt-1 group-hover:block w-56">
      <li className="bg-gray-200 hover:text-blue-800  hover:bg-gray-300 py-4 px-4 cursor-pointer">
       <Link to="/profle"> Profile</Link> 
      </li>
      <li className="bg-gray-200 hover:text-blue-800 hover:bg-gray-300 py-4 px-4 cursor-pointer">
        <Link t0="/profile">Settings</Link> 
      </li>
      <li  onClick={handleLogout} className="bg-gray-200 hover:text-blue-800  hover:bg-gray-300 py-4 px-4 cursor-pointer">
        Logout
      </li>
    </ul>
    
  </div>
        
        
      
      </div>
    </nav>

    </div>
  )
}

export default HeaderDynamic