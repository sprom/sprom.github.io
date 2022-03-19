import React from "react";

import { ReactComponent as Car } from "../../../resources/img/car.svg";
import { ReactComponent as Truk } from "../../../resources/img/truk.svg";
import { ReactComponent as Moto } from "../../../resources/img/moto.svg";
function Type({settype,type}) {
  return (
    <div className="types">
      <button onClick={() => settype(0)} className={type === 0 ? "active":''}>
        <Car />
      </button>
      <button onClick={() => settype(1)} className={type === 1 ? "active":''}>
        <Truk />
      </button>
      <button onClick={() => settype(2)} className={type === 2 ? "active":''}>
        <Moto />
      </button>
    </div>
  );
}
export default Type;
