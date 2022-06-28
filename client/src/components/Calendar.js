import React, { useState } from "react";
import { Calendar } from "react-calendar";

const CalNode = () => {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <p
        style={{
          fontStyle: "italic",
          fontSize: "1.66rem",
          color: "#9c7c7a",
          width: "33%",
        }}
      >
        Stay tuned while our calendar is being built!
      </p>
      {/* <Calendar style={{width: "66vw"}}/> */}
    </>
  );
};

export default CalNode;
