import React from "react";

function Item({ idata}) {
//  console.log(idata.posters.data[240]);
console.log(idata);
  return (
    <div  className="item">
      <div className="poster">
      <img src= {idata.image} alt='cover'/></div>
      {/* <div className="poster">{idata.posters? 
      <img src= {idata.posters.data[240]} alt='cover'/>
      :
      idata.poster && <img src= {idata.poster} alt='cover'/>}</div> */}
      {/* <div className="title">{idata.primaryName || idata.secondaryName}</div> */}
      <div className="title">{idata.title}</div>
      <div className="title">{idata.type}</div>
      <div className="desc">
        
        </div>
    </div>
  );
}
export default Item;
