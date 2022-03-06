import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Input from "./input";
function Animated() {
  const el = useRef();
  const q = gsap.utils.selector(el);
  const tl = useRef();

  const [inpVal, setVal] = useState('text here');
  const Items = [1,2,3,4,5];


  useEffect(() => {
    gsap.to(q(".item"), { rotation: "+=360" }).restart();
  },[q,inpVal]);
  return (
    <>
      <Input val={inpVal}  set={setVal} />

        <div className="items" ref={el}>
          {Items.map((item, index) => (
            <div key={index} className="item">
             #{index} {inpVal} {item} 
            </div>
          ))}
        </div>
    </>
  );
}
export default Animated;
