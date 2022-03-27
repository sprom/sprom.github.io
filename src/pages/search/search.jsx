import axios from "axios";
import React, { useEffect, useState } from "react";
import Item from "../../components/item/item";
import SearchBlock from "../../components/search/search"
import { useSelector } from "react-redux";

function Search() {
  const [items, setItems] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, seterror] = useState("");
  const search = useSelector((state) => state.search);

  const ApiUrl = "https://imdb-api.com/en/API/Search/k_5n38ru6i/"+search;

  async function fetchData() {
    try {
      const response = await axios.get(ApiUrl);
      setItems(response.data.results);
      seterror("");
      setLoading(false);
    } catch (e) {
      seterror(e.message);
      setLoading(false);
    }
  }
console.log(ApiUrl);
  useEffect(() => {
    fetchData();
  }, [search]);

  return (
    <div className="content">
      <SearchBlock />
      <div className="listing">
        {loading ? (
          <div className="loading">Loading...</div>
        ) : !items?.length ? (
          <div className="not-found">Data not found</div>
        ) : (
          items?.map((item) => <Item key={item.id} idata={item} />)
        )}
        <div className="error">{error}</div>
      </div>
    </div>
  );
}
export default Search;
