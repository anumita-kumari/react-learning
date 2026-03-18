import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import { RES_URL, swiggy_Menu_url } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

export const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { loggedInUser, setUserName } = useContext(UserContext);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(RES_URL);
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
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        OOPs!!! Looks Like You are Offline. Please connect to your internet
        connection!!!
      </h1>
    );
  const PromotedRestaurant = withPromotedLabel(RestaurantCard);
  return filteredRestaurants.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div>
      <div className="search">
        <input
          className="m-2 p-2 border border-black-100 rounded-md"
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="m-2 p-2 bg-slate-400 rounded-md"
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
          className="m-2 p-2 bg-slate-400 rounded-md"
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
        <input
          className="m-2 p-2 border border-black-100 rounded-md"
          type="text"
          value={loggedInUser}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        {}
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
            className="w-60 m-2 p-2 rounded-lg bg-slate-50 hover:bg-slate-100"
            key={restaurant?.info.id}
            to={"/restaurant/" + restaurant?.info.id}
          >
            {restaurant?.info?.avgRating > 4.5 ? (
              <PromotedRestaurant res={restaurant?.info} />
            ) : (
              <RestaurantCard res={restaurant?.info}></RestaurantCard>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
