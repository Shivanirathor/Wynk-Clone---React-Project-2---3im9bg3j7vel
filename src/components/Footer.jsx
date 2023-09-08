import React from "react";
import "../styles/Footer.css";
import Logo from "../assets/logo.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div class="container">
        <div class="content">
          <h2>About Wynk Music</h2>
          <p>
            Wynk Music is a complete package that allows you free online music
            streaming, set caller tunes, listen to podcasts, download MP3 music
            offline, and much more! Since music is essentially the only thing
            that can truly understand a person, we consistently offer our
            audience the ideal blend of MP3 Songs by their favourite artists and
            of versatile genres.
          </p>
        </div>

        <div class="content">
          <h2>Play & Download FREE MP3 Songs in all languages</h2>
          <p>
            One of the unique features of Wynk Music is that it offers users the
            ability to stream music in multiple regional languages, including
            Hindi, Punjabi, Bengali, Tamil, Telugu, and more. Also, users of the
            app can download MP3 songs for offline listening. This online music
            platform provides access to additional features such as offline
            listening, high-quality audio, and exclusive content.
          </p>
        </div>
        <div class="content">
          <h2>Wynk Music – One Stop Destination for Offline & Online Music!</h2>
          <p>
            Wynk Music offers users access to a vast library of music, including
            Indian and international tracks across various genres like
            Bollywood, Punjabi, pop, rock, and more. We have made online music
            streaming simple, fun, and all about you! So, what’s the wait for,
            discover and listen to millions of songs, playlists, podcasts &
            download MP3 songs on any device including mobile for free
            exclusively on Wynk Music. Keep Wynking!
          </p>
        </div>
      </div>
      <div className="footer-section footerImg">
        <h2>
          {" "}
          <img src={Logo} alt="img" width={50} />
          Best way to Listen to Music!
        </h2>
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
        <p>
          Heeriye (feat. Arijit Singh) | Zihaal e Miskin | Hukum - Thalaivar
          Alappara ...
        </p>
      </div>

      <div className="footer-section">
        <h2>TOP ARTISTS</h2>
        <p>Guru Randhawa | Arijit Singh | Atif Aslam | ...</p>
      </div>

      <div className="footer-section">
        <h2>LATEST ALBUMS</h2>
        <p>
          Speak Now (Taylor's Version) | OMG 2 | Vikram Original Motion Picture
          Soundtrack ...
        </p>
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
        <p>
          Ganesh Ji Ki Aarti | Laxmi Ji Ki Aarti | Shri Hanuman Chalisa | ...
        </p>
      </div>

      <div className="footer-section">
        <h2>JOIN WYNK FOR ARTISTS</h2>
        <p>Wynk Studio | Wynk Studio for Artists</p>
      </div>
      <div className="download-links">
        <a href="https://www.apple.com/in/app-store/" className="download-link">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq3Srh1hSfdtXFZXcqzeNSSgVex0k2kB6mpw&usqp=CAU"
            alt="iOS Download"
          />
        </a>
        <a href="https://shorturl.at/bfFU6" className="download-link">
          <img
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
            alt="Android Download"
          />
        </a>
      </div>
      <div className="footer-section">
        <div className="footer-links">
          <hr />
          <a href="#">ABOUT US</a>
          <a href="#">PRIVACY POLICY</a>
          <a href="#">TERMS OF USE</a>
          <a href="#">CONTACT US</a>
          <a href="#">HELLOTUNES</a>
          <hr />
        </div>
        <p>
          Wynk Music is the one-stop music app for the latest to the greatest
          songs that you love. Play your favourite music online for free or
          download mp3. Enjoy from over 22 Million Hindi, English, Bollywood,
          Regional, Latest, Old songs and more.
        </p>
        <p>2023 © All rights reserved | Airtel Digital Limited</p>

        <div className="social-icons">
          <div>
            ABOUT US| PRIVACY POLICY| TERMS OF USE| CONTACT US| HELLOTUNES
          </div>
          <a href="https://www.facebook.com/" className="icon-link">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://twitter.com/" className="icon-link">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.instagram.com/" className="icon-link">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.youtube.com/" className="icon-link">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
