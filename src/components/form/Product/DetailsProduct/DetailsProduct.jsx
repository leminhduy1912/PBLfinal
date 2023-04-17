import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import "./DetailsProduct.css"
function DetailsProduct(props) {
  const hanldeHideModalDetailsProduct=()=>{
    // props.hanldeShowModalDetailsPlan(false)
    props.handleShowMoDalDetailsProduct(false)
 
  }
  return (
    <div className="productDetails-container">
    <div className="productDetails-content">
      <h1>Details Product</h1>

      <div
        className="x-icon"
        onClick={hanldeHideModalDetailsProduct}
      >
       <ClearIcon/>
      </div>

      <form action="">
        <div className="form-group">
          <label className="form-input-control">Product Name</label>
          <input
            className="form-input-control"
            type="text"
            placeholder="Product Name"
            disabled
          />
        </div>
        <div className="form-group">
          <label className="form-input-control">Company Name</label>
          <input
            className="form-input-control"
            type="text"
            placeholder="Company Name"
            disabled
          />
        </div>
        <div className="form-group">
          <label className="form-input-control">Status</label>
          <select name="" id="">
            <option value="" disabled selected>--Status--</option>
            <option value="">Active</option>
            <option value="">Inactive</option>
          </select>
        </div>
        

      </form>

      {/* <button>Submit</button> */}
    </div>
  </div>
  )
}

export default DetailsProduct