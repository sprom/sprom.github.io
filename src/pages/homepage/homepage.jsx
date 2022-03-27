import axios from "axios";
import React, { useEffect, useState } from "react";
import Item from "../../components/item/item";
import SearchBlock from "../../components/search/search"
function HomePage() {
  const [items, setItems] = useState();
  const [loading, setLoading] = useState(true);
  const [error, seterror] = useState("");

  const ApiUrl = "https://imdb-api.com/en/API/MostPopularMovies/k_5n38ru6i";

  async function fetchData() {
    try {
      const response = await axios.get(ApiUrl);
      setItems(response.data.items);
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
        ) : !items.length ? (
          <div className="not-found">Data not found</div>
        ) : (
          items?.slice(0, 20).map((item) => <Item key={item.id} idata={item} />)
        )}
        <div className="error">{error}</div>
      </div>
    </div>
      
    
  );
}
export default HomePage;
