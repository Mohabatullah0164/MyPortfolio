import React from "react";
import "./App.css";
import Navbar from "./PortfolioContainer/Home/Navgionbar/Navbar.jsx"
import Profile from "./PortfolioContainer/Home/profile.jsx";
import Footer from "./PortfolioContainer/Home/Footer/Footer.jsx";
import AboutMe from "./PortfolioContainer/AboutMe/AboutMe.jsx";
import Resume from "./PortfolioContainer/Resume/Resume.jsx";
import LoginForm from "./PortfolioContainer/ContactMe/ContactForm.jsx";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <Footer />
      <AboutMe />
      <Resume />
      <LoginForm />
    </div>
  );
}

export default App;
