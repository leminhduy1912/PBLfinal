import React from 'react'
import { useState } from 'react'
import ReactTable from 'react-table';
import "./Stores.css"
function Stores() {
    const dataStores=[
        {
            nameStore:"Banh xeo co ba",
            addressStore:"50 Hoang Dieu",
            kindOfBussiness:"Kinh doanh thuc an",
            certificated:"WHO999",
            manager:"Nguyen Van Hieu",
            status:"Active"
        },
        {
            nameStore:"Banh xeo co hai",
            addressStore:"50 Hoang Dieu",
            kindOfBussiness:"Kinh doanh thuc an",
            certificated:"WHO999",
            manager:"Nguyen Van Hieu",
            status:"Pause"
        },
        {
            nameStore:"Banh xeo co nam",
            addressStore:"50 Hoang Dieu",
            kindOfBussiness:"Kinh doanh thuc an",
            certificated:"WHO999",
            manager:"Nguyen Van Hieu",
            status:"Active"
        },
        {
            nameStore:"Banh xeo co sau",
            addressStore:"50 Hoang Dieu",
            kindOfBussiness:"Kinh doanh thuc an",
            certificated:"WHO999",
            manager:"Nguyen Van Hieu",
            status:"Pause"
        },
        {
            nameStore:"Banh xeo co muoi",
            addressStore:"50 Hoang Dieu",
            kindOfBussiness:"Kinh doanh thuc an",
            certificated:"WHO999",
            manager:"Nguyen Van Hieu",
            status:"Active"
        }
    ]
    const [data,setData]= useState(dataStores);
    const columns = [
        {
            Header:'Name Store',
            accessor:'nameStore'
        },
        {
            Header:'Address Store',
            accessor:'addressStore'
        },
        {
            Header:'Kind Of Bussiness',
            accessor:'kindOfBussiness'
        },
        {
            Header:'Certificated',
            accessor:'certificated'
        },
        {
            Header:'Manager',
            accessor:'manager'
        },
        {
            Header:'Status',
            accessor:'status'
        },
        {
        Header:'Action',
            Cell:row=>(
                <button
                >Update</button>
        )}

    ]
    const getTdProps = (state, rowInfo, column) => {
          
        return {
          className: (rowInfo.original.status === 'Active') ? 'Active' : 'Pause', 
        };
      };
  return (
    <div className='Stores-container'>
     <div className='Stores-header'>
        <h1>Stores Infomation</h1>
        <button>Add Store</button>
     </div>
     <ReactTable
     getTdProps={getTdProps}
      data={data}
      columns={columns}
    defaultPageSize={5}
     />
    </div>
  )
}

export default Stores