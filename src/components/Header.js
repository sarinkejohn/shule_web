import { React, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./hero.css";
import "./cards.css";
import { FcSettings } from "react-icons/fc";

function Header({ fixed }) {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

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
    <div >
      <nav className=" nav__activity ">
        <div className=" absolute left-2 top-4">
          {" "}
          {/* <FcPrevious size={35} />{" "} */}
          <p className="text-sm"> welcome Mwl.{user && user?.email}</p>
        </div>
        <div className="header__activity--text ">
          <h2>Msasani primary school</h2>
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
    <Link to="/profile" >
      <li className="bg-gray-200 hover:text-blue-800  hover:bg-gray-300 py-4 px-4 cursor-pointer">
        Profile
      </li>
      </Link> 
      <li className="bg-gray-200 hover:text-blue-800 hover:bg-gray-300 py-4 px-4 cursor-pointer">
        Settings
      </li>
      <li  onClick={handleLogout} className="bg-gray-200 hover:text-blue-800  hover:bg-gray-300 py-4 px-4 cursor-pointer" onClick={handleLogout}>
        Logout
      </li>

    </ul>
          
        </div>
        </div>
     

    


      </nav>

      <div>
        {/* hero section */}

        <section className="hero ">
          <div className="container border-2">
            <img src="../images/photo-grid.png" alt="hero pictures" />
            <button className="btn">Add Student</button>
          </div>
        </section>

        {/* Card section */}
        <section>
          <div className="card--row">
            <div className="cards--column">
              <div className="card--card border-2">
                <h2>Card xx</h2>
                <p>Some text</p>
                <p>Some text</p>
                <button className="btn">Parent Register</button>
              </div>
            </div>
            <div className="cards--column">
              <div className="card--card2 border-2">
                <h1 className="card--card2--header">Online StaffRoom Chat</h1>
                <p className="card--card2--text">
                  Join unique interactive activities led by one-of-a-kind
                  hosts—all without leaving home On-Air.
                </p>
              </div>
            </div>
            <div className="cards--column">
              <div className="card--card border-2">
                <h2>Card 1</h2>
                <p>Some text</p>
                <p>Some text</p>
                <button
                  className="btn"
                  onClick={() => {
                    navigate("/activity");
                  }}
                >
                  activities
                </button>
              </div>
            </div>
            <div className="cards--column">
              <div className="card--card border-2">
                <h2>Card 1</h2>
                <p>Some text</p>
                <p>Some text</p>
                <button className="btn">Parent Register</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Header;
