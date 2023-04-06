import React from 'react'
import { FaTimes } from 'react-icons/fa'
import "./UpdatePLan.css"
function UpdatePlan() {
  return (

    <div className='UpdatePLan-container'>
        <div className="UpdatePlan-content">
            <h1>Update Plan</h1>
            <div className='x-icon'

            ><FaTimes />
            </div>
            <form action="">
                <label htmlFor="">Chon thoi gian</label>
                <input type="datetime-local"  />
            </form>
            </div>
    </div>
  )
}

export default UpdatePlan