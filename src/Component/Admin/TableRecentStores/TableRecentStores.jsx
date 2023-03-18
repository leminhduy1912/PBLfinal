import React from "react";

import ReactTable from 'react-table'
import "react-table/react-table.css"  
import { recentStores } from "../../../Data/Data";
import "./TableRecentStores.css"

const  TableRecentStores= ()=>{

const columns=[
            {
                Header:'Name Store',
                accessor:'storeName',
            },
            {
                Header:'Address Store',
                accessor:'storeAddress',
            },
            {
                Header:'Phone Number',
                accessor:'number',
            },
            {
                Header:'Store Description',
                accessor:'description',
            },
            {
                Header:'Kind Of Bussiness',
                accessor:'kindof',
            },
            {
                Header:'Status',
                accessor:'action',
            } 
        ]
       
        const getTdProps = (state, rowInfo, column) => {
          {console.log(rowInfo.index)}
          return {
            
            className: (rowInfo.original.action === 'Active') ? 'Active' : 'Pause', 
          };
        };
        const pageSizeOptions = [5, 10]; 
  return (
   <div>
    <h1
    >
      Recent Stores</h1>
    <ReactTable
   
     getTdProps={getTdProps}
      columns={columns}
      data={recentStores}
       defaultPageSize={10}
       pageSizeOptions={pageSizeOptions}
    />
    </div>
  );
 
}

export default TableRecentStores
