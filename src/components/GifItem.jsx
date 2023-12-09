import React from "react";

function GifItem({ url, id, title }) {
//   console.log(url, id, title);
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
}

export default GifItem;
