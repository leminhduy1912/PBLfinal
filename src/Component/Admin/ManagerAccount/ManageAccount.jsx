import { AnimateSharedLayout } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ReactTable from 'react-table'
import "react-table/react-table.css"  
import { fetchDataAcccount } from '../../../Data/Data'
import Loading from '../../Loading/Loading'
import AccountUpdate from './AccountUpdate/AccountUpdate'
import "./ManageAccount.css"
const ManageAccount = () => {
 
    const [data,setData]= useState([]) 
    const [getDataSuccess,setGetDataSucceess] =useState(true)
    const navigate= useNavigate();
  useEffect(()=>{
    
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>{
        setData(data)
        setGetDataSucceess(true)
    })
  },[])
  const handleUpdateAccount=(row)=>{
  navigate('/admin/accountUpdate')

  }
    const columns= [
        {
            Header:'Username',
            accessor:'username'
        },
        {
            Header:'Fullname',
            accessor:'name'
        },
        {
            Header:'Email',
            accessor:'email'
        },
        {
            Header:'Phone Number',
            accessor:'phone'
        },
        {
            Header:'Address',
            accessor:'address.city'
        },
        {
            Header:'Action',
            Cell:row=>(
                <button
                onClick={()=>handleUpdateAccount(row)}
                >Update</button>
            )
        }
    ]
    const pageSizeOptions = [5, 10]; 
if (getDataSuccess===false){
    return (
      <Loading/>  
    )}
    else{
    return(
          <div className='ManageAccount'>
            <div className='ManageAccount-header'>
            <h1>Account Management</h1>
            <button>Add Account</button>
            </div>
            <ReactTable
              columns={columns}
              data={data}
              defaultPageSize={10}
              pageSizeOptions={pageSizeOptions}
            />
          </div>
    )}
}

export default ManageAccount