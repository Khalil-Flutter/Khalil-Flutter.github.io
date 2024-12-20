import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { GoArrowRight } from "react-icons/go";
import { FaFacebookMessenger } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_8ypysck", "template_k185ai4", form.current, {
      publicKey: "bcimoRsAcGpt5y8t8",
    });
    e.target.reset();
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section-title ">Contact Me</h2>
      <span className="section-subtitle">Get in Touch</span>

      <div className="contact-container container grid">
        <div className="contact-content">
          <h3 className="contact-title">Talk To Me</h3>
          <div className="contact-info">
            <div className="contact-card">
              <MdEmail className="contact-card-icon" />
              <h3 className="contact-card-title">Email</h3>
              <span className="contact-card-data">muhammad.khalil.dev@gmail.com</span>
              <a
                href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzDfhRXvHlxFMxBxVVdDtdFMlRzMdfBSSssKDzQZngRFRWmgKtjXBWwKBwpkRtghWcJnCXq"
                className="contact-btn"
              >
                Write me <GoArrowRight className="contact-button-icon" />
              </a>
            </div>
            <div className="contact-card" >
              <IoLogoWhatsapp className="contact-card-icon" />
              <h3 className="contact-card-title">WhatsApp</h3>
              <span className="contact-card-data">+92 311 2764610</span>

              <a href="https://wa.me/qr/XLWME2HMKBWBJ1" className="contact-btn">
                Write me <GoArrowRight className="contact-button-icon" />
              </a>
            </div>
            <div className="contact-card">
              <FaFacebookMessenger className="contact-card-icon" />
              <h3 className="contact-card-title">Messanger</h3>
              <span className="contact-card-data">m.MuhammadKhalil</span>
              <a
                href="https://www.facebook.com/profile.php?id=100082018273158"
                className="contact-btn"
              >
                Write me <GoArrowRight className="contact-button-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="contact-content">
          <h3 className="contact-title">Contact Form</h3>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="contact-form-div" >
              <label className="contact-form-tag">Name</label>
              <input
                type="text"
                required
                name="name"
                className="contact-input"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="contact-form-div">
              <label className="contact-form-tag">Email</label>
              <input
                type="email"
                required
                name="email"
                className="contact-input"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="contact-form-div contact-form-area">
              <label className="contact-form-tag ">Your Message</label>
              <textarea
                name="message"
                required
                cols="30"
                rows="10"
                className="contact-input"
                placeholder="Somthing You Want to Write for me"
              ></textarea>
            </div>
            <button className="button button-flex">
              Send Message
              <FaLocationArrow className="home-icon" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
