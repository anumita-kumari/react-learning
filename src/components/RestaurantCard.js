const RestaurantCard = (props) => {
  //console.log(resName);
  const image_URL = "https://media-assets.swiggy.com/swiggy/image/upload/";
  const {
    name,
    cuisines,
    costForTwo,
    avgRatingString,
    sla,
    cloudinaryImageId,
  } = props?.res;
  return (
    <div className="restaurant-card">
      <img className="res-logo" alt="" src={image_URL + cloudinaryImageId} />
      <h4>{name}</h4>
      <h5>Cusines: {cuisines.join(", ")}</h5>
      <h5>{avgRatingString} Stars</h5>
      <h5>{costForTwo}</h5>
      <h5>{sla.slaString}</h5>
    </div>
  );
};
export default RestaurantCard;
