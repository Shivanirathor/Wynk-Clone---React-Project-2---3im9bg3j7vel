import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h2>Best way to Listen to Music!</h2>
        <p>Don’t forget to install Wynk Music on your mobile phones</p>
        <div className="download-links">
          <a href="android-download-link">android download</a>
          <a href="ios-download-link">ios download</a>
        </div>
      </div>

      <div className="footer-section">
        <h2>LATEST SONGS</h2>
        <p>Chaleya (From "Jawan") | Jamnapaar | Gone Girl | ...</p>
      </div>

      <div className="footer-section">
        <h2>REGIONAL PLAYLISTS</h2>
        <p>New Bengali Songs | New Bhojpuri Songs | New English Songs | ...</p>
      </div>

      <div className="footer-section">
        <h2>TRENDING SONGS</h2>
        <p>Heeriye (feat. Arijit Singh) | Zihaal e Miskin | Hukum - Thalaivar Alappara ...</p>
      </div>

      <div className="footer-section">
        <h2>TOP ARTISTS</h2>
        <p>Guru Randhawa | Arijit Singh | Atif Aslam | ...</p>
      </div>

      <div className="footer-section">
        <h2>LATEST ALBUMS</h2>
        <p>Speak Now (Taylor's Version) | OMG 2 | Vikram Original Motion Picture Soundtrack ...</p>
      </div>

      <div className="footer-section">
        <h2>EXPLORE MUSIC GENRES</h2>
        <p>Rock Songs | Patriotic songs | Sufi Music | ...</p>
      </div>

      <div className="footer-section">
        <h2>OLD SONGS</h2>
        <p>Old Songs | Old Hindi Songs | Old English Songs | ...</p>
      </div>

      <div className="footer-section">
        <h2>SONGS WITH LYRICS</h2>
        <p>Coca Cola | Bom Diggy Diggy | Machayenge | ...</p>
      </div>

      <div className="footer-section">
        <h2>WYNK TOP HITS</h2>
        <p>Top 20 Bollywood Songs | Wynk Top 100 Songs | ...</p>
      </div>

      <div className="footer-section">
        <h2>DEVOTIONAL SONGS</h2>
        <p>Ganesh Ji Ki Aarti | Laxmi Ji Ki Aarti | Shri Hanuman Chalisa | ...</p>
      </div>

      <div className="footer-section">
        <h2>JOIN WYNK FOR ARTISTS</h2>
        <p>Wynk Studio | Wynk Studio for Artists</p>
      </div>

      <div className="footer-section">
        <div className="footer-links">
          <a href="#">ABOUT US</a>
          <a href="#">PRIVACY POLICY</a>
          <a href="#">TERMS OF USE</a>
          <a href="#">CONTACT US</a>
          <a href="#">HELLOTUNES</a>
        </div>
        <p>
          Wynk Music is the one-stop music app for the latest to the greatest songs that you love. Play your favourite music online for free or download mp3. Enjoy from over 22 Million Hindi, English, Bollywood, Regional, Latest, Old songs and more.
        </p>
        <p>2023 © All rights reserved | Airtel Digital Limited</p>
        <div className="social-icons">
          <a href="#" className="icon-link"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#" className="icon-link"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#" className="icon-link"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#" className="icon-link"><FontAwesomeIcon icon={faYoutube} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
