import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Hooks/useRestaurantMenu";
import RestaurantMenuCategory from "../components/RestaurantMenuCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { menuId } = useParams();
  const [showCategory, setShowCategory] = useState(null);

  const { menuData, offer, restMenu } = useRestaurantMenu(menuId);

  const { name, cuisines, locality, avgRatingString, costForTwoMessage } =
    menuData;

  const restMessage = menuData?.feeDetails?.message;
  const time = menuData?.sla?.deliveryTime;

  // console.log("restMenu", restMenu);

  return (
    <>
      <div className="w-8/12 my-2 m-auto p-4">
        <div className="flex justify-between my-4 items-center">
          <div className="rest-base-info">
            <div className="">
              <h1 className="font-bold text-lg">{name}</h1>
            </div>
            <div className="text-sm text-gray-400 leading-5">
              <p>{cuisines}</p>
              <p>{locality}</p>
            </div>
          </div>
          <div className="">
            <span className="">⭐</span>
            <span className="text-green-500 text-xl font-bold">
              {avgRatingString}
            </span>
          </div>
        </div>
        <div className="text-sm text-gray-400 ">{restMessage}</div>
        <hr />
        <div className="">
          <div className="flex my-2">
            <h3 className="mr-3 font-bold">{time}min ⏱</h3>
            <h3 className="font-bold">{costForTwoMessage}</h3>
          </div>
          <div className="flex flex-wrap">
            {offer.map((off, index) => {
              const offHeading = off.info.header;
              const couponCode = off.info.couponCode;
              return (
                <div
                  className=" border-solid border-2 border-gray-400 p-1 rounded-lg m-2 w-52"
                  key={index}
                >
                  <div className="offer-heading">
                    <h2 className="font-bold text-gray-400">{offHeading}</h2>
                  </div>
                  <div className="offer-code">
                    <p className="text-red-500 font-semibold">{couponCode}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <hr />
        {restMenu.map((m, index) => {
          return (
            <RestaurantMenuCategory
              key={index}
              CategoryData={m.card?.card}
              setShowIndex={() => setShowCategory(index)}
              restCategory={index === showCategory ? true : false}
            />
          );
        })}
      </div>
    </>
  );
};

export default RestaurantMenu;
