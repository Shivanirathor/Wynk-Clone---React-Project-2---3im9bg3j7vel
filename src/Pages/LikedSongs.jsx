import React, { useEffect, useState } from "react";

const LikedSongs = () => {
  const [likedData, setLikedData] = useState([]);
  const token = localStorage.getItem("token");

  const jwtToken = token;
  const projectID = "22pghva8m0p8";

  const apiUrl =
    "https://academics.newtonschool.co/api/v1/music/favorites/like";
  const headers = {
    Authorization: `Bearer ${jwtToken}`,
    projectID: projectID,
  };

  useEffect(() => {
    fetch(apiUrl, {
      method: "GET",
      headers: headers,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to like the song.");
        }
      })
      .then((data) => {
        console.log("Data from the API:", data);
        setLikedData(data.data.songs);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }, []);

  return (
    <>
      <h1
        style={{
          color: "white",
          textAlign: "center",
          fontSize: 50,
          margin: 20,
        }}
      >
        Favourite Songs
      </h1>
      <div className="liked-container">
        {likedData.length > 0 ? (
          likedData.map((song, index) => (
            <div key={index} className="image">
              <img
                src={song.thumbnail}
                alt={song.title}
                width={200}
                height={210}
              />
              <p style={{color:"white"}}>{song.title}</p>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default LikedSongs;
