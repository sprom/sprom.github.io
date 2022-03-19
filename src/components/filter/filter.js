import React from "react";
import Input from "./elements/input";
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
        <div className="d-flex">
          <div className="col-50">
            <Select options={allfilters.ForRent.options}
              value={value.ForRent}
              placeholder={allfilters.ForRent.def}
              onChange={value => onChange && onChange('ForRent', value)} />
          </div>

          <div className="col-50 d-flex">
            <div className="col-50 right-no-round">
              <Select options={allfilters.ProdYearFrom.options}
                value={value.ProdYearFrom}
                placeholder={allfilters.ProdYearFrom.def}
                onChange={value => onChange && onChange('ProdYearFrom', value)} />
            </div>
            <div className="col-50 left-no-round">
              <Select options={allfilters.ProdYearTo.options}
                value={value.ProdYearTo}
                placeholder={allfilters.ProdYearTo.def}
                onChange={value => onChange && onChange('ProdYearTo', value)} />
            </div>
          </div>

        </div>
        <div className="d-flex">
          <div className="col-50">
            <Select options={allfilters.Mans.options}
              value={value.Mans}
              placeholder={allfilters.Mans.def}
              onChange={value => onChange && onChange('Mans', value)} />
          </div>

          <div className="col-50 d-flex price-range">
            <div className="col-50 right-no-round"> <Input placeholder={'ფასი - დან'} onChange={value => onChange && onChange('PriceFrom', value)} /></div>
            <div className="col-50 left-no-round"><Input placeholder={'მდე'} onChange={value => onChange && onChange('PriceTo', value)} /></div>
          </div>
        </div>
        <div className="d-flex">
          <div className="col-50">
            <Select options={allfilters.WheelTypes.options}
              value={value.WheelTypes}
              placeholder={allfilters.WheelTypes.def}
              onChange={value => onChange && onChange('WheelTypes', value)} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Filter;