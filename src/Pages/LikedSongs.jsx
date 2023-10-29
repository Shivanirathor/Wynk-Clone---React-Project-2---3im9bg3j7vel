import React, { useEffect } from "react";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useDispatch, useSelector } from "react-redux";
import {getLike, getLikeShowData } from "../redux/songsSlice";

const LikedSongs = () => {
  const dispatch = useDispatch();
  const { likedSongs } = useSelector((state) => state.songs);

  useEffect(() => {
    dispatch(getLikeShowData());
  }, []);

  const handleDeleteSong = (songId) => {
    dispatch(getLike(songId));
    dispatch(getLikeShowData());
  };
  return (
    <>
      <h1
        style={{
          color: "white",
          textAlign: "center",
          fontSize: 40,
          display: "flex",
          justifyContent: "center",
          margin: "40px",
          textShadow:"2px 4px 3px red",
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <p style={{ color: "white" }}>{song.title}</p>
                <RemoveCircleIcon
                  title="Remove Song"
                  onClick={() => handleDeleteSong(song._id)}
                  style={{ cursor: "pointer", color: "white" }}
                />
              </div>
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
