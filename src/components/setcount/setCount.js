import React, { useState } from "react";

function SetCount() {
  const [first, setFirst] = useState(1);
  const [second, setSecond] = useState(1);

  return (
    <>
      <div className="content">
        <div className="title">Version 1</div>
        <button onClick={() => setFirst(first + 1)}>
          Button first data {first}
        </button>
        <button onClick={() => setSecond(second + 1)}>
          Button second data{second}
        </button>
        <div className="highnumber">
          {first > second
            ? "First button data: " + first
            : "Second button data: " + second}
        </div>
       
      </div>
   
    </>
  );
}
export default SetCount;
