import React from 'react'
import "./Comment.css"
function Comment() {
  return (
    <div className='comment-form-container'>
       <div className="comment-form-content">
        <h1>Đóng góp ý kiến </h1>
        <form action="">
        <div className="form-group">
            <label htmlFor="">Nội dung : </label>
          <input type="text" placeholder='Nhập nội dung cần đóng góp' />
          </div>

          <div className="form-group">
            <label htmlFor="">Tên cửa hàng : </label>
          <input type="text" placeholder='Nhập tên cửa hàng' />
          </div>
          <div className="form-group">
            <label htmlFor="">Nhập địa chỉ cửa hàng: </label>
          <input type="text" placeholder='Nhập địa chỉ' />
          </div>
        </form>
        <button>
            Submit
        </button>
       </div>
    </div>
  )
}

export default Comment