import React from "react";
import { recentStores } from "../../Data/Data";
import ReactTable from 'react-table'
import "react-table/react-table.css" 
const Table= ()=>{
const customTrGroupComponent= ()=>{

}
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
  
  return (
    <ReactTable
      columns={columns}
      data={recentStores}
       defaultPageSize={5}
    />
  );
 
}
export default Table