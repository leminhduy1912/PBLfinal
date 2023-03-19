import React, { useEffect, useState } from 'react'
import ReactTable from 'react-table'
import "react-table/react-table.css"  
import { fetchDataAcccount } from '../../../Data/Data'

const ManageAccount = () => {
    const [data,setData]= useState([])
    console.log(data);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setData(data))
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
  return (
    <div>
 <h1>Table</h1>
    
    <ReactTable
    columns={columns}
    data={data}
    defaultPageSize={14}
    />

</div>
  )
}

export default ManageAccount