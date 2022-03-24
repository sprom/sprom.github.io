import React, { useState } from "react";

function Search({ change }) {
  const [searchData, setSearchData] = useState("");
  const [serror, setSerror] = useState(false);
  const handleSearch = () => {
    console.log("handl");

    setSerror(false);
    if (searchData.length > 3) {
      change(searchData);
    } else {
      setSerror(true);
    }
  };
  return (
    <>
      <div className="searchs">
        <input
          type="text"
          placeholder="შეიყვანეთ ფილმის სახელი"
          onChange={(e) => setSearchData(e.target.value)}
        />
        <button onClick={handleSearch}>ძიება</button>
      </div>

      {serror && <div className="serror">შეიყვანეთ 3 სიმბოლოზე მეტი</div>}
    </>
  );
}
export default Search;
