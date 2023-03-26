import React from 'react'
import ReactTable from 'react-table'
import "./PlanInspect.css"
import "react-table/react-table.css" 
function PlanInspect() {
    const data=[
        {
            nameStore:"Banh xeo co ba",
            addressStore:"50 Hoang Dieu",
            testReason:"Kiem tra dinh ky",
            auditor:"Nguyen Van Hieu",
            time:"27/2/2023",
            status:"Qualified"
        },
        {
            nameStore:"Banh xeo co ba",
            addressStore:"50 Hoang Dieu",
            testReason:"Kiem tra dinh ky",
            auditor:"Nguyen Van Hieu",
            time:"27/2/2023",
            status:"Unqualified"
        },
        {
            nameStore:"Banh xeo co ba",
            addressStore:"50 Hoang Dieu",
            testReason:"Kiem tra dinh ky",
            auditor:"Nguyen Van Hieu",
            time:"27/2/2023",
            status:"Qualified"
        },
        {
            nameStore:"Banh xeo co ba",
            addressStore:"50 Hoang Dieu",
            testReason:"Kiem tra dinh ky",
            auditor:"Nguyen Van Hieu",
            time:"27/2/2023",
            status:"Unqualified"
        },
        {
            nameStore:"Banh xeo co ba",
            addressStore:"50 Hoang Dieu",
            testReason:"Kiem tra dinh ky",
            auditor:"Nguyen Van Hieu",
            time:"27/2/2023",
            status:"Qualified"
        }

    ]

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
            Header:'Time test',
            accessor:'time'
        },
        {
            Header:'Auditor',
            accessor:'auditor'
        },
        {
            Header:'Test Reason',
            accessor:'testReason'
        },
        {
            Header:'Status',
            accessor:'status'
        },

    ]
    const getTdProps = (state, rowInfo, column) => {
          
        return {
          className: (rowInfo.original.status === 'Qualified') ? 'Qualified' : 'Unqualified', 
        };
      };
  return (
    <div className='PlanInspect'>
        <div className='PlanInspect-header'>
        <h1>Plan Management</h1>
        <button>Add Plan</button>
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

export default PlanInspect