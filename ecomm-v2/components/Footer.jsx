import React from "react";
import Link from "next/link";
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
        <a href="www.instagram.com">
          <AiFillInstagram />
        </a>
        <AiOutlineTwitter />
        <AiFillGithub />
        <AiFillYoutube />
      </p>
    </div>
  );
};

export default Footer;
