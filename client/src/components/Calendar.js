import React, { useState } from "react";
import { Calendar } from "react-calendar";

const CalNode = () => {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <p>Stay tuned while our calendar is being built!</p>
      {/* <Calendar style={{width: "66vw"}}/> */}
    </>
  );
};

export default CalNode;
