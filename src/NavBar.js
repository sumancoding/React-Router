// Using NavLink component for anchor, not (a) tags. This is better than link allowing us to style it
// instaed of href use to for destination

import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav>
        <ul>
          {/*<li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>{" "}
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>*/}
          <li>
            <NavLink to="/" activeStyle={{ color: "red" }} exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeStyle={{ color: "red" }} exact>
              About
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/contact" activeStyle={{ color: "red" }} exact>
              Contact
            </NavLink>
            <li>
              <NavLink to="/post/mobile" activeStyle={{ color: "red" }} exact>
                Post
              </NavLink>
            </li>
            <li>
              <NavLink to="/post/mobile/1" activeStyle={{ color: "red" }} exact>
                Post with ID
              </NavLink>
            </li>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
