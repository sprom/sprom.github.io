import React from "react";

function Search({change}) {
  const checkValue = (val) => {
    val.length > 3 && change(val);
  }
  return (
    <>
      <input
        type="text"
        placeholder="Type Photo id (E.g:1763)"
        onChange={(e) => checkValue(e.target.value)}
      />
    </>
  );
}
export default Search;
