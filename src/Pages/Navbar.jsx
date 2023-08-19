import React, { useState } from "react";
import Logo from "../assets/logo.jpeg";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import "../styles/Navbar.css";
const Navbar = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <>
      <nav className="nav">
      <div className="logoText"><img src={Logo} alt="img" /><h2>Wynk Music</h2></div>
      <div className="search"><input type="text" placeholder="  Search Songs" value={searchInput} onChange={handleChange} /><SearchIcon /></div>
      <div className="subscription"><h2>Manage Subscription</h2></div>
     

      <div className="user"><PersonIcon /></div>
      <div><h2>Login</h2></div>
    
      </nav>
    </>
  );
};

export default Navbar;
