import { useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router";
import { MENU_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ItemCategory from "./ItemCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resData = useRestaurantMenu(resId);
  const [showList, setShowList] = useState(false);
  const [showIndex, setShowIndex] = useState(0);

  if (resData === null) return <ShimmerUI />;

  const { name, cuisines, avgRating, costForTwo, sla } =
    resData?.cards[2]?.card?.card?.info;

  const filteredListCat =
    resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );
  return (
    <div className="m-2 p-2 mx-auto w-6/12">
      <h1 className="font-bold text-2xl text-center">{name}</h1>
      <div className="m-2 p-2 border border-black text-center rounded-lg shadow-lg">
        <h4 className="font-bold text-sm">
          {avgRating} ⭐️ - {costForTwo}
        </h4>
        <h4 className="font-bold text-xs">{cuisines.join(", ")}</h4>
        <h4 className="font-bold text-xs">{sla?.deliveryTime} minutes</h4>
      </div>

      <h4 className="my-2 mx-auto from-neutral-300  text-center text-md">
        ↞ Menu ↠
      </h4>
      <hr className="h-px my-8 bg-slate-800 border-1" />

      <div>
        {filteredListCat.map((item, index) => (
          <ItemCategory
            key={item.card?.card?.title}
            items={item.card?.card}
            showList={index === showIndex ? true : false}
            setShowIndex={() => {
              setShowIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
