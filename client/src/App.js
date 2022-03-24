import './App.css';
import Calendar from 'react-calendar';
import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';

function App() {
   const [value, onChange] = useState(new Date());


  return (
    <div className="App">
       <Calendar onChange={onChange} value={value}/>
    </div>
  );
}

export default App;
