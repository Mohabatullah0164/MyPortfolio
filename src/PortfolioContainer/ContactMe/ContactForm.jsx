import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaYoutube, FaTwitter, FaGithub } from "react-icons/fa";

import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted: ", formData);
  };

  return (
    <main className="container my-5 " id="Contact">
      <h1 className="text-center display-3">CONTACT</h1>
      <p className="lead f-6 text-center">
        Lets keep in touch
        <span></span>
        <span></span>
      </p>
      <div className="row bg-darkblue text-white rounded p-3 gap-4 gap-sm-0">
        <div className="col-sm-6 p-0 pe-4 text-center text-sm-start">
          <h2 className="pb-2">
            Get In Touch <i></i>
          </h2>
          <div className="icons d-inline-flex gap-2">
            <i>
              {" "}
              <GrInstagram fontSize={30} color="red" />
            </i>
            <i>
              <FaFacebook fontSize={30} color="blue" />
            </i>
            <i>
              {" "}
              <FaYoutube size={30} color="red" />
            </i>
            <i>
              {" "}
              <FaTwitter size={30} color="blue" />.
            </i>
          </div>

          <div className="d-none d-sm-flex flex-column h-75 justify-content-center">
            <p>Send Your Email Here!</p>
            <img
              src="./src/assets/Home/Email-Background.jpg"
              alt=""
              className="w-100 rounded"
              style={{ height: "150px" }}
            />
          </div>
        </div>

        <form
          className="col-sm-6 bg-white text-dark rounded p-3"
          action=""
          id="contact-form"
        >
          <p className="m-0 text-center d-sm-none d-block">
            Send Your Email Here!
          </p>
          <label htmlFor="" className="form-label m-0 mt-3">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control gray"
          />
          <label htmlFor="" className="form-label m-0 mt-3">
            Email
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control gray"
          />
          <label htmlFor="" className="form-label m-0 mt-3">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-control gray"
          ></textarea>

          <input
            type="submit"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control gray"
            className="btn btn-dark rounded-pill px-4 mt-3"
          />
        </form>
      </div>
    </main>
  );
};

export default ContactForm;
