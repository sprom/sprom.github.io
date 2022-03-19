import React, { useState, useEffect } from "react";

function Input({  placeholder, onChange = () => {} }) {
  const [val, setVal] = useState(null);

  useEffect(() => {
    onChange(val);
  }, [val]);

  return (
    <div className="input-hold">
      <input placeholder={placeholder} type="number" onChange={(e) => setVal(e.target.value)} />
    </div>
  );
}
export default Input;
