import React, { useEffect, useState } from "react";
import "../styles/Trending.css";
import trendingimg from "../assets/trending.jpeg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Trending() {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    fetch("https://academics.newtonschool.co/api/v1/music/song", {
      headers: {
        projectId: "22pghva8m0p8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const limitedData = data.data.slice(0, 20);
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
        <div className="item1">
          <img src={trendingimg} alt="trend" />
        </div>
        <div className="item2">
          <div className="top-menu">
            <h2>Trending in Hindi</h2>
            <div className="button-list">
              <button className="play-btn">Play Songs</button>
              <button className="follow-btn">Follow</button>
            </div>
          </div>
          <div className="main-menu">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Track</th>
                  <th>Album</th>
                  <th>Artist</th>
                  <th>Mood</th>
                </tr>
              </thead>
              <tbody>
                {trending.map((song, index) => (
                  <tr className="table-row" key={song._id}>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        className="trending-img"
                        src={song.thumbnail}
                        alt="song-img"
                      />
                    </td>
                    <td>{song.title}</td>
                    <td>
                      {song.artist.map((artist) => artist.name).join(", ")}
                    </td>
                    <td>{song.mood}</td>
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

export default Trending;
