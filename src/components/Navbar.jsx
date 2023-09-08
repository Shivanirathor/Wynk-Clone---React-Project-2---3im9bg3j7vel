import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import Logo from "../assets/logo.jpeg";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import SubscriptionModal from "./SubscriptionModal ";
import { useDispatch, useSelector } from "react-redux";
import { setUpdateFalse } from "../redux/loginSlice";
import { getSearch, getTrendingSongsList } from "../redux/songsSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
  const handleAll=()=>{
   navigate("/")
  }
  const handleTrending = () => {
   dispatch(getTrendingSongsList())
  };
  const handleSearch = () => {
    dispatch(getSearch(searchInput));
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
          <SearchIcon onClick={handleSearch} />
        </div>

        <div>
          <SubscriptionModal />
        </div>

        <div onClick={login} className="loginBtn">
          <PersonIcon
            style={{ marginLeft: 20, cursor: "pointer" }}
            onClick={toggleDropdown}
          />
          <span style={{ textAlign: "center" }}>
            Welcome
            <br />
            🎉{name}🎉
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
        <div onClick={handleAll}>All</div>
        <div onClick={handleTrending}>Trending</div>
        <div>Old Song</div>
        <div>New Songs</div>
        <div></div>
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
        <div>Top Artist</div>
        <select>
          <option value="Party Songs">Top Playlists</option>
        </select>
        <div>Podcast</div>
      </nav>
    </>
  );
};

export default Navbar;
