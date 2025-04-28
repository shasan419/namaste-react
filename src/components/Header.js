import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const isOnline = useOnlineStatus();
  const {loggedInUser,setUserName} = useContext(UserContext);

  return (
    <div className="flex justify-between items-center p-2 m-2 border-1 border-amber-600 rounded-xl">
      <div className="flex items-center">
        <img className="w-26" src={LOGO_URL} />
        <h1 className="text-amber-600">Food App {isOnline ? <sup className="text-green-600 ">Online</sup> : <sup className="text-red-600">Offline</sup>}</h1>
      </div>
      <div>        
        <ul className="flex justify-between items-center p-2 m-2">
          <li className="px-4 cursor-pointer"><Link to="/">Home</Link></li>
          <li className="px-4 cursor-pointer"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4 cursor-pointer"><Link to="/about">About me</Link></li>
          <li className="px-4 cursor-pointer"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4 cursor-pointer">Cart</li>
          <li className="px-4">
            <button
              className="m-2 text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
              // className={btnName === "Login"? "rounded-xl px-2 py-2 bg-amber-100 text-green-600 border hover:shadow-2xl border-green-600 cursor-pointer": "bg-amber-100 rounded-xl px-2 py-2 text-red-600 cursor-pointer border hover:shadow-2xl border-amber-600"}
              onClick={() => {
                if (btnName === "Login"){
                  setBtnName("Logout");
                  setUserName("Hasan Shaikh")
                } 
                else {
                  setBtnName("Login");
                  setUserName("")
                } 
              }}
            >
              {btnName}
            </button>
          </li>
          <li>{loggedInUser}</li>
        </ul>
        </div>
    </div>
  );
};

export default Header;
