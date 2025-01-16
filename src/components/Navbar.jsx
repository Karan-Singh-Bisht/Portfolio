import React from "react";
import karanLogo from "../assets/karanLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { SOCIALS } from "../constants";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={karanLogo} alt="logo" />
      </div>
      <div className="hover:cursor-pointer z-50 m-8 flex items-center justify-center gap-4 text-2xl">
        <a href={SOCIALS.linkedin ? SOCIALS.linkedin : "#"}>
          {SOCIALS.linkedin ? <FaLinkedin /> : ""}
        </a>
        <a href={SOCIALS.github ? SOCIALS.github : "#"}>
          {SOCIALS.github ? <FaGithub /> : ""}
        </a>
        <a href={SOCIALS.instagram ? SOCIALS.instagram : "#"}>
          {SOCIALS.instagram ? <FaInstagram /> : ""}
        </a>
        <a href={SOCIALS.twitter ? SOCIALS.twitter : "#"}>
          {SOCIALS.twitter ? <FaSquareXTwitter /> : ""}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
