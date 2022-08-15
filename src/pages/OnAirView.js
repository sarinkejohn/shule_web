import React from 'react'
import {useLocation, useParams} from 'react-router-dom';


function OnAirView() {
    const location = useLocation();
    const data = location.state;
    const { email } = useParams();


console.log(data);
  return (
    <div>

<div>Email received { email } from params</div>
        <p> Now you can call get user by email </p>



    </div>
  )
}

export default OnAirView