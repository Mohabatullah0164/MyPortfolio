import React from "react";
import "./Resume.css"; // فایل CSS سفارشی

const Resume = () => {
  return (
    <div className="container mt-5" id="Resume">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 sidebar p-4 bg-dark text-white">
          <ul className="list-unstyled">
            <li className="mb-3 active">
              <i className="me-2">📚</i> Education
            </li>
            <li className="mb-3">
              <i className="me-2">💼</i> Work History
            </li>
            <li className="mb-3">
              <i className="me-2">💻</i> Programming Skills
            </li>
            <li className="mb-3">
              <i className="me-2">📊</i> Projects
            </li>
            <li>
              <i className="me-2">🎯</i> Interests
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="col-md-9 p-4">
          <h1 className="mb-3">Resume</h1>
          <p className="text-muted">My formal Bio Details</p>
          <hr className="border border-warning w-25" />

          {/* Education Section */}
          <div className="section">
            <div className="item mb-4 position-relative">
              <h4 className="text-warning">University of Legon Accra, Ghana</h4>
              <p>BACHELOR OF SCIENCE INFORMATION TECHNOLOGY</p>
              <span className="badge bg-warning position-absolute top-0 end-0">
                2014-2018
              </span>
            </div>

            <div className="item mb-4 position-relative">
              <h4 className="text-warning">National Youth Service Corps</h4>
              <p>Ministry Of Science And Technology, Uyo Akwa Ibom State</p>
              <span className="badge bg-warning position-absolute top-0 end-0">
                2019-2020
              </span>
            </div>

            <div className="item mb-4 position-relative">
              <h4 className="text-warning">High School</h4>
              <p>Command Secondary School Mbiri</p>
              <span className="badge bg-warning position-absolute top-0 end-0">
                2007-2012
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;


