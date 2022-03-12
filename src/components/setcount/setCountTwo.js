import React, { useCallback, useMemo, useState } from "react";

function SetCountTwo() {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);



  const incrementFirst = useCallback(() => {
    setFirst(first + 1);
  }, [first]);
  const incrementSecond = useCallback(() => {
    setSecond(second + 1);
  }, [second]);



  const checkHigh = useMemo((highest) => {
    if (first === second) {
      highest="Draw";
    } else {
      first > second
        ? highest ="button first higher " + first
        : highest ="button second higher " + second;
    }
    return highest
  }, [first, second]);



  
  return (
    <>
      <div className="content">
        <div className="title">Version 2</div>
        <button onClick={incrementFirst}>Button first data {first}</button>
        <button onClick={incrementSecond}>Button second data {second}</button>
        <div className="highnumber">{checkHigh}</div>
      </div>
    </>
  );
}
export default SetCountTwo;
