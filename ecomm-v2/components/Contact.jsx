import React from "react";

const FooterBanner = () => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <h3>Contact Form</h3>
          <form>
            <article class="contact">
              <input type="text" id="name" required placeholder="Fullname" />
              <label for="name">Your Name</label>
            </article>
            <article class="contact">
              <input type="email" id="email" required placeholder="Email" />
              <label for="email">Your Email</label>
            </article>
            <article class="contact">
              <input type="text" id="subject" required placeholder="Subject" />
              <label for="subject">Subject</label>
            </article>
            <article class="contact">
              <textarea id="message" rows="8" placeholder="Comment"></textarea>
              <label for="message">Comment</label>
            </article>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default FooterBanner;
