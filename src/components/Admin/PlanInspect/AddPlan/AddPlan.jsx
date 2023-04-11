
import "./AddPlan.css"
import { FaTimes } from "react-icons/fa"
function AddPlan({statusHideModalAddPlan}) {
  const data=["Banh xeo co ba ","Banh canh co tu","Banh mi Ba Hung","Tap hoa Co thuy","VinMart"]
  const handleHideModalAddPlan=()=>{
    statusHideModalAddPlan(false)
  }
  return (
    <div className="AddPlan-container">
      <div className="AddPlan-content">
        <h1>Add Plan</h1>
        <div className='x-icon'
onClick={handleHideModalAddPlan}
  ><FaTimes />
  </div>
        <form action="">

          <div className="form-group">
            <label htmlFor="">Chọn cửa hàng : </label>
          <select name="" id="">
            <option value="" disabled selected>--Store--</option>
             {data.map((item)=>{
              return(
              <option value="">{item}</option>)
             })}
          </select>
          </div>

          <div className="form-group">
            <label htmlFor="">Chọn thời gian :</label>
            <input type="date" />
          </div>

        </form>
        <button>Submit</button>
      </div>
    </div>
  )
}

export default AddPlan