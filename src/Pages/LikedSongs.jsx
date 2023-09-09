import React, { useEffect } from "react";

const LikedSongs = () => {
  const token = localStorage.getItem("token");

  const jwtToken = token;
  const projectID = "22pghva8m0p8";

  const apiUrl =
    "https://academics.newtonschool.co/api/v1/music/favorites/like";
  const headers = {
    Authorization: `Bearer ${jwtToken}`,
    projectID: projectID,
    appType: "music",
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
        // Handle the data here
        console.log("Data from the API:", data);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }, []);

  return (
    <>
      <h1 style={{color:"white"}}>Favourite Songs</h1>
     
    </>
  );
};

export default LikedSongs;
