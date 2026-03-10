import RestaurantCard from "./RestaurantCard";

import { restaurants } from "../utils/data";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";

export const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
    const json = await data.json();
    console.log(json);
    console.log(
      json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
    );
    setListOfRestaurants(
      json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
    );
    setFilteredRestaurants(
      json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
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
          <Link
            key={restaurant?.info.id}
            to={"/restaurant/" + restaurant?.info.id}
          >
            <RestaurantCard res={restaurant?.info}></RestaurantCard>
          </Link>
        ))}
      </div>
    </div>
  );
};
