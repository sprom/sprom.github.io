import axios from "axios";
import React, { useEffect, useState } from "react";
import Search from "../../components/search/search";
import Item from "./item/item";

function Listing() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [inputval, setInputVal] = useState(null);

  const ApiUrl = "https://jsonplaceholder.typicode.com/posts";

  async function fetchData(url) {

    try {
      const response = await axios.get(
        ApiUrl + (inputval ? "?userId=" + inputval : "")
      );
     
        setItems(response.data);
      
      setLoading(false);
    } catch (e) {
      setError(e.message);
    }

  }

  useEffect(() => {
    fetchData();
  }, [inputval]);


  return (
    <div className="content">
      <Search change={setInputVal} />

      <div className="error">{error}</div>

      <div className="listing">
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          items?.map((item) => <Item key={item.id} data={item} />)
        )}
      </div>
    </div>
  );
}
export default Listing;
