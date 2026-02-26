import React from "react";
import ReactDOM from "react-dom/client";
import { restaurants } from "./data";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          className="logo-img"
          alt="logo"
          src="https://thumbs.dreamstime.com/b/food-delivery-logo-design-template-134749604.jpg"
        />
      </div>
      <div className="navigation-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const resList = restaurants;
console.log(resList[0].info.name);
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
const Body = () => {
  return (
    <div>
      <div className="search">Search</div>
      <div className="restaurant-container">
        {/* <RestaurantCard res={resList[0]} /> */}
        {resList.map((restaurant) => (
          <RestaurantCard
            key={restaurant?.info.id}
            res={restaurant?.info}
          ></RestaurantCard>
        ))}
      </div>
    </div>
  );
};
const Footer = () => {
  return <div className="footer"></div>;
};
const AppLayout = () => {
  return (
    <div className="main">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
