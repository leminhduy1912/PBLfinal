import React from "react";
import { recentStores } from "../../Data/Data";
import ReactTable from 'react-table'
import "react-table/react-table.css" 
import "./Table.css"

const Table= ()=>{

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
        // const getTdProps = (state, columnIndex) => {
        //   return {
           
        //     // className: 'my-custom-class',
        //   };
        // };
        const getTdProps = (state, rowInfo, column) => {
          {console.log(rowInfo.index)}
          return {
            
            className: (rowInfo.original.action === 'Active') ? 'Active' : 'Pause', 
            style: {
              // fontWeight:(rowInfo.index===0) ?'bold':'normal'
              // background: rowInfo.index % 2 === 0 ? 'red' : 'blue', // set alternate row background color
              // color: rowInfo.row.age > 30 ? 'red' : 'inherit', // set red font color for cells where age > 30

            },
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
export default Table