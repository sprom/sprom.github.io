import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
function Search() {
  const [searchData, setSearchData] = useState("");
  const [serror, setSerror] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSearch = () => {
    if (searchData.length>3) {
      setSerror(false);
      dispatch({
        type: "SEARCHKEY",
        payload: searchData,
      });
      history.push("search");
    }else {
      setSerror(true);
    }
  };

  return (
    <>
     <div className="searchs">
        <div className="header-top__search">
          <input
            type="text"
            placeholder={searchData?searchData:"შეიყვანეთ ფილმის სახელი"}
            onChange={(e) => setSearchData(e.target.value)}
          />
          <button onClick={() => handleSearch()}>ძიება</button>
        </div>
      </div>
      {serror && <div className="serror">შეიყვანეთ 3 სიმბოლოზე მეტი</div>}

    </>
     
      
  );
}
export default Search;
