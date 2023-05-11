import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import "./UpdatePLan.css"
import { ConvertTimestampToDate } from '../../../utils/ConvertTimestampToDate'
import { ConvertToTimeStamp } from '../../../utils/ConvertToTimestamp'
import { useEditTimePlan } from '../../../hooks/Plan/useEditTimePlan'
function UpdatePlan(props) {

const [timePlan,setTimePlan]= useState(props.time)
 const {successEditTimePlan,messageEditTimePlan,errorEditTimePlan,executeEditTimePlan}= useEditTimePlan()
// let date= ConvertTimestampToDate(props.time);
// console.log("date",date);
const handleEditTimePlan=async(e)=>{
e.preventDefault();
await executeEditTimePlan(timePlan,props.planId)
await props.handleShowModalUpdatePlan(false)
await props.fetchDataPlans()
}
// console.log(ConvertTimestampToDate(1684324920000));
  return (

    <div className='UpdatePLan-container'>
        <div className="UpdatePlan-content">
            <h1>Update Plan</h1>
            <div className='x-icon'
            
            >
              <FaTimes 
              onClick={()=>{props.handleShowModalUpdatePlan(false)}}
              />
            </div>
            <form action="">
               <label htmlFor="Chọn thời gian:">Chọn thời gian:</label>
                <input 
                type="datetime-local"  
               
                onChange={(e)=>{setTimePlan(ConvertToTimeStamp(e.target.value))}}
                />
            </form>
            
            
            <button
            onClick={
              handleEditTimePlan
            }
            >
            Submit</button>

            </div>
    </div>
  )
}

export default UpdatePlan