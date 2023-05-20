import React, { useContext, useEffect, useState } from 'react';
import "./Information.css";
import { useGetOneUserById } from '../../../hooks/User/useGetOneUserById';
import { StoreContext } from '~store';
import { useUpdateUser } from '../../../hooks/User/useUpdateUser';

function Information() {
  const [state] = useContext(StoreContext);
  const  {success,message,error,loading,execute}= useUpdateUser()
  const { dataGetOneUserById, successGetOneUserById, errorGetOneUserById, executeGetOneUserById } = useGetOneUserById();
  const [dataInformation, setDataInformation] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
 
  useEffect(() => {
    executeGetOneUserById(state.id, state.id, state.token);
  }, []);

  useEffect(() => {
    if (successGetOneUserById) {
      setDataInformation(dataGetOneUserById);
      setIsLoaded(true);
      
    }
  }, [dataGetOneUserById, successGetOneUserById]);
  const [btnDisable,setBtnDisable]= useState(true)
  const [updateForm,setUpdateForm]= useState({})
  const handleUpdateInformation=async(e)=>{
    e.preventDefault()
    await execute(updateForm,state.id,state.id,state.token)
    console.log("update form",updateForm);
  }
console.log(state.role);
  return (
    <>
      {isLoaded && (state.role === "Admin" || state.role === "Moderator") && (
        <div className='Information-container'>
          <h1>Information Account</h1>
          <div className="Information-content">
            <form action="">
              <div className="Information-group">
                <div className="form-group">
                  <label htmlFor="Tên đầy đủ:">Tên đầy đủ:</label>
                  <input
                    type="text"
                    placeholder='Tên đầy đủ'
                    value={dataInformation.fullName}
                    onChange={(e)=>
                    {setDataInformation({...dataInformation,fullName:e.target.value}),
                    setBtnDisable(false),
                    setUpdateForm({...updateForm,fullName:e.target.value})}}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="Email">Email</label>
                  <input 
                  type="text" 
                  placeholder='Email' 
                  value={dataInformation.email}
                  onChange={(e)=>
                    {setDataInformation({...dataInformation,email:e.target.value}),
                    setBtnDisable(false),
                    setUpdateForm({...updateForm,email:e.target.value})}}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="Số CMND/CCCD">Số CMND/CCCD</label>
                  <input 
                  type="text" 
                  placeholder='Số CMND/CCCD'
                  value={dataInformation.nationalId}
                  onChange={(e)=>
                    {setDataInformation({...dataInformation,nationalId:e.target.value}),
                    setBtnDisable(false),
                    setUpdateForm({...updateForm,nationalId:e.target.value})}}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="Số Điện thoại">Số Điện thoại</label>
                  <input 
                  type="text" 
                  placeholder='Số Điện thoại'
                  value={dataInformation.phoneNumber}
                  onChange={(e)=>
                    {setDataInformation({...dataInformation,phoneNumber:e.target.value}),
                    setBtnDisable(false),
                    setUpdateForm({...updateForm,phoneNumber:e.target.value})}}
                  />
                </div>

              
              </div>

              <div className="Information-group">
                <div className="form-group">
                  <label htmlFor="Fax Number">Fax Number</label>
                  <input 
                  type="text" 
                  placeholder='Fax Number'
                  value={dataInformation.faxNumber}
                  onChange={(e)=>
                    {setDataInformation({...dataInformation,faxNumber:e.target.value}),
                    setBtnDisable(false),
                    setUpdateForm({...updateForm,faxNumber:e.target.value})}}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="Chức vụ">Chức vụ</label>
                  <select disabled name="" id="" value={dataInformation.role.roleId}>
                    <option  value={2}>Thanh Tra</option>

                  </select>
                </div>

              
              </div>
            </form>
            <button 
            disabled={btnDisable}
            onClick={handleUpdateInformation}
            >Cập nhật</button>
          </div>
        </div>
      )}

      {isLoaded && state.role === "Store" && (
          <div className='Information-container'>
          <h1>Information Account</h1>
          <div className="Information-content">
            <form action="">
              <div className="Information-group">
                <div className="form-group">
                  <label htmlFor="Tên đầy đủ:"> Tên cửa hàng</label>
                  <input
                    type="text"
                    placeholder='Tên cửa hàng'
                    value={dataInformation.companyName}
                    onChange={(e)=>
                    {setDataInformation({...dataInformation,companyName:e.target.value}),
                    setBtnDisable(false),
                    setUpdateForm({...updateForm,companyName:e.target.value})}}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="Email">Email</label>
                  <input 
                  type="text" 
                  placeholder='Email' 
                  value={dataInformation.email}
                  onChange={(e)=>
                    {setDataInformation({...dataInformation,email:e.target.value}),
                    setBtnDisable(false),
                    setUpdateForm({...updateForm,email:e.target.value})}}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="Số CMND/CCCD">Số CMND/CCCD</label>
                  <input 
                  type="text" 
                  placeholder='Số CMND/CCCD'
                  value={dataInformation.nationalId}
                  onChange={(e)=>
                    {setDataInformation({...dataInformation,nationalId:e.target.value}),
                    setBtnDisable(false),
                    setUpdateForm({...updateForm,nationalId:e.target.value})}}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="Số Điện thoại">Số Điện thoại</label>
                  <input 
                  type="text" 
                  placeholder='Số Điện thoại'
                  value={dataInformation.nationalId}
                  onChange={(e)=>
                    {setDataInformation({...dataInformation,phoneNumber:e.target.value}),
                    setBtnDisable(false),
                    setUpdateForm({...updateForm,phoneNumber:e.target.value})}}
                  />
                </div>

              
              </div>

              <div className="Information-group">
                <div className="form-group">
                  <label htmlFor="Fax Number">Fax Number</label>
                  <input 
                  type="text" 
                  placeholder='Fax Number'
                  value={dataInformation.faxNumber}
                  onChange={(e)=>
                    {setDataInformation({...dataInformation,faxNumber:e.target.value}),
                    setBtnDisable(false),
                    setUpdateForm({...updateForm,faxNumber:e.target.value})}}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="Chức vụ">Chức vụ</label>
                  <select disabled name="" id="" value={dataInformation.role.roleId}>
                    <option  value={2}>Thanh Tra</option>

                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="">Mật khẩu</label>
                  <input type="text" placeholder='Mật khẩu' />
                </div>
              </div>
            </form>
            <button disabled={btnDisable}>Cập nhật</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Information;
