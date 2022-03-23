import React, { useState } from "react";
import { Redirect } from "react-router-dom";

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
      {searchData > 3? (
        <Redirect
          to={{
            pathname: "/search",
          }}
        />
      ) : (
        "not"
      )}
    </>
  );
}
export default Search;
