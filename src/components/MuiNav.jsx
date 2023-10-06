import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import ListItemIcon from "@mui/material/ListItemIcon";
import Avatar from "@mui/material/Avatar";
import Logout from "@mui/icons-material/Logout";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import Logo from "../assets/logo.jpeg";
// import SubscriptionModal from "./SubscriptionModal ";
// import LocalAtmIcon from "@mui/icons-material/LocalAtm";
// import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
// import { useDispatch, useSelector } from "react-redux";
import { getSearch } from "../redux/songsSlice";
import { useSelector } from "react-redux";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Menu,
  MenuItem,
  Slide,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
const pages = ["Manage Subscription", "My List"];
// const pages = [
//   { label: "Manage Subscription", icon: <LocalAtmIcon /> },
//   { label: "My List", icon: <LibraryMusicIcon /> },
// ];
// const settings = ["Username", "Update Password", "Logout"];
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function MuiNav() {
    const navigate = useNavigate();
  const { isLogin, name } = useSelector((state) => state.login);
  const [searchInput, setSearchInput] = React.useState("");
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [logoutAlertOpen, setLogoutAlertOpen] = React.useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };
  const handleSearch = () => {
    dispatch(getSearch(searchInput));
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const updatePass = () => {
    console.log("update")
    navigate("/update");
  };
  const handleLogout = () => {
    console.log("signout")
    setLogoutAlertOpen(true)
  };
  const handleCloseLogoutDialog = () => {
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

  return (
    <>
       {logoutAlertOpen && (
        <Dialog
          open={logoutDialogOpen}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleCloseLogoutDialog}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Are you sure you want to logout?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseLogoutDialog}>Cancel</Button>
            <Button onClick={handleConfirmLogout}>Logout</Button>
          </DialogActions>
        </Dialog>
      )}
  
    <AppBar position="static">
   
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div className="logoText">
            <img src={Logo} alt="img" />
          </div>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Wynk Music
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                  {page}
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Search value={searchInput}>
            <SearchIconWrapper>
              <SearchIcon sx={{ cursor: "pointer" }} onClick={handleSearch} />
            </SearchIconWrapper>
            <StyledInputBase
              onClick={handleChange}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box
            sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
          >
            <Tooltip title="Profile">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <PersonIcon />
              </IconButton>
            </Tooltip>
          </Box>
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
                  overflow: "visible",
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
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleClose}>
                <Avatar /> Welcome: {name}
              </MenuItem>
              <MenuItem onClick={updatePass}>
                <Avatar /> Update Password
              </MenuItem>
              <Divider />

              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Sign Out
              </MenuItem>
            </Menu>
          )}
        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
}
export default MuiNav;
