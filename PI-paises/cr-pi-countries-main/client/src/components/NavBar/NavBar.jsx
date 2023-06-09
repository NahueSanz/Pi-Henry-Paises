import { Link, useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "./NavBar.css";

const Navbar = ({ setSearchResults }) => {
  const location = useLocation();

  const isHome = location.pathname === "/";
  const isSignIn = location.pathname === "/signin";

  if (isHome || isSignIn) {
    return null;
  }

  return (
    <nav>
      <ul>
        <li>
          <button className="btnBar">
            <Link to="/countries">Home</Link>
          </button>
        </li>
        <li>
          <button className="btnBar">
            <Link to="/countries/activities">Actividades</Link>
          </button>
        </li>
        <li>
          <SearchBar setSearchResults={setSearchResults} />
        </li>
        <li>
          <button className="btnBar">
            <Link to="/">Log Out</Link>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
