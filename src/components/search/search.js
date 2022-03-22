import React, { useState } from "react";

function Search({ change }) {
  const [searchData, setSearchData] = useState("");
  const [serror, setSerror] = useState(false);
  const handleSearch = () => {
    setSerror(false);
    searchData.length > 3 ? change(searchData) : setSerror(true);
  };
  return (
    <>
      <input
        type="text"
        placeholder="შეიყვანეთ ფილმის სახელი"
        onChange={(e) => setSearchData(e.target.value)}
      />
      <button onClick={handleSearch}>ძიება</button>
      {serror && <div className="serror">შეიყვანეთ 3 სიმბოლოზე მეტი</div>}
    </>
  );
}
export default Search;
