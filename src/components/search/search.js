import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
function Search() {
  const [searchData, setSearchData] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSearch = () => {
    if (searchData.length) {
      dispatch({
        type: "SEARCHKEY",
        payload: searchData,
      });
      history.push("search");
    }
  };

  return (
      <div className="searchs">
        <div className="header-top__search">
          <input
            type="text"
            placeholder="შეიყვანეთ ფილმის სახელი"
            onChange={(e) => setSearchData(e.target.value)}
          />
          <button onClick={() => handleSearch()}>ძიება</button>
        </div>
      </div>
  );
}
export default Search;
