import React, { useState } from "react";
import "../styles/Navbar.css";
import Logo from "../assets/logo.jpeg";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { useNavigate } from "react-router-dom";
import SubscriptionModal from "./SubscriptionModal ";
import { useDispatch, useSelector } from "react-redux";
import { clearUserData } from "../redux/loginSlice";
import {
 
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Divider,
  ListItem,
  ListItemIcon,
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
import { Logout } from "@mui/icons-material";

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

  const handleLogin = (event) => {
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
  const openLogoutALert = () => {
    setLogoutAlertOpen(false);
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
          {isLogin && (
            <div
              className="music-list"
              title="Favourite Songs"
              onClick={handleLikedSaved}
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "10px",
              }}
            >
              <LibraryMusicIcon style={{ marginRight: "5px" }} />
              My Music
            </div>
          )}

          <div
            title="Login"
            className="loginBtn"
            onClick={handleLogin}
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <MenuIcon style={{ marginLeft: 20, cursor: "pointer" }} />
          </div>
          {isLogin && (
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  background: "rgb(30, 29, 29)",
                  color: "white",
                  padding: "20px 10px",

                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleClose}>
                <PersonIcon sx={{ marginRight: "10px", color: "white" }} />
                Welcome: {name}
              </MenuItem>
              <Divider />
              <MenuItem onClick={updatePass}>
                <UpgradeIcon sx={{ marginRight: "10px", color: "white" }} />
                Update Password
              </MenuItem>
              <MenuItem className="mobile_model">
                <SubscriptionModal />
              </MenuItem>
              <MenuItem className="mobile_myList" onClick={handleLikedSaved}>
                <ListItem>
                  <LibraryMusicIcon
                    sx={{ marginRight: "10px", color: "white" }}
                  />
                  My List
                </ListItem>
              </MenuItem>
              <MenuItem>
                <ArrowCircleDownIcon
                  sx={{ marginRight: "10px", color: "white" }}
                />
                <a
                  href="https://play.google.com/store/apps/details?id=com.bsbportal.music&hl=en&gl=US"
                  target="_blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Download App
                </a>
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <Logout
                    fontSize="small"
                    sx={{ marginLeft: "5px", color: "white" }}
                  />
                </ListItemIcon>
                Sign Out
              </MenuItem>
              <Divider sx={{ background: "white" }} />
              <MenuItem>
                <div
                  title="Playstore"
                  style={{
                    width: "200px",
                    fontSize: "11px",
                    alignItems: "center",
                  }}
                >
                  <h2>
                    <a
                      href="https://studio.wynk.in/"
                      target="_blank"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <MusicNoteIcon
                        sx={{ marginRight: "6px", color: "white" }}
                      />
                      Join Wynk for Artists
                    </a>
                  </h2>
                  <p>
                    Sign up as an Artist on Wynk Studio and
                    <p>release your original songs on Wynk.</p>
                  </p>
                </div>
              </MenuItem>
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
      {logoutAlertOpen && (
        <Dialog
          open={openLogoutALert}
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
    </>
  );
};

export default Navbar;
