import React from "react";
import Typical from "react-typical";
import "./profile.css";
import { FaFacebook } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaYoutube, FaTwitter, FaGithub } from "react-icons/fa";

export default function Profile() {
  return (
    <div className="profile-container" id="Home">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/profile.php?id=100089054282519&mibextid=ZbWKwL">
                <i>
                  <FaFacebook fontSize={30} color="blue" />
                </i>
              </a>
              <a href="#">
                <i>
                  <GrInstagram fontSize={30} color="red" />
                </i>
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i>
                  <FaYoutube size={30} color="red" />
                </i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i>
                  <FaTwitter size={30} color="blue" />
                </i>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i>
                  <FaGithub size={30} color="black" />
                </i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Mohabatullah</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Hello, World!",
                    2000,
                    "Welcome to React!",
                    2000,
                    "Enjoy Coding!",
                    2000,
                  ]}
                  wrapper="p"
                />
              </h1>
              🧖‍♂️
              <span className="profile-role-tagline">
                Knack of building application with front anf back end operation.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me </button>
            <a href="#">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
