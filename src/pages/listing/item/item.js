import React from "react";

function Item({ data}) {
 
  return (
    <div  className="item">
      <div className="title">{data.title}</div>
      <div className="desc">{data.body}</div>
    </div>
  );
}
export default Item;
