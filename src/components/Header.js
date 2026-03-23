import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnLogin, setBtnLogin] = useState("Logout");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  const cartItem = useSelector((store) => store.cart.item);
  return (
    <div className="flex bg-green-100">
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
          <li className="px-4">
            <Link to="/cart">Cart - {cartItem?.length}</Link>
          </li>
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
          <li className="px-4">User:{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
