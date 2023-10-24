import React from "react";

function Card({ restName, cuisines, rating, cost, imgId }) {
  return (
    <>
      <div className="m-3 p-4 w-64 h-96 rounded-lg hover:shadow-xl bg-gray-100 transition-all duration-500 ease-in-out  hover:bg-gray-200">
        <div className="card-img">
          <img
            className="w-40 rounded-lg"
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

export const VegRestaurant = (Card) => {
  return ({ restName, cuisines, rating, cost, imgId }) => {
    return (
      <>
        <h1 className="border border-solid px-4 py-2 absolute bg-green-400 rounded-lg">
          Veg
        </h1>
        <Card
          imgId={imgId}
          restName={restName}
          cuisines={cuisines}
          rating={rating}
          cost={cost}
        />
      </>
    );
  };
};

export default Card;
