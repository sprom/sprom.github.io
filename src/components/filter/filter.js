import React, { useState } from "react";
import Select from "./elements/select";
import Type from "./elements/type";
import "./filter.scss";
function Filter({ settype, type, allfilters,setAllfilters }) {
  // const [bargainType, setbargainType] = useState({
  //   options: ["იყიდება", "ქირავდება"],
  //   def: 'გარიგების ტიპი',
  //   selected: null
  // });
// console.log(allfilters.bargain);
  return (
    <div className="filter">
      <div className="left-types">
        <Type settype={settype} type={type} />
      </div>
      <div className="right-filter">
        <div className="col-20">
          <Select set={setAllfilters} allpars={allfilters} pars={allfilters.bargain} />
          {/* <Select set={setbargainType} pars={bargainType} /> */}
        </div>
      </div>
    </div>
  );
}
export default Filter;
