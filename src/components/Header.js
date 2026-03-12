import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnLogin, setBtnLogin] = useState("Logout");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex bg-green-300">
      <div className="w-30">
        <img className="w-32" alt="logo" src={LOGO_URL} />
      </div>
      <div className="flex ml-auto">
        <ul className="flex items-center gap-4">
          <li className="px-4">
            Online Status: {onlineStatus === true ? "🟢" : "🔴"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">Cart</li>
          <li className="px-4">
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
