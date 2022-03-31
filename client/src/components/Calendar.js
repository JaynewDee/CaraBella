import Calendar from 'react-calendar';
import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';

function CalNode() {
   const [value, onChange] = useState(new Date());


  return (
    <div className="CalWrap">
       <Calendar onChange={onChange} value={value}/>
    </div>
  );
}

export default CalNode;