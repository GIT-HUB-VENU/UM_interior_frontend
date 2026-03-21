import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { AppContext } from "../App";
import { useContext } from "react";
function Header() {
  const { user } = useContext(AppContext);
  return (
    <div className="App-Header">
      <h1>U.M Interiors</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/gallery">Gallery</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>

      </ul>
    </div>
  );
}
export default Header;