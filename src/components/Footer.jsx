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
          <img src={Logo} alt="img" width={60} />
        <h2>
       
          Best way to Listen to Music!
        <p>Don’t forget to install Wynk Music on your mobile phones</p>
        </h2>
     
      </div>

      <div className="footer-section">
        <h2>LATEST SONGS</h2>
        <p>
          Sarkaare | Keemti | Sab Rab | In Your Eyes Only | Aankhon Mein |
          Manmaani | JALSA 2.0 | Oonchi Oonchi Deewarein (From "Yaariyan 2") | O
          Piya | Doriyaan | Khidkiyaan | Mann Jogiya (From "Pyaar Hai Toh Hai")
          | Jaanu Na | Legacy | Jeetenge
        </p>
      </div>

      <div className="footer-section">
        <h2>REGIONAL PLAYLISTS</h2>
        <p>
          New Bengali Songs | New Bhojpuri Songs | New English Songs | New
          Haryanvi Songs | New Hindi Songs | New Kannada Songs | New Marathi
          Songs | New Punjabi Songs | New Tamil Songs | New Telugu Songs | New
          Odia Songs | New Rajasthani Songs | New Gujarati Songs | New Assamese
          Songs
        </p>
      </div>

      <div className="footer-section">
        <h2>TRENDING SONGS</h2>
        <p>
          Chaleya (From "Jawan") | Heeriye (feat. Arijit Singh) | Zihaal e
          Miskin | Haanji (From "Thank You For Coming") | Gone Girl | Yaar Ka
          Sataya Hua Hai | Phir Aur Kya Chahiye (From "Zara Hatke Zara Bachke")
          | Apna Bana Le | Guli Mata | Kya Loge Tum | Tum Kya Mile (From "Rocky
          Aur Rani Kii Prem Kahaani") | Dil Jhoom | Hukum - Thalaivar Alappara
          (From "Jailer") | Kesariya (From "Brahmastra") | Jaana Hai Toh Jaa
        </p>
      </div>

      <div className="footer-section">
        <h2>TOP ARTISTS</h2>
        <p>
          Guru Randhawa | Arijit Singh | Atif Aslam | Justin Bieber | Gulzar |
          Armaan Malik | Sidhu Moose Wala | Alan Walker | Udit Narayan | Sonu
          Nigam | Sid Sriram | Akhil | Darshan Raval | Shreya Ghoshal | Alka
          Yagnik
        </p>
      </div>

      <div className="footer-section">
        <h2>LATEST ALBUMS</h2>
        <p>
          Scarlet | Yaariyan 2 | Vikram Original Motion Picture Soundtrack |
          Shubh Vivah | Thallumaala | Pushpa - The Rise | Ninna Sanihake |
          Praktan | No Name | Bhavartha Mauli | Yuva Sarkar | Mal mahu jiban
          mati | GUTS
        </p>
      </div>

      <div className="footer-section">
        <h2>EXPLORE MUSIC GENRES</h2>
        <p>
          Rock Songs | Patriotic songs | Sufi Music | Ghazals | Workout Music |
          Devotional Songs | Sad Songs | DJ Songs
        </p>
      </div>

      <div className="footer-section">
        <h2>OLD SONGS</h2>
        <p>
          Old Songs | Old Hindi Songs | Old English Songs | Old Punjabi Songs |
          Old Telugu Songs | Old Tamil Songs | Old Bengali Songs | Old Malayalam
          Songs | Old Kannada Songs
        </p>
      </div>

      <div className="footer-section">
        <h2>SONGS WITH LYRICS</h2>
        <p>
          Coca Cola | Bom Diggy Diggy | Machayenge | Tera Yaar Hoon Main | Kar
          Gayi Chull (From "Kapoor & Sons (Since 1921)") | Morni Banke | Chalti
          Hai Kya 9 Se 12 | Hawayein
        </p>
      </div>

      <div className="footer-section">
        <h2>WYNK TOP HITS</h2>
        <p>
          Top 20 Bollywood Songs | Wynk Top 100 Songs | Top 20 English Songs |
          Trending Reels Songs
        </p>
      </div>

      <div className="footer-section">
        <h2>DEVOTIONAL SONGS</h2>
        <p>
          Ganesh Ji Ki Aarti | Laxmi Ji Ki Aarti | Shri Hanuman Chalisa | Shiv
          Bhajan | Gurbani | Gurbani Shabad | Islamic Songs | Jesus Songs |
          Christian Songs
        </p>
      </div>

      <div className="footer-section">
        <h2>JOIN WYNK FOR ARTISTS</h2>
        <p>Wynk Studio | Wynk Studio for Artists</p>
      </div>
      <div className="download-links">
        <a
          href="https://www.apple.com/in/app-store/"
          className="download-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq3Srh1hSfdtXFZXcqzeNSSgVex0k2kB6mpw&usqp=CAU"
            alt="iOS Download"
          />
        </a>
        <a
          href="https://shorturl.at/bfFU6"
          className="download-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
            alt="Android Download"
          />
        </a>
      </div>

      <div className="footer-section">
      

        <p className="footer-description">
          Wynk Music is the one-stop music app for the latest to the greatest
          songs that you love. Play your favorite music online for free or
          download mp3. Enjoy from over 22 Million Hindi, English, Bollywood,
          Regional, Latest, Old songs and more.
        </p>

        <p className="copyright">
          &copy; 2023 All rights reserved | Airtel Digital Limited
        </p>

        <div className="social-icons">
          <div className="footer-links">
            <a href="#">ABOUT US</a>
            <a href="#">PRIVACY POLICY</a>
            <a href="#">TERMS OF USE</a>
            <a href="#">CONTACT US</a>
            <a href="#">HELLOTUNES</a>
          </div>

          <a
            href="https://www.facebook.com/"
            className="icon-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://twitter.com/"
            className="icon-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://www.instagram.com/"
            className="icon-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.youtube.com/"
            className="icon-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
