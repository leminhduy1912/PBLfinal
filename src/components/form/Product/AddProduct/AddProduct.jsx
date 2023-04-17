import React from 'react'
import "./AddProduct.css"
import ClearIcon from '@mui/icons-material/Clear';
function AddProduct(props) {
    const handleHideModalAddProduct=()=>{
        props.handleShowModalAddProduct(false);
    }

  return (
    <div className="productAdd-container">
    <div className="productAdd-content">
      <h1>Add Product</h1>

      <div
        className="x-icon"
        onClick={handleHideModalAddProduct}
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

export default AddProduct