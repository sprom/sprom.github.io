import React from "react";

function Input({val,set}) {
 

  return (
    <>
    
      <div className="inpholder">
        <div className="inputdata">Using {val}  </div>
        <input
          type="text"
          placeholder={val}
          onChange={(e) => set(e.target.value)}
        />
      </div>
    </>
  );
}
export default Input;
