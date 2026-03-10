import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnLogin, setBtnLogin] = useState("Logout");
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
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              className="login"
              onClick={() => {
                btnLogin === "Login"
                  ? setBtnLogin("Logout")
                  : setBtnLogin("Login");
              }}
            >
              {btnLogin}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
