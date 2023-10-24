import { useEffect, useState } from "react";
import { RESTAURANT_MENU } from "../Api";

const useRestaurantMenu = (menuId) => {
  const [menuData, setMenuData] = useState([]);
  const [restMenu, setRestMenu] = useState([]);
  const [offer, setOffer] = useState([]);
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
    setOffer(offerData);
  };

  return { menuData, restMenu, offer };
};

export default useRestaurantMenu;
