import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ReactTable from 'react-table';
import UpdateStore from "./UpdateStore/UpdateStore"
import "./Stores.css"
import AddStore from './AddStore/AddStore';
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
    const [showUpdateStoreModal,setShowUpdateStoreModal] = useState(false)
    function handleShowUpdateModal (value){
        setShowUpdateStoreModal(value)
    }
    const [showAddStoreModal,setShowAddStoreModal]= useState(false)
   
    const handleAddStore=(value)=>{
   setShowAddStoreModal(value)
   console.log("a");
    }
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
                onClick={()=>handleShowUpdateModal(true)}
                >Edit</button>
        )},
        {
            Header:'',
                Cell:row=>(
                    <button
                    >Delete</button>
            )}
        

    ]
    
    const pageSizeOptions=[5,9]
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
    {showUpdateStoreModal&&<UpdateStore  statusModalUpdate={handleShowUpdateModal}    />}
    {showAddStoreModal&&<AddStore        statusModalAdd={handleAddStore}           />}
  
     <div className='Stores-header'>
        <h1>Stores Infomation</h1>
        <button
        onClick={()=>
        handleAddStore(true)
        }
        >Add Store</button>
     </div>
     <ReactTable
     getTdProps={getTdProps}
      data={data}
      columns={columns}
    defaultPageSize={9}
    pageSizeOptions={pageSizeOptions}
     />
    </div>
  )
}

export default Stores