import RestaurantCard from "./RestaurantCard";

import { restaurants } from "../utils/data";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";

export const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5794423&lng=85.143892&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    console.log(json);
    console.log(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
    );
    setListOfRestaurants(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
    );
    setFilteredRestaurants(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
    );
  };

  return filteredRestaurants.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div>
      <div className="search">
        <input
          className=""
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const filteredList = listOfRestaurants.filter((res) =>
              res?.info?.name.toLowerCase().includes(searchText.toLowerCase()),
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Search
        </button>
        <button
          className="btn-top-rated"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res?.info.avgRating > 4.2,
            );
            console.log(filteredList);
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        {}
      </div>
      <div className="restaurant-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant?.info.id}
            res={restaurant?.info}
          ></RestaurantCard>
        ))}
      </div>
    </div>
  );
};
