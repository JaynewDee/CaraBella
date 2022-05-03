import React, { useState } from 'react';
import { Calendar } from 'react-calendar';


const CalNode = () => {
   const [value, onChange] = useState(new Date());

  return (
    <div className="CalWrap">
       <Calendar style={{width: "66vw"}}/>
    </div>
  );
}

export default CalNode;