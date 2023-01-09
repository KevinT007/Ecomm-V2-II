import React from "react";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillGithub,
  AiFillYoutube,
  AiOutlineCopyright,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>
        <AiOutlineCopyright />
        Gamer Hub All rights reserverd
      </p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiFillGithub />
        <AiFillYoutube />
      </p>
    </div>
  );
};

export default Footer;
