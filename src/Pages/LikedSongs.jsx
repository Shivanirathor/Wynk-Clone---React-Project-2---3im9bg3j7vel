import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLikeShowData } from "../redux/songsSlice";

const LikedSongs = () => {
  const dispatch = useDispatch();
  const { likedSongs } = useSelector((state) => state.songs);

  useEffect(() => {
    dispatch(getLikeShowData());
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
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          textAlign: "center",
          cursor: "pointer",
          gap: "40px",
          marginLeft: "10rem",
        }}
      >
        {likedSongs?.length > 0 ? (
          likedSongs?.map((song, index) => (
            <div key={index}>
              <img
                style={{ borderRadius: "20px" }}
                src={song.thumbnail}
                alt={song.title}
                width={200}
                height={210}
              />

              <p style={{ color: "white" }}>{song.title}</p>
            </div>
          ))
        ) : (
          <p style={{ color: "white" }}>Loading...</p>
        )}
      </div>
    </>
  );
};

export default LikedSongs;
