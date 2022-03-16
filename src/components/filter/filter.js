import React, { useState } from "react";
import Select from "./elements/select";
import Type from "./elements/type";
import "./filter.scss";
function Filter({ settype, type, value, onChange, allfilters }) {
  return (
    <div className="filter">
      <div className="left-types">
        <Type settype={settype} type={type} />
      </div>
      <div className="right-filter">
        <div className="col-20">
          <Select options={allfilters.ForRent.options} 
                  value={value.ForRent} 
                  placeholder={allfilters.ForRent.def}
                  onChange={value => onChange && onChange('ForRent', value)} />         
        </div>
      </div>
    </div>
  );
}
export default Filter;
