import { AnimateSharedLayout } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ReactTable from 'react-table'
import "react-table/react-table.css"  
import { fetchDataAcccount } from '../../../Data/Data'
import Loading from '../../Loading/Loading'
import AccountUpdate from './AccountUpdate/AccountUpdate'
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
if (getDataSuccess===false){
    return (
      <Loading/>  
    )}
    else{
    return(

      
    

   
          <div>
            <h1>Table</h1>
            <ReactTable
              columns={columns}
              data={data}
              defaultPageSize={14}
            />
          </div>
      
        
    )}
}

export default ManageAccount