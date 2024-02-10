import React from "react";

const ContactUs = () => {
  return (
    <div>
      <section className="contact bg-black">
        <div className="contact-form">
          <h1>
            Contact <span>Us</span>
          </h1>
          <p>
            We are always out there to help you! Fill out the form given below
            and get a reply from us within 2 business days.
          </p>
          <form acceptCharset="UTF-8" action="https://www.formbackend.com/f/d2cee437da9dfa77" method="POST">
            <input type="text" name="myname" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your E-mail"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="What brings you here?"
              required
            />
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Your Message"
              required
            ></textarea>
            <input type="submit" value="Submit" className="submit-btn" />
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
