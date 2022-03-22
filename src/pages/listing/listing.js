import axios from "axios";
import React, { useEffect, useState } from "react";
import Search from "../../components/search/search";
import Item from "./item/item";

function Listing() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inputval, setInputVal] = useState(null);

  const ApiUrl =
    'https://imdb-api.com/en/API/Search/k_5n38ru6i/'+inputval;

  async function fetchData() {
    try {
      const response = await axios.get(
        ApiUrl 
      );
      setItems(response.data.results);
      setLoading(false);
      console.log(response.data.results);
    } catch (e) {
      console.log(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [inputval]);


  return (
    <div className="content">
      <Search change={setInputVal} />

      <div className="listing">
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          items?.map((item) =>
             <Item key={item.id} idata={item} /> 
          )
        )}
      </div>
    </div>
  );
}
export default Listing;
