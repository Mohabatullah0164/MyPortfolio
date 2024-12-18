import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-me container mt-5" id="About">
      <div className="title">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Why Choose Me?</p>
      </div>
      <div className="row m-0 box-shadow rounded" id="me">
        <div className="col-12 col-md-6 p-0">
          <div className="about-image">
            <img
              src="./src/assets/Home/mohabat.jpg"
              id="mohabat"
              alt="Profile"
            />
          </div>
        </div>
        <div className="col-12 col-md-6 p-0" id="red">
          <div className="d-flex flex-column justify-content-between p-4 about-content">
            <p className="description">
              Full stack web and mobile developer with a background in MERN
              stack and Redux, along with a knack for building applications with
              utmost efficiency. Strong professional with a BSC willing to be an
              asset for an organization.
            </p>
            <ul className="highlights">
              <li>Full Stack web and mobile development</li>
              <li>Interactive Front End as per the design</li>
              <li>React and React Native</li>
              <li>Redux for State Management</li>
              <li>Building REST API</li>
              <li>Managing database</li>
            </ul>
            <div className="buttons mt-3 ">
              <button className="rounded-pill px-lg-5 px-3 py-3 btn btn-dark">
                Hire Me
              </button>
              <button className="btn btn-orange py-3">Get Resume</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
