import React from "react";
import "../CSS/card.css";

function Card({ restName, cuisines, rating, cost, imgId }) {
  return (
    <>
      <div className="card">
        <div className="card-img">
          <img
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              imgId
            }
            alt=""
          />
        </div>
        <div className="card-content">
          <div className="rest-name">
            <h2>{restName} </h2>
          </div>
          <div className="cuisines">
            <p>{cuisines}</p>
          </div>
          <div className="rating">
            <h2>{rating}stars</h2>
          </div>
          <div className="price">
            <h2>{cost}</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
