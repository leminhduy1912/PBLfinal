import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import "./DetailsPlan.css"
function DetailsPlan(props) {
  const hanldeHideModalDetailsPlan=()=>{
  props.handleShowMoDalDetailsPlan(false)
  }
  return (
    <div className="detailsPlan-container">
    <div className="detailsPlan-content">
     <div className="detailsPlan-header">
       <h1>Details Plan</h1>
       <div 
       className="x-icon"
       onClick={hanldeHideModalDetailsPlan}
       >
        
        <ClearIcon/>
       </div>
     </div>
      <form action="">

        <div className="form-group">
          <label htmlFor="">Tên cửa hàng: </label>
          <input type="text" placeholder='Tên cửa hàng'/>
        </div>

        <div className="form-group">
          <label htmlFor="">Chọn thời gian:</label>
          <input type="date" />
        </div>

      </form>

    </div>
  </div>
  )
}

export default DetailsPlan