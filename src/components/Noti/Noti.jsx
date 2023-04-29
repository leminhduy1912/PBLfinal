import React, { useState } from 'react'
import "./Noti.css"
const Noti = () => {
  const [showComponent, setShowComponent] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => {
    setShowComponent(true);
  }, 3000);
  return () => clearTimeout(timer);
}, []);

if (!showComponent) {
  return null;
}
  return (
   <div className="noti">
    <h1>Succedd</h1>
   </div>
  )
}

export default Noti