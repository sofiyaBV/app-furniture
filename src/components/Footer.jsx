import React from "react";
import s from "../style/footer.module.css";
import i_fecebook from "../assets/icon/i_fecebook.png";
import i_twitter from "../assets/icon/i_twiter.png";
import i_instagram from "../assets/icon/i_instagram.png";

export default function Footer() {
  return (
    <div>
      <div className={s.div}>
        <h2>Drile</h2>
        <div className={s.div_container}>
          <div>
            <ul>
              {"ABOUTS"}
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div>
            <ul>
              {"COMPANY"}
              <li>Explore World</li>
              <li>Trending Video</li>
              <li>Book a Trip</li>
              <li>Visit Gallery</li>
            </ul>
          </div>
          <div>
            <ul>
              {"USEFUL LINKS"}
              <li>Buy this theme</li>
              <li>Drile Landing</li>
              <li>Documentation</li>
              <li>Video tutorial</li>
            </ul>
          </div>
          <div>
            <ul>
              {"FOLLOW US"}
              <li>
                <div className={s.div_follow}>
                  <img src={i_fecebook} alt="Fecebook" />
                  <p>Fecebook</p>
                </div>
              </li>
              <li>
                <div className={s.div_follow}>
                  <img src={i_twitter} alt="Twitter" />
                  <p>Twitter</p>
                </div>
              </li>
              <li>
                <div className={s.div_follow}>
                  <img src={i_instagram} alt="Instagram" />
                  <p>Instagram</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p>© Copyright 2022 | drile | All right reserved.</p>
    </div>
  );
}
