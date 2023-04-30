// import React, { useState ,useEffect} from 'react'
import { UilCheckCircle, } from '@iconscout/react-unicons';
import "./ActionSuccess.css"
const ActionSuccess = (props) => {
console.log('re-render');
  return (
   <div className="action-success">
    <div className="icon">

    <UilCheckCircle/>
    </div>
    {/* <p>Thao Tác hoàn tất</p> */}
    <p>{props.messageAction}</p>

   </div>
  )
}

export default ActionSuccess