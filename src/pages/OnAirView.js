import React from 'react'
import { useLocation, useParams } from 'react-router-dom';

function OnAirView() {
    const location = useLocation();
    const { email } = useParams();
    const data = location.state;
console.log(email);
  return (
    <div>

            <div>Email Recaived { email } From here you can fetch user by email</div>



    </div>
  )
}

export default OnAirView
