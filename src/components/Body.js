import RestaurantCard from "./RestaurantCard";

import { restaurants } from "../../data";
import { useState } from "react";

const resList = restaurants;
export const Body = () => {
  let [listOfRestaurants, setListOfRestaurants] = useState(restaurants);
  return (
    <div>
      <div className="search">
        <button
          className="btn-top-rated"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res?.info.avgRating > 4,
            );
            console.log(filteredList);
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        {}
      </div>
      <div className="restaurant-container">
        {/* <RestaurantCard res={resList[0]} /> */}
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant?.info.id}
            res={restaurant?.info}
          ></RestaurantCard>
        ))}
      </div>
    </div>
  );
};
