import { useEffect, useState } from "react";
import "../CSS/restaurantMenu.css";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU } from "../Api";

const RestaurantMenu = () => {
  const [menuData, setMenuData] = useState([]);
  const [restMenu, setRestMenu] = useState([]);
  const [offer, setoffer] = useState([]);

  const { menuId } = useParams();
  console.log("restID", menuId);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RESTAURANT_MENU + menuId);
    const jsonData = await data.json();
    const menuData = jsonData?.data?.cards[0]?.card?.card?.info;
    const offerData =
      jsonData?.data?.cards[1]?.card?.card?.gridElements.infoWithStyle.offers;
    const restMenuData =
      jsonData?.data?.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards[2].card
        .card.itemCards;
    setRestMenu(restMenuData);
    setMenuData(menuData);
    setoffer(offerData);
  };

  const { name, cuisines, locality, avgRatingString, costForTwoMessage } =
    menuData;

  const restMessage = menuData?.feeDetails?.message;
  const time = menuData?.sla?.deliveryTime;
  return (
    <>
      <div className="menu-container">
        <div className="rest-info">
          <div className="rest-base-info">
            <div className="rest-name">
              <h1>{name}</h1>
            </div>
            <div className="rest-cuisines">
              <p>{cuisines}</p>
              <p>{locality}</p>
            </div>
          </div>
          <div className="rest-rating">
            <h1>{avgRatingString}</h1>
          </div>
        </div>
        <div className="rest-message">{restMessage}</div>
        <hr />
        <div className="rest-offer">
          <div className="delivery-info">
            <h3 className="time">{time}min</h3>
            <h3 className="for-two">{costForTwoMessage}</h3>
          </div>
          <div className="offer-container">
            {offer.map((off, index) => {
              const offHeading = off.info.header;
              const couponCode = off.info.couponCode;
              return (
                <div className="offer-card" key={index}>
                  <div className="offer-heading">
                    <h2>{offHeading}</h2>
                  </div>
                  <div className="offer-code">
                    <p>{couponCode}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <hr />
        {restMenu.map((menu, index) => {
          const name = menu.card.info.name;
          const description = menu.card.info.description;
          const price = menu.card.info.price;
          const imgId = menu.card.info.imageId;
          return (
            <div className="rest-menu" key={index}>
              <div className="menu-card">
                <div className="meal-info">
                  <h3 className="meal-name">{name}</h3>
                  <h4 className="meal-price">Rs{price / 100}</h4>
                  <div className="meal-message">
                    <p>{description}</p>
                  </div>
                </div>
                <div className="meal-img">
                  <img
                    src={
                      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                      imgId
                    }
                    alt="meal-img"
                  />
                </div>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RestaurantMenu;