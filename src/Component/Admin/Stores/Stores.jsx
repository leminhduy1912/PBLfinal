import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
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
        },
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
        },
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
    const navigate=useNavigate();
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
                onClick={()=>{
                    navigate("/admin/storesUpdate")
                }}
                >Update</button>
        )}

    ]
    const pageSizeOptions=[5,10]
    const getTdProps = (state, rowInfo, column) => {
          if (!rowInfo){
            return{}
          }
        return {
          className: (rowInfo.original.status === 'Active') ? 'Active' : 'Pause', 
        };
      };
      
  return (
    <div className='Stores-container'>
     <div className='Stores-header'>
        <h1>Stores Infomation</h1>
        <button
        onClick={()=>{
           navigate('/admin/addStore')
        }}
        >Add Store</button>
     </div>
     <ReactTable
     getTdProps={getTdProps}
      data={data}
      columns={columns}
    defaultPageSize={10}
    pageSizeOptions={pageSizeOptions}
     />
    </div>
  )
}

export default Stores