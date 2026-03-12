import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router";
import { MENU_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resData = useRestaurantMenu(resId);

  if (resData === null) return <ShimmerUI />;

  const { name, cuisines, avgRating, costForTwo, sla } =
    resData?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  // console.log("itemCards", itemCards);
  return (
    <div>
      <h1>{name}</h1>
      <h4>
        {cuisines.join(", ")} - {costForTwo}
      </h4>
      <h4>{avgRating} ⭐️ </h4>
      <h4>Delivery Time - {sla?.deliveryTime} minutes</h4>
      <h4>Menu</h4>
      <ul>
        {itemCards?.map((item) => (
          <li key={item.card?.info?.id}>
            {item.card?.info?.name} - Rs.
            {item.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
