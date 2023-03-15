import React, { useState } from "react";
import "./Card.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion,AnimateSharedLayout } from "framer-motion";
import { UilTimes} from "@iconscout/react-unicons";

import Chart from "react-apexcharts";



const Card=(props)=> {
  const [expanded,setExpanded] = useState(false)
    return (
      <AnimateSharedLayout>
    {
     expanded ?(
      <ExpandedCard param={props} setExpanded={()=>{setExpanded(false)}}/>
     ) :
     <CompactCard param={props} setExpanded={()=>{setExpanded(true)}}/>
    }
      </AnimateSharedLayout>
    )
  }


  // CompactCard
function CompactCard({param,setExpanded}){
  const Png= param.png
  return (
    <motion.div className="CompactCard"
    style={
      {
        background : param.color.backGround,
        boxShadow: param.color.boxShadow
      }
    }
    onClick={setExpanded}
    layoutId='expandableCar'
    >
      <div className="radialBar">
        <CircularProgressbar
        value={param.barValue}
        text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
      <div className="detail">
          <Png/>
          <span>{param.value}</span>
          <span>Last 1 month</span>
      </div>
    </motion.div>
  )
}




// Expanded Card
function ExpandedCard({param,setExpanded}){
  // Chartline
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
         enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "month",
        categories: [
          "1/2023",
          "2,2023",
          "3/2023",
          "4/2023",
          "5/2023",
          "6/2023",
        ],
      },
    },
  };
return(
  <motion.div 
  className="ExpandedCard"
  style={
    {
      background : param.color.backGround,
      boxShadow: param.color.boxShadow
    }
  }
  layoutId='expandableCar'
  >
  <div>
    <UilTimes onClick={setExpanded}/>
  </div>
  <span>{param.title}</span>
  <div className="chartContainer">
    <Chart series={param.series} type='area' options={data.options}/>
  </div>
<span>Last 6 Months</span>

  </motion.div>
)
}
export default Card