import { NavLink } from "react-router-dom";
import "./NavBar.css";

/*define the NaveBar component */
function NavBar() {
    return (
        <nav>
            <NavLink
                to="/"
                 /* add styling to Navlink */
                 className="nav-link"
        >
            Home
            </NavLink>
            <NavLink
                to="/about"
                className="nav-link"
        >
            About
            </NavLink>
            <NavLink
                to="/login"
                className="nav-link"
        >
            Login
            </NavLink>
        </nav>
    );
};

export default NavBar;
