import React from "react";
import "./cards.css";
import { useNavigate} from 'react-router-dom'

function Cards() {
  let navigate = useNavigate();
  return (
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
  );
}

export default Cards;
