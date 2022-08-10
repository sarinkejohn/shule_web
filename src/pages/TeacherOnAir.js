import React from "react";
import "./TeacherOnAir.css";
import { useState, useEffect } from "react";



function TeacherActivity() {

  const[videoData, setVideoData] = useState([]);

  useEffect( () => {
    // const youtubeData = async () => {
    //   const res = await fetch('') 
    //   const data = await res.json()
      

    //  https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCg_GB9WS6YKHilQZIJEC4kg&maxResults=2&order=date&key=AIzaSyA3zPwdG3oEguS56zMgTqQAU-HRmSbFknU
    
    // }
  
   loadYoutubeData()
  
  },[])
 

  const loadYoutubeData = async () => {
   await fetch("https://jsonplaceholder.typicode.com/todos/")
    .then(res => {
      if(res.ok){
        return res.json()
      }
      throw res;
    })

    .then(videoData => setVideoData(videoData))
  }
  
  const data = videoData
  const listItems = data.map((data) => <li key={data.id}>{data.title}</li>)

  return (
    <div>
    {/* <nav className="nav">
    <div className="onair">
      <h2> Entertainment..!</h2>
    </div>
    </nav> */}
     
    <div className="row">
      <div className="column">
        
        <div class="card__onair">
        {/* <img
          src={`../images/${props.img}`}
          className="card--image"
          alt="YT"
        /> */}
          <h3>{listItems}</h3>
          <p>Some text</p>
          <p>Some</p>
        </div>
      </div>
    </div>
    </div>
 
      
  );
}

export default TeacherActivity;

    
