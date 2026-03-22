import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { AppContext } from "../App";
import { useContext } from "react";
import { FaHome, FaImages, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";


function Header() {
  const { user } = useContext(AppContext);

  return (
    <div className="App-Header">
      <h1 className="main-Header">
        U.M Interiors
      </h1>

      <ul>
        <li >
          <NavLink to="/">
            <FaHome className="icon" /> Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/gallery">
            <FaImages className="icon" /> Gallery
          </NavLink>
        </li>
        {user?.email ? (
          <>
            <li>
              <NavLink to="/logout"><FaSignOutAlt className="icon" /> Logout</NavLink>
            </li>
          </>
        ) : (
          <li>
            <NavLink to="/login">
              <FaSignInAlt className="icon" /> Login
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Header;