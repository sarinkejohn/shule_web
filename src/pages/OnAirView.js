import React from 'react'
import {useLocation} from 'react-router-dom';

function OnAirView() {
    const location = useLocation();
    const data = location.state;
console.log(data);
  return (
    <div>

            <div>viewssssssssss</div>



    </div>
  )
}

export default OnAirView