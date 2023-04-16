import React from 'react'
import { FaTimes } from 'react-icons/fa'
import "./UpdatePLan.css"
function UpdatePlan(props) {
 const handleHideModalUpdatePlan=()=>{
  props.handleShowModalUpdatePlan(false)
 }
  return (

    <div className='UpdatePLan-container'>
        <div className="UpdatePlan-content">
            <h1>Update Plan</h1>
            <div className='x-icon'
            onClick={handleHideModalUpdatePlan}
            ><FaTimes />
            </div>
            <form action="">
               <label htmlFor="">Chọn thời gian:</label>
                <input type="date"  />
            </form>
            
            
            <button>Submit</button>

            </div>
    </div>
  )
}

export default UpdatePlan