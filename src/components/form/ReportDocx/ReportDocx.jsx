import React from 'react'
import './ReportDocx.css'
import { FaTimes } from 'react-icons/fa'
const ReportDocx = (props) => {
  
  return (
    <div className='report-docx-container'>
        <div className="report-docx-content">
            <div className="header-report-docx">
                <h1>Report</h1>
                <button 
                className='btn'
                onClick={()=>{props.handleShowMoDalReport(false)}}
                ><FaTimes/></button>
            </div>
        <iframe src={"https://ntphtdn-my.sharepoint.com/:w:/g/personal/minhngoc_40303_onedrive_iesschool_edu_vn/EZGaIyP0nlpKnzzMtPL8PusBmRJo49VphkUmB5cDUbnMIQ?rtime=STqemrxL20g&action=embedview"} width="100%" height="550px" title='Report'></iframe>
        </div>
    </div>
  )
}

export default ReportDocx