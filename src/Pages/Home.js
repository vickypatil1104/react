import React, { useContext, useEffect, useState } from "react";
import Card, { VegRestaurant } from "../components/Card";
import { Link } from "react-router-dom";
import userContext from "../Utils/userContext";
import { MAIN_URL } from "../Utils/Api";
import BannerImg from "../img/dweb_header.webp";

function Home() {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  // const [topRestaurant, setTopRestaurant] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const { userData, setUserName } = useContext(userContext);
  const [search, setSearch] = useState("");
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(MAIN_URL);
    const jsonData = await data.json();
    const restList = jsonData?.data.cards;
    console.log("restList:", restList);
    const restFilter = restList.filter((f) => {
      return f.card?.card?.id === "top_brands_for_you";
    });

    console.log(
      "restFliter",
      restFilter[0].card.card.gridElements.infoWithStyle.restaurants
    );

    const restData =
      restFilter[0].card.card.gridElements.infoWithStyle.restaurants;

    setListOfRestaurant(restList);
    setFilterRestaurant(restData);
  };

  const VegRestaurantCard = VegRestaurant(Card);
  return (
    <>
      <div className="flex justify-evenly  bg-gradient-to-t from-gray-400 from-5% to-white to-100% w-full h-72  rounded-b-3xl">
        <h1 className="font-bold text-5xl text-gray-700 w-3/12 my-auto">
          Order Food Online in Mumbai
        </h1>
        <div className="w-96">
          <img src={BannerImg} alt="BannerImg" />
        </div>
      </div>
      <div className="mx-10">
        <div className="m-10 text-xl">
          <h1>Top restaurant in Mumbai</h1>
        </div>
        <div className="Home-container">
          <div className="flex items-center">
            <button
              className="m-4 px-4 py-3 bg-orange-300 hover:bg-orange-400 transition-all duration-500 text-white font-semibold rounded-lg"
              onClick={() => {
                const data = listOfRestaurant.filter((filterRestaurant) => {
                  return filterRestaurant.info.avgRatingString > "4";
                });
                setListOfRestaurant(data);
              }}
            >
              Top Restaurant
            </button>
            <div className="input-search">
              <input
                type="text"
                placeholder="search"
                className="border border-solid outline-none p-2 mx-4"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <button
                className="px-4 py-2 m-3 bg-orange-300 rounded-lg hover:bg-orange-400 transition-all duration-500 text-white font-semibold"
                onClick={() => {
                  const data = listOfRestaurant.filter((rest) => {
                    return rest.info.name
                      .toLowerCase()
                      .includes(search.toLowerCase());
                  });
                  setFilterRestaurant(data);
                }}
              >
                Search
              </button>
              <input
                type="text"
                className="p-2 border-2 border-black"
                value={userData}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-evenly">
            {filterRestaurant.map((data, index) => {
              return (
                <Link
                  to={"restaurant/" + data.info.id}
                  target="_black"
                  key={index}
                >
                  {data.info.veg ? (
                    <VegRestaurantCard
                      key={data.info.id}
                      imgId={data.info.cloudinaryImageId}
                      restName={data.info.name}
                      cuisines={data.info.cuisines}
                      rating={data.info.avgRating}
                      cost={data.info.costForTwo}
                    />
                  ) : (
                    <Card
                      key={data.info.id}
                      imgId={data.info.cloudinaryImageId}
                      restName={data.info.name}
                      cuisines={data.info.cuisines}
                      rating={data.info.avgRating}
                      cost={data.info.costForTwo}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
