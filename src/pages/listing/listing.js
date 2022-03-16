import axios from "axios";
import React, { useEffect, useState } from "react";
import Filter from "../../components/filter/filter";
import Item from "./item/item";

function Listing() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [typeId, setTypeID] = useState(0);
  const [params, setParams] = useState({});
  
  const allfilters = {
    ForRent: 
      {
        options: [{label: "იყიდება", value: 0}, {label: "ქირავდება", value: 1}],
        def: "გარიგების ტიპი",
        selected: null,
      },
    Bettt: 
      {
        options: [{label: "იყიდება", value: 'forRent'}, {label: "ქირავდება", value: 'forBuy'}],
        def: "გარიგების ტიპი",
        selected: 1, 
      },

  };
 

  const ApiUrl = "https://api2.myauto.ge/ka/products?TypeID=";
  
  async function fetchData() {
    try {
      let filterArguments = [];
      for (let filterId in params) {
            if (params[filterId] || params[filterId] === 0) {
              filterArguments.push(filterId+"="+params[filterId]);
            }
            
      }
      console.log(filterArguments);
      const response = await axios.get(ApiUrl + typeId +'&'+ filterArguments.join('&'));
      
      setItems(response.data.data.items);
      setLoading(false);
    } catch (e) {
      console.log(e.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, [typeId, params]);

  console.log('allfilters: ', allfilters);
  console.log('params: ', params);
  return (
    <div className="content">
      <Filter
        type={typeId}
        
        allfilters={allfilters}
        value={params}
        onChange={((key, value) => {
          setParams(params => ({
            ...params,
            [key]: value
          }));
        })}
        settype={setTypeID}
      />
      {/* <Search change={setInputVal} /> */}

      <div className="listing">
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          items?.map((item) => <Item key={item.car_id} data={item} />)
        )}
      </div>
    </div>
  );
}
export default Listing;
