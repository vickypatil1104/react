import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "../components/ItemList";
import { clearCard } from "../ReduxSlices/CardReducer";

function ItemCard() {
  const cardData = useSelector((store) => store.card.items);
  const dispatch = useDispatch();
  const handelClearCard = () => {
    dispatch(clearCard());
  };
  return (
    <div className="w-6/12 m-auto  pt-28">
      <span className="text-gray-500 font-bold text-2xl">Card Items</span>
      <span>
        <button
          className="py-2 px-4 bg-orange-400 text-white hover:shadow-lg font-semibold ml-4 rounded-lg"
          onClick={handelClearCard}
        >
          Clear Card
        </button>
      </span>
      <ItemList item={cardData} />
      {cardData.length === 0 && (
        <h1 className="my-16 font-semibold text-gray-300 text-3xl text-center">
          Add some Food 🍕🍔🍟🌭
        </h1>
      )}
    </div>
  );
}

export default ItemCard;
