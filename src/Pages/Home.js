import React, { useEffect, useState } from "react";
import Card, { VegRestaurant } from "../components/Card";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function Home() {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  // const [topRestaurant, setTopRestaurant] = useState([]);
  console.log("listOfRestaurant", listOfRestaurant.length);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.204435244483125&lng=73.10869988054037&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    console.log("jsondata", jsonData);
    const restList =
      jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurant(restList);
    setFilterRestaurant(restList);
  };
  console.log("filterRestaurant", filterRestaurant);

  const VegRestaurantCard = VegRestaurant(Card);
  return (
    <>
      {listOfRestaurant.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="home">
          <div className="m-10 text-xl">
            <h1>Top restaurant in Mumbai</h1>
          </div>
          <div className="Home-container">
            <div className="flex items-center">
              <button
                className="m-4 px-4 py-3 bg-orange-300"
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
                  className="px-4 py-2 m-3 bg-orange-300 rounded-lg"
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
              </div>
            </div>
            <div className="flex flex-wrap">
              {filterRestaurant.map((data) => {
                return (
                  <Link to={"restaurant/" + data.info.id} target="_black">
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
      )}
    </>
  );
}

export default Home;
