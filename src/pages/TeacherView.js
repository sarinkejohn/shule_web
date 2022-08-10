import React from "react";
import "./TeacherView.css";

// const API ='AIzaSyA3zPwdG3oEguS56zMgTqQAU-HRmSbFknU'
// const ChannelID ='UCg_GB9WS6YKHilQZIJEC4kg'
// const result =10;


// var finalURL= `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${ChannelID}&maxResults=${result}&order=date&key=${API}`

function TeacherActivity() {
  return (
    <div>
      
      <Header />
      <CardView />
    </div>
  );
}


function Header() {
  return (
    <nav className="nav">

      <div className="view">
      console.log(finalURL);
        {/* <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/Q-op2TCAOf8"
          title="YouTube video player"

          frameBorder="0"
          allow="accelerometer; 
          autoplay; 
          clipboard-write; 
          encrypted-media; 
          gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe> */}
      </div>

    </nav>
  );
}

function CardView() {
  return (
    <div className="card-view">
      <div className="row">
        <div className="column">
          <div className="card">
            <h3>Card 1</h3>
            <div className="btn__view">
        <button> Get More Videos</button>
      </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <h3>Card 1</h3>
            <p>Some text</p>
            <p>Some text</p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <h3>Card 1</h3>
            <p>Some text</p>
            <p>Some text</p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <h3>Card 1</h3>
            <p>Some text</p>
            <p>Some text</p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <h3>Card 1</h3>
            <p>Some text</p>
            <p>Some text</p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <h3>Card 1</h3>
            <p>Some text</p>
            <p>Some text</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherActivity;
