import { useState, useEffect, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext"

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const  {loggedInUser} = useContext(UserContext);
 
  

  //  If no depedency array  => useEffect is called on every component render
  //  if depedency array ([]) is empty  => useEffect will call on intial render (just once)
  // if dependecy array is [btnName] => called everytime btnName is updated
  useEffect(() => {}, [btnName]);

  return (
    <div className="flex justify-between md:bg-amber-100 shadow-lg mb-2 sm:bg-amber-500">
      <div className="logo-container">
        <img className="w-20" src={LOGO_URL}></img>
      </div>

      <div className="felx items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
           
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
           <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
