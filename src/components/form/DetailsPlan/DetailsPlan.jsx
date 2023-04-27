import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import "./DetailsPlan.css"
import { FaTimes } from 'react-icons/fa';
function DetailsPlan(props) {

  return (
    <div className='details-plan-container'>
    <div className='details-plan-content'>
        <div className="details-plan-form">
        <h1>Details Plan</h1>
        <div 
        className="x-icon"
        onClick={()=>{
            props.handleShowMoDalDetailsPlan(false)
      }}
        >
            <FaTimes/>
          
        </div>
        <form action="">
            <div className='details-plan-infor'>

                <div className="form-group">

                <div className="label">
                <label  htmlFor="">Tên công ty</label>
                
                </div>

                <input className='form-control' type="text" placeholder='Tên công ty' />
                </div>
                

                <div className="form-group">
                <div className="label">    
                <label  htmlFor="">Thời gian</label>
                
                </div>
                <input className='form-control' type="datetime-local"  />
                </div>
                 
                 <div className="form-group">
                    <div className='label'>
                <label className='form-control' htmlFor="">Status</label>
                
                </div>
                <input className='form-control' type="text" placeholder='Status' />
                </div>

                <div className="form-group">  
                <div className="label">
                <label  htmlFor="">Mã số thuế</label>
               
                </div>
                <input className='form-control' type="text" placeholder='Mã số thuế' />
                </div>

                <div className="form-group">
                <div className="label">
                <label htmlFor="">Loại hinh kinh doanh</label>
                
                </div>
                <select name="" id="">
                    <option value="" selected disabled>--Loại hình kinh doanh--</option>
                    <option value="">Kinh doanh ăn uống</option>
                    <option value="">kinh doanh thực phẩm</option>
                </select>
                </div>

            </div>

            <div className="details-plan-infor inspector">

                <div className="form-group">   
                <div className="label">
                <label  htmlFor="">Tên thanh tra 1</label>
                
                </div>
                <div className="inspector-status">
                <input className='form-control' type="text" placeholder='Tên thanh tra 4' />
                <select name="" id="">
                <option value="">Active</option>
                <option value="">Inactive</option>
                </select>
                <button>Inactive</button>
                </div>
                </div>

                <div className="form-group">    
                <div className="label">
                <label  htmlFor="">Tên thanh tra 2</label>
                
                </div>
                <div className="inspector-status">
                <input className='form-control' type="text" placeholder='Tên thanh tra 4' />
                <select name="" id="">
                <option value="">Active</option>
                <option value="">Inactive</option>
                </select>
                <button>Inactive</button>
                </div>
                </div>

                <div className="form-group">
                <div className="label">    
                <label  htmlFor="">Tên thanh tra 3</label>
                
                </div>
                <div className="inspector-status">
                <input className='form-control' type="text" placeholder='Tên thanh tra 4' />
                <select name="" id="">
                <option value="">Active</option>
                <option value="">Inactive</option>
                </select>
                <button>Inactive</button>
                </div>
                </div>

                <div className="form-group"> 
                <div className='label'>  
                <label  htmlFor="">Tên thanh tra 4</label>
                </div>
                <div className="inspector-status">
                <input className='form-control' type="text" placeholder='Tên thanh tra 4' />
                <select name="" id="">
                <option value="">Active</option>
                <option value="">Inactive</option>
                </select>
                <button>Inactive</button>
                </div>
                </div>

                <div className="form-group"> 
                <div className="label">   
                <label  htmlFor="">Tên thanh tra 5</label>
                
                </div>
                <div className="inspector-status">
                <input className='form-control' type="text" placeholder='Tên thanh tra 4' />
                <select name="" id="">
                <option value="">Active</option>
                <option value="">Inactive</option>
                </select>
                <button>Inactive</button>
                </div>
                </div>

            </div>
        </form>

        
        <button>Submit</button>
        </div>
    </div>
</div>
  )
}

export default DetailsPlan