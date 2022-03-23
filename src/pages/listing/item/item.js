import React from "react";

function Item({ idata }) {
  return (
    <div className="item">
      <div className="poster">
        <img src={idata.image} alt="cover" />
      </div>
      <div className="bot">
        <div className="title">{idata.title}</div>
        <div className="desc">{idata.description}</div>
      </div>
    </div>
  );
}
export default Item;
