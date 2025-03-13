import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/email.png";
import location_icon from "../../assets/map.png";
import linkedin_icon from "../../assets/linkedin.png";
import telegram_icon from "../../assets/telegram.png";
import github_icon from "../../assets/github.png";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "2aeda741-58b2-4b16-a2f9-fc5e27a53d66");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact me anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Mail Icon" />
              <p>
                <a
                  href="mailto:gamageudaradilshan@gmail.com"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  gamageudaradilshan@gmail.com
                </a>
              </p>
            </div>

            <div className="contact-detail">
              <img src={telegram_icon} alt="Telegram Icon" />
              <p>
                <a
                  href="https://t.me/U_Dilshan"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Telegram
                </a>
              </p>
            </div>

            <div className="contact-detail">
              <img src={linkedin_icon} alt="LinkedIn Icon" />
              <p>
                <a
                  href="https://www.linkedin.com/in/gamage-udara-dilshan"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  LinkedIn Profile
                </a>
              </p>
            </div>
            <div className="contact-detail">
              <img src={github_icon} alt="GitHub Icon" />
              <p>
                <a
                  href="https://github.com/Udara-Dilshan"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  GitHub Profile
                </a>
              </p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="Location Icon" />
              <p>
                <a
                  href="https://www.google.com/maps/place/Matara,+Sri+Lanka"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Matara, Sri Lanka
                </a>
              </p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name:</label>
          <input type="text" placeholder="Enter Your name" name="name" />
          <label htmlFor="">Your Email:</label>
          <input type="email" placeholder="Enter Your email" name="email" />
          <label htmlFor="">Your Message:</label>
          <textarea
            placeholder="Write your message here"
            rows="8"
            name="message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
