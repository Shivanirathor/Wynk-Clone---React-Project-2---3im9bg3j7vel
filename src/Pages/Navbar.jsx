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
      <nav className="nav-1">
        <div className="logoText">
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
        <div className="subscription">
          <h2>$ Manage Subscription</h2>
        </div>

        <div className="user">
          <PersonIcon />
        </div>
        <div>
          <h2>Login</h2>
        </div>
      </nav>
      <nav className="nav-2">
           <a href="#">All</a>
           <a href="">Trending</a>
           <a href="">Old Song</a>
           <a href="">New Songs</a>
           <a href=""></a>
           <select >
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
