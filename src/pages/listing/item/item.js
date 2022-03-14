import React from "react";

function Item({ data}) {
 
  return (
    <div  className="item">
      <div className="title">{data.title}</div>
      <div className="desc">
        <img src= {data.thumbnailUrl} />
        </div>
    </div>
  );
}
export default Item;
