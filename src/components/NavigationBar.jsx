// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   InputBase,
//   Menu,
//   MenuItem,
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import PersonIcon from "@mui/icons-material/Person";
// import MenuIcon from "@mui/icons-material/Menu";
// import { useNavigate } from "react-router-dom";
// import SubscriptionModal from "./SubscriptionModal ";
// import { useDispatch, useSelector } from "react-redux";
// import { clearUserData } from "../redux/loginSlice";
// import {
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   Slide,
//   Button,
// } from "@mui/material";
// import { toast } from "react-toastify";
// import {
//   clrAddToRecent,
//   clrMusicPlayer,
//   getExcitedSong,
//   getHappySong,
//   getRomanticSong,
//   getSadSong,
//   getSearch,
// } from "../redux/songsSlice";

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

// const NavigationBar = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { isLogin, name } = useSelector((state) => state.login);
//   const [searchInput, setSearchInput] = useState("");
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [logoutAlertOpen, setLogoutAlertOpen] = useState(false);
//   const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState(null);

//   const open = Boolean(anchorEl);
//   const openMobileMenu = Boolean(mobileMenuAnchorEl);

//   const handleClick = (event) => {
//     if (!isLogin) {
//       navigate("/login");
//     } else {
//       setAnchorEl(event.currentTarget);
//     }
//   };

//   const handleMobileMenuOpen = (event) => {
//     setMobileMenuAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const handleCloseMobileMenu = () => {
//     setMobileMenuAnchorEl(null);
//   };

//   const handleChange = (event) => {
//     setSearchInput(event.target.value);
//   };

//   const navigateHome = () => {
//     dispatch(clrAddToRecent());
//     dispatch(clrMusicPlayer());
//   };

//   const handleLikedSaved = () => {
//     if (isLogin) {
//       navigate("/liked");
//     } else {
//       navigate("/login");
//     }
//   };

//   const handleLogout = () => {
//     setLogoutAlertOpen(true);
//   };

//   const handleCloseLogoutAlert = () => {
//     setLogoutAlertOpen(false);
//   };

//   const handleConfirmLogout = () => {
//     dispatch(clearUserData());
//     setLogoutAlertOpen(false);
//     toast.success("Logged out successfully!", {
//       position: "bottom-right",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "dark",
//     });
//   };

//   const updatePass = () => {
//     navigate("/update");
//   };

//   const handleAll = () => {
//     navigate("/");
//   };

//   const handleTrending = () => {
//     navigate("/trending");
//   };

//   const handleSearch = () => {
//     dispatch(getSearch(searchInput));
//   };

//   const handleRomanticSongs = () => {
//     dispatch(getRomanticSong());
//   };

//   const handleSadSongs = () => {
//     dispatch(getSadSong());
//   };

//   const handleExcitedSongs = () => {
//     dispatch(getExcitedSong());
//   };

//   const handleHappySongs = () => {
//     dispatch(getHappySong());
//   };

//   const handleSelectChange = (event) => {
//     const selectedOption = event.target.value;
//     switch (selectedOption) {
//       case "Romantic Songs":
//         handleRomanticSongs();
//         break;
//       case "Sad Songs":
//         handleSadSongs();
//         break;
//       case "Excited Songs":
//         handleExcitedSongs();
//         break;
//       case "Happy Songs":
//         handleHappySongs();
//         break;
//       default:
//         console.log("Unknown option");
//     }
//   };

//   const handdleArtistImg = () => {
//     navigate("/topArtist");
//   };

//   return (
//     <>
//       {logoutAlertOpen && (
//         <Dialog
//           open={open}
//           TransitionComponent={Transition}
//           keepMounted
//           onClose={handleCloseLogoutAlert}
//           aria-describedby="alert-dialog-slide-description"
//         >
//           <DialogContent>
//             <DialogContentText id="alert-dialog-slide-description">
//               Are you sure you want to logout?
//             </DialogContentText>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleCloseLogoutAlert}>Cancel</Button>
//             <Button onClick={handleConfirmLogout}>Logout</Button>
//           </DialogActions>
//         </Dialog>
//       )}
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="open drawer"
//             sx={{ mr: 2 }}
//             onClick={handleMobileMenuOpen}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ display: { xs: "none", sm: "block" } }}
//             onClick={navigateHome}
//           >
//             Wynk Music
//           </Typography>
//           <div className="search">
//             <InputBase
//               placeholder="Search Songs"
//               value={searchInput}
//               onChange={handleChange}
//             />
//             <SearchIcon
//               title="Search"
//               onClick={handleSearch}
//               className="searchIcon"
//             />
//           </div>
//           <div className="subscription">
//             <SubscriptionModal />
//           </div>

//           <div title="Favourite Songs" onClick={handleLikedSaved}>
//             🤍
//           </div>
//           <div
//             title="Login"
//             className="loginBtn"
//             onClick={handleClick}
//             aria-controls={open ? "basic-menu" : undefined}
//             aria-haspopup="true"
//             aria-expanded={open ? "true" : undefined}
//           >
//             <PersonIcon style={{ marginLeft: 20, cursor: "pointer" }} />
//           </div>
//           <Menu
//             id="demo-positioned-menu"
//             anchorEl={anchorEl}
//             open={open}
//             onClose={handleClose}
//           >
//             <MenuItem>Welcome : {name}</MenuItem>
//             <MenuItem onClick={updatePass}>Update Password</MenuItem>
//             <MenuItem onClick={handleLogout}>Logout</MenuItem>
//           </Menu>
//         </Toolbar>
//       </AppBar>
//       <Menu
//         anchorEl={mobileMenuAnchorEl}
//         open={openMobileMenu}
//         onClose={handleCloseMobileMenu}
//       >
//         <MenuItem onClick={handleAll}>All</MenuItem>
//         <MenuItem onClick={handleTrending}>Trending</MenuItem>
//         <MenuItem onClick={handleRomanticSongs}>Romantic Songs</MenuItem>
//         <MenuItem onClick={handleSadSongs}>Sad Songs</MenuItem>
//         <MenuItem onClick={handleExcitedSongs}>Excited Songs</MenuItem>
//         <MenuItem onClick={handleHappySongs}>Happy Songs</MenuItem>
//         <MenuItem onClick={() => navigate("/topAlbum")}>Top Album</MenuItem>
//         <MenuItem onClick={handdleArtistImg}>Top Artist</MenuItem>
//       </Menu>
//     </>
//   );
// };

// //working
// export default NavigationBar;






//checking humburger
// import React, { useState } from "react";
// import "../styles/Navbar.css";
// import Logo from "../assets/logo.jpeg";
// import SearchIcon from "@mui/icons-material/Search";
// // import PersonIcon from "@mui/icons-material/Person";
// import MenuIcon from "@mui/icons-material/Menu"; // Import the MenuIcon
// import { useNavigate } from "react-router-dom";
// import SubscriptionModal from "./SubscriptionModal ";
// import { useDispatch, useSelector } from "react-redux";
// import { clearUserData } from "../redux/loginSlice";
// import {
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   Menu,
//   MenuItem,
//   Slide,
// } from "@mui/material";
// import Button from "@mui/material/Button";
// import { toast } from "react-toastify";
// import {
//   clrAddToRecent,
//   clrMusicPlayer,
//   getExcitedSong,
//   getHappySong,
//   getRomanticSong,
//   getSadSong,
//   getSearch,
// } from "../redux/songsSlice";

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

// const NavigationBar = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { isLogin, name } = useSelector((state) => state.login);
//   const [searchInput, setSearchInput] = useState("");
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [logoutAlertOpen, setLogoutAlertOpen] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State to control mobile menu
//   const open = Boolean(anchorEl);

//   const navbar = document.querySelector(".navbar");
//   let prevScrollPos = window.pageYOffset;
//   window.addEventListener("scroll", () => {
//     const currentScrollPos = window.pageYOffset;
//     if (prevScrollPos > currentScrollPos) {
//       navbar.style.transform = "translateY(0)";
//     } else {
//       navbar.style.transform = "translateY(-100%)";
//     }
//     prevScrollPos = currentScrollPos;
//   });

//   const handleClick = (event) => {
//     if (!isLogin) {
//       navigate("/login");
//     } else {
//       setAnchorEl(event.currentTarget);
//     }
//   };

//   const handleMobileMenuOpen = () => {
//     setMobileMenuOpen(true);
//   };

//   const handleMobileMenuClose = () => {
//     setMobileMenuOpen(false);
//   };

//   const handleChange = (event) => {
//     setSearchInput(event.target.value);
//   };
//   const navigateHome = () => {
//     dispatch(clrAddToRecent());
//     dispatch(clrMusicPlayer());
//   };
//   const handleLikedSaved = () => {
//     if (isLogin) {
//       navigate("/liked");
//     } else {
//       navigate("/login");
//     }
//   };

//   const handleLogout = () => {
//     setLogoutAlertOpen(true);
//   };

//   const handleClose = () => {
//     setMobileMoreAnchorEl(null);
//   };
//   const handleCloseLogoutAlert = () => {
//     setLogoutAlertOpen(false);
//   };

//   const handleConfirmLogout = () => {
//     dispatch(clearUserData());
//     setLogoutAlertOpen(false);
//     toast.success("Logged out successfully!", {
//       position: "bottom-right",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "dark",
//     });
//   };

//   const updatePass = () => {
//     navigate("/update");
//   };
//   const handleAll = () => {
//     navigate("/");
//   };
//   const handleTrending = () => {
//     navigate("/trending");
//   };

//   const handleSearch = () => {
//     dispatch(getSearch(searchInput));
//   };

//   const handleRomanticSongs = () => {
//     dispatch(getRomanticSong());
//   };
//   const handleSadSongs = () => {
//     dispatch(getSadSong());
//   };

//   const handleExcitedSongs = () => {
//     dispatch(getExcitedSong());
//   };

//   const handleHappySongs = () => {
//     dispatch(getHappySong());
//   };

//   const handleSelectChange = (event) => {
//     const selectedOption = event.target.value;
//     switch (selectedOption) {
//       case "Romantic Songs":
//         handleRomanticSongs();
//         break;
//       case "Sad Songs":
//         handleSadSongs();
//         break;
//       case "Excited Songs":
//         handleExcitedSongs();
//         break;
//       case "Happy Songs":
//         handleHappySongs();
//         break;

//       default:
//         console.log("Unknown option");
//     }
//   };
//   const handdleArtistImg = () => {
//     navigate("/topArtist");
//   };

//   return (
//     <>
//       {logoutAlertOpen && (
//         <Dialog
//           open={open}
//           TransitionComponent={Transition}
//           keepMounted
//           onClose={handleCloseLogoutAlert}
//           aria-describedby="alert-dialog-slide-description"
//         >
//           <DialogContent>
//             <DialogContentText id="alert-dialog-slide-description">
//               Are you sure you want to logout?
//             </DialogContentText>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleCloseLogoutAlert}>Cancel</Button>
//             <Button onClick={handleConfirmLogout}>Logout</Button>
//           </DialogActions>
//         </Dialog>
//       )}
//       <div className="navbar">
//         <nav className="nav-1">
//           <div className="logoText" onClick={navigateHome}>
//             <img src={Logo} alt="img" />
//             <h2>Wynk Music</h2>
//           </div>
//           <div className="search">
//             <input
//               type="text"
//               placeholder="  Search Songs"
//               value={searchInput}
//               onChange={handleChange}
//             />
//             <SearchIcon
//               title="Search"
//               onClick={handleSearch}
//               className="searchIcon"
//             />
//           </div>

//           {/* Hamburger Icon for Mobile */}
//           <div className="hamburger-icon" onClick={handleMobileMenuOpen}>
//             <MenuIcon style={{ marginLeft: 20, cursor: "pointer" }} />
//           </div>

//           {isLogin && (
//             <Menu
//               id="demo-positioned-menu"
//               anchorEl={anchorEl}
//               open={open}
//               onClose={handleClose}
//             >
//               <MenuItem>Welcome : {name}</MenuItem>
//               <MenuItem onClick={updatePass}>Update Password</MenuItem>
//               <MenuItem onClick={handleLogout}>Logout</MenuItem>
//             </Menu>
//           )}
//         </nav>
//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="mobile-menu">
//             {/* Include Subscription and Liked buttons here */}
//             <div onClick={handleLikedSaved}>Liked</div>
//             <div>
//               <SubscriptionModal />
//             </div>
//           </div>
//         )}
//         {/* ================================ */}
//         <nav className="nav-2">{/* Rest of your code */}</nav>
//       </div>
//     </>
//   );
// };

// export default NavigationBar;

import React, { useState } from "react";
import "../styles/Navbar.css";
import Logo from "../assets/logo.jpeg";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { useNavigate } from "react-router-dom";
import SubscriptionModal from "./SubscriptionModal ";
import { useDispatch, useSelector } from "react-redux";
import { clearUserData } from "../redux/loginSlice";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Menu,
  MenuItem,
  Slide,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Button,
  Container,
} from "@mui/material";
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

const NavigationBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogin, name } = useSelector((state) => state.login);
  const [searchInput, setSearchInput] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [logoutAlertOpen, setLogoutAlertOpen] = useState(false);
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
  
  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };
  const navigateHome = () => {
    dispatch(clrAddToRecent());
    dispatch(clrMusicPlayer());
    navigate("/");
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
      <AppBar position="fixed">
        <Toolbar>
          <Container maxWidth="lg">
            <div className="logoText" onClick={navigateHome}>
              <img src={Logo} alt="img" />
              <Typography variant="h6">Wynk Music</Typography>
            </div>
          </Container>
          <div className="search">
            <Container maxWidth="lg">
              <InputBase
                placeholder="Search Songs"
                value={searchInput}
                onChange={handleChange}
                className="searchInput"
              />
            </Container>
            <IconButton
              title="Search"
              onClick={handleSearch}
              className="searchIcon"
            >
              <SearchIcon />
            </IconButton>
          </div>
          <Container maxWidth="lg">
            <div className="subscription">
              <SubscriptionModal />
            </div>
          </Container>
          {isLogin && (
            <IconButton
              title="Favourite Songs"
              onClick={handleLikedSaved}
              className="musicIcon"
            >
              <LibraryMusicIcon />
            </IconButton>
          )}
          <IconButton
            title="Login"
            className="loginBtn"
            onClick={handleClick}
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <PersonIcon style={{ marginLeft: 20 }} />
          </IconButton>
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
        </Toolbar>
      </AppBar>
      {/* Rest of your component */}
    </>
  );
};

export default NavigationBar;
