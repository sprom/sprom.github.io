import React from "react";

function Search({change}) {
  // const [first, setFirst] = useState(1);
  // const [second, setSecond] = useState(1);

  return (
    <>
      <input
        type="text"
        placeholder="Type user id"
        onChange={(e) => change(e.target.value)}
      />
    </>
  );
}
export default Search;
