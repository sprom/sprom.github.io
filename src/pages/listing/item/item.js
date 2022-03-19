import React, { useState, useCallback } from "react";
import { ReactComponent as Gear } from "../../../resources/img/par_gear.svg";
import { ReactComponent as Power } from "../../../resources/img/par_power.svg";
import { ReactComponent as Runsize } from "../../../resources/img/par_runsize.svg";
import { ReactComponent as Wheel } from "../../../resources/img/par_wheel.svg";

function Item({ data, opts }) {
  var index = opts.findIndex((x) => x.value === data.man_id);

  const [valuta, setValuta] = useState(true);

  const gearType = [
    { label: 1, name: "მექანიკა" },
    { label: 2, name: "ავტომატიკა" },
    { label: 3, name: "ტიპტრონიკი" },
    { label: 4, name: "ვარიატორი" },
  ];
  var gr = gearType.findIndex((x) => x.label === data.gear_type_id);

  const changeValuta = useCallback(() => {
    setValuta(!valuta);
  }, [valuta]);

  return (
    <div className="col-20">
      <div className={(data.prom_color && "promo") + " item"}>
        <div className="photo">
          <img
            alt="d"
            src={
              "https://static.my.ge/myauto/photos/" +
              data.photo +
              "/thumbs/" +
              data.car_id +
              "_1.jpg?v=0"
            }
          />
        </div>
        <div className="info">
          <div className="top">
            <div className="manufactur">
              {data.for_rent && <div className="for_rent">ქირავდება</div>}
              {/*data.man_id*/} {opts[index]?.label}
              <span className="model">{data.car_model}</span>
              <span className="year">{data.prod_year}</span>
            </div>
            <div className="top-right">
              <div className="gan">განბაჟებული</div>
              <div className="city">თბილისი</div>
            </div>
          </div>
          <div className="mid">
            <div className="left-data">
              <div className="car_run_km">
                <Runsize />
                {data.car_run_km} კმ
              </div>
              <div className="car_run_km">
                <Power />
                {data.engine_volume / 1000}
              </div>
              <div className="gearTypes">
                <Gear />
                {gearType[gr]?.name}
              </div>
              <div className="right_wheel">
                <Wheel />
                {data.right_wheel ? "მარჯვენა" : "მარცხენა"}
              </div>
            </div>
            <div className="right-data">
              <div className="price">
                {!valuta ? data.price : data.price_value}{" "}
              </div>
              <div className="swich" onClick={() => changeValuta()}>
                {valuta ? <span>₾</span> : <span>$</span>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Item;
