import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ReactTable from 'react-table'
import "react-table/react-table.css"  
import { fetchDataAcccount } from '../../../Data/Data'
import Loading from '../../Loading/Loading'

const ManageAccount = () => {
    const navigate = useNavigate()
    const [data,setData]= useState([]) 
    const [getDataSuccess,setGetDataSucceess] =useState(false)
  useEffect(()=>{
    
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>{
        setData(data)
        setGetDataSucceess(true)
    })
  },[])
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
                <button>Details</button>
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