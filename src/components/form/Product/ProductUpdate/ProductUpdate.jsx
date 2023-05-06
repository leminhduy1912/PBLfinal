import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import "./ProductUpdate.css"
function DetailsProduct(props) {

  return (
    <div className="productUpdate-container">
    <div className="productUpdate-content">
      <h1>Update Product</h1>

      <div
        className="x-icon"
        
      >
       <ClearIcon
       onClick={()=>{props.handleShowMoDalUpdateProduct(false)}}
       />
      </div>

      <form action="">
        <div className="form-group">
          <label className="form-input-control">Product Name</label>
          <input
            className="form-input-control"
            type="text"
            placeholder="Product Name"
          />
        </div>
        <div className="form-group">
          <label className="form-input-control">Company Name</label>
          <input
            className="form-input-control"
            type="text"
            placeholder="Company Name"
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

      <button>Submit</button>
    </div>
  </div>
  )
}

export default DetailsProduct