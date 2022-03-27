import axios from "axios";
import React, { useEffect, useState } from "react";
import Item from "../../components/item/item";
import SearchBlock from "../../components/search/search"
function HomePage() {
  const [items, setItems] = useState();
  const [loading, setLoading] = useState(true);
  const [error, seterror] = useState("");

  const ApiUrl = "https://www.omdbapi.com/?s=Marvel&apikey=268ca060";
  async function fetchData() {
    try {
      const response = await axios.get(ApiUrl);
      setItems(response.data.Search);
      seterror("");
      setLoading(false);
    } catch (e) {
      seterror(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="content">
      <SearchBlock />
      <div className="listing">
        {loading ? (
          <div className="loading">Loading...</div>
        ) : !items?.length ? (
          <div className="not-found">Data not found</div>
        ) : (
          items?.map((item) => <Item key={item.imdbID} idata={item} />)
        )}
        <div className="error">{error}</div>
      </div>
    </div>
      
    
  );
}
export default HomePage;
