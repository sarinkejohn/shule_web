import { React, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import './hero.css'
import './cards.css'


function Header({ fixed }) {
  const [navbar, setNavbar] = useState(false);
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
    <div >
         <nav className="w-full bg-purple-800 shadow mb-2px sticky top-0 z-50">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                      
                           <div className="flex-1"> <h2 className="  text-2xl font-bold text-white ">LOGO weweeeeeeeeeeeeeeeee</h2></div>
                           
                            
                      
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >


              <div className="mt-3 space-y-2 lg:hidden md:inline-block">
               

                <a
                  href=""
                  className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                >
                 Update Profile
                </a>

                <button 
                  onClick={handleLogout}
                  className="inline-block w-full px-4 py-2 text-center text-white bg-white-600 rounded-md shadow hover:bg-gray-800"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
          <div className="hidden  space-x-2 md:inline-block">
            <a
              href=""
              className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-purple-300"
            >
              Profile
            </a>
            <button
             onClick={handleLogout}
              className="px-4 py-2 text-white-800 bg-white rounded-md shadow hover:bg-purple-300"
               >
              Log Out
            </button>
          </div>
        </div>
      </nav>

      <div>
      {/* hero section */}

      <section className='hero'>
            <div className="container">
                  <img src="../images/photo-grid.png" alt="hero pictures" />
                  <button className="btn">Add Student</button>
                </div>
       
    </section>


    {/* Card section */}
    <section>
      <div className="card--row">
        <div className="cards--column">
          <div className="card--card">
            <h2>Card xx</h2>
            <p>Some text</p>
            <p>Some text</p>
            <button className="btn">Parent Register</button>
          </div>
        </div>
        <div className="cards--column">
          <div className="card--card2">
            <h1 className="card--card2--header">Online StaffRoom Chat</h1>
            <p className="card--card2--text">
              Join unique interactive activities led by one-of-a-kind hosts—all
              without leaving home On-Air.
            </p>
            
          </div>
        </div>
        <div className="cards--column">
          <div className="card--card">
            <h2>Card 1</h2>
            <p>Some text</p>
            <p>Some text</p>
            <button className="btn" onClick={() => {navigate("/activity")}}>activities</button>
          </div>
        </div>
        <div className="cards--column">
          <div className="card--card">
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
    // <nav className='nav'>
    //  <p>Welcome Teacher: {user && user.email}</p>
    //     <h2> shule web </h2>

    //     <button onClick={handleLogout} className='border px-6 py-2 my-4'>
    //     Logout
    //   </button>

    // </nav>
    
  );
}

export default Header;
