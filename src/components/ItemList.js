import React from "react";
import { IMG_URL } from "../Utils/Api";
import { useDispatch } from "react-redux";
import { addItems, removeItems } from "../ReduxSlices/CardReducer";

function ItemList({ item }) {
  const dispatch = useDispatch();
  const handelAddToCard = (data) => {
    dispatch(addItems(data));
  };
  const handelRemoveToCard = (data) => {
    dispatch(removeItems(data.card.info.id));
  };
  return (
    <>
      {item.map((data, index) => {
        return (
          <div
            className="flex justify-between border-b-2 shadow-lg my-4 w-full p-4"
            key={index}
          >
            <div className="w-10/12">
              <h1 className="text-lg font-bold text-gray-600">
                {data.card.info.name}
              </h1>
              <p className="text-xl text-gray-400 font-extrabold">
                ₹{data.card.info.price / 100}
              </p>
              <p className="text-sm text-gray-400">
                {data.card.info.description}
              </p>
            </div>
            <div className="w-2/12 m-2">
              <img
                className="rounded-lg"
                src={IMG_URL + data.card.info.imageId}
                alt="img"
              />
            </div>
            <button
              className="px-4 py-2 h-full my-auto bg-green-400 text-white font-bold hover:shadow-xl rounded-lg m-2"
              onClick={() => handelAddToCard(data)}
            >
              Add+
            </button>
            <button
              className="px-4 py-2 h-full my-auto bg-red-400 text-white font-bold hover:shadow-xl rounded-lg m-2"
              onClick={() => handelRemoveToCard(data)}
            >
              Remove
            </button>
          </div>
        );
      })}
    </>
  );
}

export default ItemList;
