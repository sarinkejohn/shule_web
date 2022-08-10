import React from "react";
import "./TeacherTalk.css";
import Footer from "../components/Footer";
import { useNavigate} from 'react-router-dom'

function TeacherActivity() {
  return (
    <div>
      <Header />
      <TalkWindow1 />
      <OnAir />
      <TalkWindow2 />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <nav className="nav">
      <div className="header--text">
        <h2> Entertainment..!</h2>
      </div>
    </nav>
  );
}

function TalkWindow1() {
  return (
    <div className="conteiner--TW1">
       <div className="card--conteiner">
       <div className="row">
        <div className="card1">
          <h3>Card 1</h3>
        </div>
      </div>

      <div class="row">
        <div className="card2">
          <h3>Card 2</h3>
        </div>
      </div>
       </div>
    </div>
  );
}

function OnAir() {
  let navigate = useNavigate();
  return (
    <div className="on-air" onClick={() => {navigate('/onair')}}>
      <div className="on-air--text">
        <h3>Educators on Air</h3>
        
      </div>

    </div>
  );
}

function TalkWindow2() {
  return (
    <div className="conteiner--TW2">
       <div className="card--conteiner">
       <div className="row11">
        <div className="card1">
          <h3>Card 1</h3>
        </div>
      </div>

      <div className="row22">
        <div className="card2">
          <h3>Card 2</h3>
        </div>
      </div>
       </div>
    </div>
  );
}


export default TeacherActivity;
