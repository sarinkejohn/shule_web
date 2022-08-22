import React from "react";
import "./TeacherActivity.css";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";
import { useNavigate,Link  } from "react-router-dom";
import { FaChevronRight   } from 'react-icons/fa';
import { FcSettings,FcFeedback,FcContacts,FcMoneyTransfer,FcSportsMode,FcSms,FcPrevious } from 'react-icons/fc';



function TeacherActivity() {

  return (
    <div>
      <Header />
      <ActivityWindow1 />
      <Polls />
      <ActivityWindow2 />
      <TeacherTalk />
      <Footer />
    </div>
  );
}

function Header({fixed}) {
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
    <nav className="nav--activity flex h-10 px-20 py-36 bg-#f8f1f1-800 mb-5 justify-cenetr align-center sticky shadow-blue-300">
       <Link to="/teacherpage">
      <div  className=" absolute left-2 top-4"> <FcPrevious size={35} />  </div>
      </Link>  
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
     <Link to="/profile" >
      <li className="bg-gray-200 hover:text-blue-800  hover:bg-gray-300 py-4 px-4 cursor-pointer">
        Profile
      </li>
      </Link>
      <Link to="/profile" >
      <li className="bg-gray-200 hover:text-blue-800 hover:bg-gray-300 py-4 px-4 cursor-pointer">
        Settings
      </li>
      </Link>
      <li onClick={handleLogout}  className="bg-gray-200 hover:text-blue-800  hover:bg-gray-300 py-4 px-4 cursor-pointer">
        Logout
      </li>
    </ul>
    
  </div>
      </div>
    </nav>
  );
}

function ActivityWindow1() {
  return (
    <div className="conteiner__activity--AW1">
      <div className="AW2__conteiner">
        <div className="row__activity">
          <div className="column__activity">
            <div className="card__activity transform  bg-gray-400  transition duration-700 hover:text-blue-500 hover:bg-gray-300">
              
              <div >
                <img src='../images/attendance.png' alt="attendance"/>
              </div>
              <h1 className="mt-8 font-semibold text-2xl hover:text-blue-600">Attendance</h1>
              
            </div>
            
          </div>

          <div className="column__activity">
            <div className="card__activity bg-gray-400  transition duration-700 hover:text-blue-500 hover:bg-gray-300">
              <img src='../images/homework.png' alt="homework"/>  
              <h1 className="mt-6 font-semibold text-2xl hover:text-blue-600">Home Work</h1>

            </div>
          </div>

          <div className="column__activity">
            <div className="card__activity bg-gray-400  transition duration-700 hover:text-blue-500 hover:bg-gray-300">
              
              <img src='../images/leave_apply.png' alt="leave"/>
              <h1 className="mt-7 font-semibold text-2xl hover:text-blue-600">Student Leave</h1>
            </div>
          </div>

          <div className="column__activity">
            <div className="card__activity bg-gray-400  transition duration-700 hover:text-blue-500 hover:bg-gray-300">
                <img src='../images/notification.png' alt="noticeboard"/>
                <h1 className="mt-7 font-semibold text-xl hover:text-blue-600">Notice Board</h1>
            </div>
          </div>

          <div className="column__activity">
            <div className="card__activity bg-gray-400  transition duration-700 hover:text-blue-500 hover:bg-gray-300">
                <img src='../images/schedule.png' alt="timetable"/>
                <h1 className="mt-7 px-2 font-semibold text-2xl hover:text-blue-600">Time Table</h1>
            </div>
          </div>

          <div className="column__activity">
            <div className="card__activity bg-gray-400 duration-300 hover:text-blue-500 hover:bg-gray-300">
              <div><FcSms size={100} className="mt-0"/></div>
              <h1 className="mt-8 font-semibold text-2xl hover:text-blue-600">FeedBack</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Polls() {
  let navigate = useNavigate();
  return (
    <div className="polls -mt-3 flex transition duration-700 hover:text-blue-500 hover:bg-gray-300">
      <div className="poll--text">
        <h3 className="mt-0 mb-2 text-3xl">Polls</h3>
        <p className="">Provide your Opinion</p>
      </div>
      <div
        className="poll--icon"
        onClick={() => {
          navigate("/thetalk");
        }}
      >
          <FaChevronRight size={35}/>
        
      </div>
    </div>
  );
}

function ActivityWindow2() {
  return (
    <div className="conteiner__activity--AW2 ">
      <div className="AW2__conteiner">
        <div className="row__activity">
          <div className="column__activity">
            <div className="card__activity bg-gray-400  transition duration-700 hover:text-blue-500 hover:bg-gray-300">
            <FcSportsMode size={100} className="mt-0" />
            <h1 className="mt-8 font-semibold text-2xl hover:text-blue-600">Events</h1>
            </div>
          </div>

          <div className="column__activity">
            <div className="card__activity bg-gray-400  transition duration-700 hover:text-blue-500 hover:bg-gray-300">
            <img src='../images/exam.png' alt="results"/>
            <h1 className="mt-8 font-semibold text-2xl hover:text-blue-600">Results</h1>
            </div>
          </div>

          <div className="column__activity">
            <div className="card__activity bg-gray-400  transition duration-700 hover:text-blue-500 hover:bg-gray-300">
            <FcMoneyTransfer size={100} className="mt-2" />
            <h1 className="mt-8 font-semibold text-2xl hover:text-blue-600">Fees</h1>
            </div>
          </div>

          <div className="column__activity">
            <div className="card__activity bg-gray-400  transition duration-700 hover:text-blue-500 hover:bg-gray-300">
            <FcContacts size={100} className="mt-0" />
            <h1 className="mt-8 font-semibold text-2xl hover:text-blue-600">Contacts</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function TeacherTalk() {
  let navigate = useNavigate();
  return (
    <div className="talk transition duration-700 hover:text-blue-500
     hover:bg-gray-700" onClick={() => {navigate("/onair")}}>
      <div className="talk--text ">
        <h3 className=" text-lg font-semibold hover:text-blue-500">The Teacher Talk</h3>
        <p>Listen to Mentors online....click Hire</p>
      </div>
    </div>
  );
}

export default TeacherActivity;
