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
import { Menu, MenuItem } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Button from "@mui/material/Button";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogin, name } = useSelector((state) => state.login);
  const [searchInput, setSearchInput] = useState("");
  const [logoutAlertOpen, setLogoutAlertOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    if (!isLogin) {
      navigate("/login");
    } else {
      setAnchorEl(event.currentTarget);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setUpdateFalse();
  }, []);

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };
  const navigateHome = () => {
    window.location.reload();
  };

  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to logout?");
    if (confirmed) {
      // Show the logout confirmation alert
      setLogoutAlertOpen(true);
    }
  };

  const handleCloseLogoutAlert = () => {
    // Close the logout confirmation alert
    setLogoutAlertOpen(false);
  };

  const handleConfirmLogout = () => {
    // Perform the logout action here
    window.location.reload();
  };
  // const handleLogout = () => {
  //   const confirmed = window.confirm("Are you sure you want to logout?");
  //   if (confirmed) {
  //     window.location.reload();
  //   }
  // };
  const updatePass = () => {
    navigate("/update");
  };
  const handleAll = () => {
    navigate("/");
  };
  const handleTrending = () => {
    navigate("/trending");
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
      {logoutAlertOpen && (
        <Alert
          open={logoutAlertOpen}
          onClose={handleCloseLogoutAlert}
          severity="warning"
          variant="outlined"
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <AlertTitle>Logout Confirmation</AlertTitle>
          Are you sure you want to logout?
          <Button onClick={handleCloseLogoutAlert} color="inherit" size="small">
            Cancel
          </Button>
          <Button onClick={handleConfirmLogout} color="inherit" size="small">
            Logout
          </Button>
        </Alert>
      )}
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
          <SearchIcon
            title="Search"
            onClick={handleSearch}
            className="searchIcon"
          />
        </div>

        <div>
          <SubscriptionModal />
        </div>
        <div title="Favourite Songs" onClick={() => navigate("/liked")}>
          🤍
        </div>
        <div
          title="Login"
          className="loginBtn"
          onClick={handleClick}
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <PersonIcon style={{ marginLeft: 20, cursor: "pointer" }} />
        </div>
        {isLogin && (
          <Menu
            id="demo-positioned-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem>Welcome:🎉{name}🎉 </MenuItem>
            <MenuItem onClick={updatePass}>Update Password</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        )}
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
        <div onClick={() => navigate("/topAlbum")}>Top Album</div>
        <div onClick={handdleArtistImg}>Top Artist</div>
      </nav>
    </>
  );
};

export default Navbar;
