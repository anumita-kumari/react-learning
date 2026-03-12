import { image_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  //console.log(resName);

  const {
    name,
    cuisines,
    costForTwo,
    avgRatingString,
    sla,
    cloudinaryImageId,
  } = props?.res;
  return (
    <div>
      <img
        className="h-[155px] w-60 rounded-lg"
        alt=""
        src={image_URL + cloudinaryImageId}
      />
      <h4>{name}</h4>
      <h5>Cusines: {cuisines.join(", ")}</h5>
      <h5>{avgRatingString} Stars</h5>
      <h5>{costForTwo}</h5>
      <h5>{sla.slaString}</h5>
    </div>
  );
};

export const withPromotedLabel = () => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props}></RestaurantCard>
      </div>
    );
  };
};
export default RestaurantCard;
