import React from "react";
import { Link, NavLink } from "react-router-dom"; //NavLink Allows us to create CSS. Better to use Navlink instead of Link

const NavBar = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "red" : "" };
            }}
          >
            {" "}
            Home
          </NavLink>{" "}
          {/* Way to change color when its active only */}
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "red" : "" };
            }}
          >
            {" "}
            About{" "}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact/Finland"
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "red" : "" };
            }}
          >
            {" "}
            Contact{" "}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact/Finland/1"
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "red" : "" };
            }}
          >
            {" "}
            Contact with id{" "}
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
