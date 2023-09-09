import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import Logo from "../assets/logo.jpeg";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import SubscriptionModal from "./SubscriptionModal ";
import { useDispatch, useSelector } from "react-redux";
import { setUpdateFalse } from "../redux/loginSlice";
import {
  getExcitedSong,
  getHappySong,
  getRomanticSong,
  getSadSong,
  getSearch,
} from "../redux/songsSlice";

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
  const handleAll = () => {
    navigate("/");
  };
  const handleTrending = () => {
    navigate("/trending");
    //  dispatch(getTrendingSongsList())
  };

  const handleSearch = () => {
    dispatch(getSearch(searchInput));
  };

  const handleRomanticSongs = () => {
    dispatch(getRomanticSong());
    console.log("Romantic Songs");
  };
  const handleSadSongs = () => {
    dispatch(getSadSong());
    console.log("Sad Songs");
  };

  const handleExcitedSongs = () => {
    dispatch(getExcitedSong());
    console.log("Excited Songs");
  };

  const handleHappySongs = () => {
    dispatch(getHappySong());
    console.log("Happy Songs");
  };

  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    switch (selectedOption) {
      case "Romantic Songs":
        handleRomanticSongs();
        break;
      case "Sad Songs":
        handleSadSongs();
        break;
      case "Excited Songs":
        handleExcitedSongs();
        break;
      case "Happy Songs":
        handleHappySongs();
        break;

      default:
        console.log("Unknown option");
    }
  };
  const handdleArtistImg = () => {
    console.log("topArtist");
    navigate("/topArtist");
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
        <div onClick={()=>navigate("/liked")}>WishList</div>
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

        <select onChange={handleSelectChange}>
          <option value="Moods & Genre">Moods & Genre</option>
          <option value="Romantic Songs">Romantic Songs</option>
          <option value="Sad Songs">Sad Songs</option>
          <option value="Excited Songs">Excited Songs</option>
          <option value="Happy Songs">Happy Songs</option>
        </select>
        <div>Top Album</div>
        <div onClick={handdleArtistImg}>Top Artist</div>
      </nav>
    </>
  );
};

export default Navbar;
