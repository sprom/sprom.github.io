import axios from "axios";
import React, { useEffect, useState } from "react";
import Filter from "../../components/filter/filter";
import Item from "./item/item";
import "./listing.scss";
function Listing() {
  const [items, setItems] = useState([]);
  const [meta, setMeta] = useState([]);
  const [loading, setLoading] = useState(true);
  const [typeId, setTypeID] = useState(0);
  const [params, setParams] = useState({});

  const allfilters = {
    ForRent: {
      options: [
        { label: "იყიდება", value: 0 },
        { label: "ქირავდება", value: 1 },
      ],
      def: "გარიგების ტიპი",
      selected: null,
    },
    Mans: {
      options: [
        { label: "MERCEDES-BENZ", value: 25 },
        { label: "BMW", value: 3 },
        { label: "AUDI", value: 2 },
      ],
      def: "მწარმოებელი",
      selected: null,
    },
    ProdYearFrom: {
      options: [
        { label: "2017", value: 2017 },
        { label: "2018", value: 2018 },
        { label: "2019", value: 2019 },
        { label: "2020", value: 2020 },
        { label: "2021", value: 2021 },
      ],
      def: "წელი - დან",
      selected: null,
    },
    ProdYearTo: {
      options: [
        { label: "2021", value: 2021 },
        { label: "2020", value: 2020 },
        { label: "2019", value: 2019 },
        { label: "2018", value: 2018 },
        { label: "2017", value: 2017 },
      ],
      def: "მდე",
      selected: null,
    },
    WheelTypes: {
      options: [
        { label: "მარცხენა", value: 0 },
        { label: "მარჯვენა", value: 1 },
      ],
      def: "საჭე",
      selected: null,
    },
  };

  const ApiUrl = "https://api2.myauto.ge/ka/products?TypeID=" + typeId;

  async function fetchData() {
    try {
      let filterArguments = [];
      for (let filterId in params) {
        if (params[filterId] || params[filterId] === 0) {
          filterArguments.push(filterId + "=" + params[filterId]);
        }
      }
      const response = await axios.get(
        ApiUrl + "&" + filterArguments.join("&")
      );

      setItems(response.data.data.items);
      setMeta(response.data.data.meta);
      setLoading(false);
    } catch (e) {
      console.log(e.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, [typeId, params]);

  // console.log('allfilters: ', allfilters);
  return (
    <div className="content">
      <Filter
        type={typeId}
        settype={setTypeID}
        allfilters={allfilters}
        value={params}
        onChange={(key, value) => {
          setParams((params) => ({
            ...params,
            [key]: value,
          }));
        }}
      />
      {/* <Search change={setInputVal} /> */}

      <div className="listing">
        <div className="total">მოიძებნა {meta.total || '0'} განცხადება</div>
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          items?.map((item) => (
            <Item
              key={item.car_id}
              data={item}
              opts={allfilters.Mans.options}
            />
          ))
        )}
      </div>
    </div>
  );
}
export default Listing;
