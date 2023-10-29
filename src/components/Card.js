import React, { useContext } from "react";
import { IMG_URL } from "../Utils/Api";
import userContext from "../Utils/userContext";

function Card({ restName, cuisines, rating, cost, imgId }) {
  const { userData } = useContext(userContext);
  return (
    <>
      <div className="my-5 p-4 w-52 h-auto rounded-lg hover:shadow-xl bg-gray-100 transition-all duration-500 ease-in-out  hover:bg-gray-200">
        <div className="card-img">
          <img className="w-40 h-28 rounded-lg" src={IMG_URL + imgId} alt="" />
        </div>
        <div className="">
          <div className="m-2 text-lg font-bold">
            <h2>{restName} </h2>
          </div>
          {/* <div className="cuisines">
            <p>{cuisines}</p>
          </div> */}
          <div className="rating">
            <h2>{rating}stars</h2>
          </div>
          <div className="price">
            <h2>{cost}</h2>
          </div>
          <h2>{userData}</h2>
        </div>
      </div>
    </>
  );
}

export const VegRestaurant = (Card) => {
  return ({ restName, cuisines, rating, cost, imgId }) => {
    return (
      <>
        <h1 className="border border-solid px-4 py-2 absolute bg-green-400 rounded-lg text-white font-bold">
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
