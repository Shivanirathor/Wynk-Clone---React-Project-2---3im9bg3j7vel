import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import Logo from "../assets/logo.jpeg";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import SubscriptionModal from "./SubscriptionModal ";
import { useSelector } from "react-redux";
import { setUpdateFalse } from "../redux/loginSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const { isLogin, name } = useSelector((state) => state.login);
  const [searchInput, setSearchInput] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    setUpdateFalse();
  }, []);

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };
  const navigateHome = () => {
    window.location.reload();
  };
  const login = () => {
    if (!isLogin) {
      navigate("/signup");
    } else {
      toggleDropdown();
    }
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to logout?");
    if (confirmed) {
      window.location.reload();
    }
  };
  const updatePass = () => {
    navigate("/update");
  };
  

  return (
    <>
      <nav className="nav-1">
        <div className="logoText" onClick={navigateHome}>
          <img src={Logo} alt="img" />
          <h2>Wynk Music</h2>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="  Search Songs"
            value={searchInput}
            onChange={handleChange}
          />
          <SearchIcon />
        </div>

        <div>
          <SubscriptionModal />
        </div>

        <div onClick={login} className="loginBtn">
          <PersonIcon
            style={{ marginLeft: 20, cursor: "pointer" }}
            onClick={toggleDropdown}
            />
          <span style={{ textAlign:"center"}}>
              Welcome
            <br />🎉{name}🎉
          </span>
          {isDropdownOpen && (
            <div className="dropdown">
              <button onClick={handleLogout}>Logout</button>
              <button onClick={updatePass}>Update Password</button>
            </div>
          )}
        </div>
      </nav>
      {/* ================================ */}
      <nav className="nav-2">
        <a href="#">All</a>
        <a href="#">Trending</a>
        <a href="#">Old Song</a>
        <a href="#">New Songs</a>
        <a href="#"></a>
        <select>
          <option value="Party Songs">Moods & Genre</option>
          <option value="Party Songs">Party Songs</option>
          <option value="Party Songs">Dance Songs</option>
          <option value="Party Songs">Bollywood Songs</option>
          <option value="Party Songs">Romantic Songs</option>
          <option value="Party Songs">90's Hits</option>
          <option value="Party Songs">Ghazals</option>
          <option value="Party Songs">Bhakti Songs</option>
          <option value="Party Songs">loFi Songs</option>
        </select>
        <select>
          <option value="Party Songs">Top Album</option>
          <option value="Party Songs">Party Songs</option>
          <option value="Party Songs">Dance Songs</option>
        </select>
        <a href="">Top Artist</a>
        <select>
          <option value="Party Songs">Top Playlists</option>
        </select>
        <a href="">Podcast</a>
      </nav>
    </>
  );
};

export default Navbar;
