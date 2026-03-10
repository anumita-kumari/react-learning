import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const [resData, setResData] = useState(null);
  const { resId } = useParams();
  console.log(resId);

  useEffect(() => {
    fetchData();
  }, []);

  const MENU_URL =
    "https://corsproxy.io/?url=https://namastedev.com/api/v1/listRestaurantMenu/123456";
  const fetchData = async () => {
    const data = await fetch(MENU_URL);
    const json = await data.json();
    setResData(json);
  };

  if (resData === null) return <ShimmerUI />;

  const { name, cuisines, avgRating, costForTwo, sla } =
    resData?.data?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resData.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  console.log("itemCards", itemCards);
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
