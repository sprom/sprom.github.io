import axios from "axios";
import React, { useEffect, useState } from "react";
import Filter from "../../components/filter/filter";
import Item from "./item/item";

function Listing() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [typeId, setTypeID] = useState(0);

  const [filterUrl, setfilterUrl] = useState('');// აქ ფილტრი თავიდან
//დაბლა ობიექტში ბევრი რო მქონდეს ყველას იფ რო რ გავწერო 
//და შიგნიდან დავსეტო ლინკის პრაგმენტები მაგალითად   ForRent=1
  const [allfilters, setAllfilters] = useState({
    bargain: 
      {
        options: ["იყიდება", "ქირავდება"],
        // options: [{label: "იყიდება", value: 'forRent'}, {label: "ქირავდება", value: 'forBuy'}],
        def: "გარიგების ტიპი",
        selected: null,//პასუხი მოდის 1 ან 2 
        //აქ მინდა რამე რო თუ სელექტედია ფილტერში ჩავსვა
      },
  // men_id: 
  //     {
      
  //       options: ["BMW", "CAR"],
  //       def: "მწარმოებელი",
  //       selected: null,//პასუხი მოდის 1 ან 2 
  //       //აქ მინდა რამე რო თუ სელექტედია ფილტერში ჩავსვა
  //     }
  });

  // const ApiUrl = "https://api2.myauto.ge/ka/products?TypeID=0&ForRent=&Mans=&CurrencyID=3&MileageType=1&Page=1&searchType=forRent";
  const ApiUrl = "https://api2.myauto.ge/ka/products?TypeID";

  async function fetchData() {
    try {
      // let filterArguments = [];
      // for (let filterId in allfilters) {
      //       if (allfilters[filterId].selected || allfilters[filterId].selected === 0) {
      //         filterArguments.push(filterId+"="+allfilters[filterId].selected);
      //       }
      // }
      
      const response = await axios.get(ApiUrl + typeId + filterUrl);
      // const response = await axios.get(ApiUrl + typeId + filterUrl+filterArguments.join('&'));
      
      setItems(response.data.data.items);
      setLoading(false);
    } catch (e) {
      console.log(e.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, [typeId]);
  return (
    <div className="content">
      <Filter
        type={typeId}
        setAllfilters={setAllfilters}
        allfilters={allfilters}
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
