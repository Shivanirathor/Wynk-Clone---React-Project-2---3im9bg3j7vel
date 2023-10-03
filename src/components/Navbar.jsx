import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import Logo from "../assets/logo.jpeg";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import SubscriptionModal from "./SubscriptionModal ";
import { useDispatch, useSelector } from "react-redux";
import { clearUserData} from "../redux/loginSlice";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Menu,
  MenuItem,
  Slide,
} from "@mui/material";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import {
  clrAddToRecent,
  clrMusicPlayer,
  getExcitedSong,
  getHappySong,
  getRomanticSong,
  getSadSong,
  getSearch,
} from "../redux/songsSlice";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogin, name } = useSelector((state) => state.login);
  const [searchInput, setSearchInput] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [logoutAlertOpen, setLogoutAlertOpen] = useState(false);
  const open = Boolean(anchorEl);

  const navbar = document.querySelector(".navbar");
  let prevScrollPos = window.pageYOffset;
  window.addEventListener("scroll", () => {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      navbar.style.transform = "translateY(0)";
    } else {
      navbar.style.transform = "translateY(-100%)";
    }
    prevScrollPos = currentScrollPos;
  });

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

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };
  const navigateHome = () => {
    dispatch(clrAddToRecent());
    dispatch(clrMusicPlayer());
  };
  const handleLikedSaved = () => {
    if (isLogin) {
      navigate("/liked");
    } else {
      navigate("/login");
    }
  };

  const handleLogout = () => {
    setLogoutAlertOpen(true);
  };

  const handleCloseLogoutAlert = () => {
    setLogoutAlertOpen(false);
  };

  const handleConfirmLogout = () => {
    dispatch(clearUserData());
    setLogoutAlertOpen(false);
    toast.success("Logged out successfully!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

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
  };
  const handleSadSongs = () => {
    dispatch(getSadSong());
  };

  const handleExcitedSongs = () => {
    dispatch(getExcitedSong());
  };

  const handleHappySongs = () => {
    dispatch(getHappySong());
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
    navigate("/topArtist");
  };

  return (
    <>
      {logoutAlertOpen && (
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleCloseLogoutAlert}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Are you sure you want to logout?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseLogoutAlert}>Cancel</Button>
            <Button onClick={handleConfirmLogout}>Logout</Button>
          </DialogActions>
        </Dialog>
      )}
      <div className="navbar">
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

          <div className="subscription">
            <SubscriptionModal />
          </div>
          <div title="Favourite Songs" onClick={handleLikedSaved}>
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
              <MenuItem>Welcome : {name}</MenuItem>
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
      </div>
    </>
  );
};

export default Navbar;
