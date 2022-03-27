import React from "react";
function Item({ idata }) {
  return (
    <div className="item">
      <a target="_blank" href={"https://www.imdb.com/title/"+(idata.imdbID)} rel="noreferrer">
      <div className="poster">
        {
          idata.Poster && <img src={idata.Poster} alt="cover" />
        }
      </div>
      <div className="bot">
        <div className="title">{idata.Title}</div>
      </div>
      </a>
    </div>
  );
}
export default Item;
