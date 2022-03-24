import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "./item/item";

function Listing() {
  const [items, setItems] = useState();
  const [loading, setLoading] = useState(true);
  const [error, seterror] = useState("");
  const params = useParams();

  const ApiUrl = "https://imdb-api.com/en/API/Search/k_5n38ru6i/" + params.id;

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

  useEffect(() => {
    fetchData();
  }, [params.id]);

  return (
    <div className="content">
      <div className="listing">
        {loading ? (
          <div className="loading">Loading...</div>
        ) : !items.length ? (
          <div className="not-found">Data not found</div>
        ) : (
          items?.map((item) => <Item key={item.id} idata={item} />)
        )}
        <div className="error">{error}</div>
      </div>
    </div>
  );
}
export default Listing;
