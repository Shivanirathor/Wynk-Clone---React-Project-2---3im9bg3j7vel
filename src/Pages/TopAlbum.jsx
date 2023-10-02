import React, { useEffect, useState } from "react";
import "../styles/Trending.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function TopAlbum() {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    fetch("https://academics.newtonschool.co/api/v1/music/album", {
      headers: {
        projectId: "22pghva8m0p8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const limitedData = data.data.slice(10, 30);
        setTrending(limitedData);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);
 
  return (
    <div>
      <Navbar />
      <div className="trending-song">
        <div className="item2">
          <div className="top-menu">
            <h2>Top Album</h2>
          </div>
          <div className="main-menu">
            <table>
              <thead>
                <tr>
                  <th>Track</th>
                  <th>Album</th>
                  <th>Artist</th>
                </tr>
              </thead>
              <tbody>
                {trending.map((song, index) => (
                  <tr className="table-row" key={song._id}>
                    <td>
                      <img
                        className="top-img"
                        src={song.image}
                        alt="song-img"
                        width={100}
                      />
                    </td>
                    <td>{song.title}</td>
                    <td>
                      {song.artists.map((artist) => artist.name).join(", ")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TopAlbum;
