import ItemList from "./ItemList";

function RestaurantMenuCategory({ CategoryData, setShowIndex, restCategory }) {
  const handelClick = () => {
    setShowIndex();
  };
  return (
    <>
      <div
        className=" mb-2 shadow-sm py-4 px-3 cursor-pointer"
        onClick={handelClick}
      >
        <div className="flex justify-between">
          <span className="font-bold text-lg text-black">
            {CategoryData.title}({CategoryData.itemCards.length})
          </span>
          <span>⬇</span>
        </div>
        {restCategory && <ItemList item={CategoryData.itemCards} />}
      </div>
    </>
  );
}

export default RestaurantMenuCategory;
