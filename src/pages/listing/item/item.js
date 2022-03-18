import React from "react";

function Item({ data, opts }) {
  var index = opts.findIndex((x) => x.value === data.man_id);

  return (
    <div className="col-20">
      <div className="item">
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
              {/*data.man_id*/} {opts[index]?.label}
              <span className="model">{data.car_model}</span>
              <span className="year">{data.prod_year}</span>
            </div>
            <div>
              <div className="gan">
              განბაჟებული
              </div>
              <div className="city">
                
              </div>
            </div>
          </div>
          {/* <div className="car_id">'car_id'{data.car_id}</div> */}
          {/* <div className="car_id">'client_name'{data.client_name}</div> */}
          <div className="dealer_name">'dealer_name'{data.dealer_name}</div>
          
          <div className="for_rent">
            'for_rent'{data.for_rent ? "qiravdeba" : "iyideba"}
          </div>
          <div className="price">'price'{data.price}</div>
          <div className="price_value">
            'price_value'{data.price_value} an shetanxmebit 0
          </div>
          <div className="right_wheel">
            'right_wheel'{data.right_wheel && "marjvena sache"}
          </div>
          <div className="car_run_km">'car_run_km'{data.car_run_km}</div>
          <div className="car_run_km">'dzravi'{data.engine_volume}</div>
          <div className="gearTypes">
            'meqanika? '{data.gearTypes}1 meqanita 2 avtomatika 3 tiptroniki
          </div>
          <div className="fuel_type_id">
            'fuel_type_id'{data.fuel_type_id}2 benzini 3 dizeli 7 eleqtro 8
            bunebrivi,9 txevadi gazi 6 , 10 datenvadi , hibridi 12 wyalbadi
          </div>
        </div>
      </div>
    </div>
  );
}
export default Item;
