import React from 'react';
import './Navbar.css'; // اطمینان حاصل کنید که فایل CSS مربوط به استایل‌های خود را وارد کرده‌اید.

const Navbar = () => {
  return (
    <div className="nav" id="main-nav">
      <div className="navbar row navbar-expand-lg py-3 container m-auto">
        <h2 className="col-4 text-lightsuccess d-flex align-items-center">
          <span className="position-relative text-white px-5 logo">Omarzai <span id="games"></span></span>
        </h2>
        <button 
          className="navbar-toggler col-2 col-sm-1" 
          data-bs-toggle="collapse" 
          data-bs-target="#nav"
        >
          <span className="fa-solid fa-bars text-white"></span>
        </button>
        <div className="collapse navbar-collapse text-white col-8 px-5 navbar_link" id="nav">
          <a href="#Home" className="nav-link px-44️⃣ py-2 text-nowrap text-white position-relative">Home</a>
          <a href="#About" className="nav-link px-4 py-2 text-nowrap text-white position-relative">AboutMe</a>
          <a href="#Resume" className="nav-link px-4 py-2 text-nowrap text-white position-relative">Resume</a>
          <a href="#Contact" className="nav-link px-4 py-2 text-nowrap text-white position-relative">ContactMe</a>
          <div className="nav-link ms-auto d-none d-lg-flex align-items-center gap-3" id="profile">
            <a href="" className="nav-link">
              <img src="Images/profile photo.jpg" className="rounded-circle" width="30px" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
