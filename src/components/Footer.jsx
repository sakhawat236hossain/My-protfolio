import React from "react";
import { AiFillGithub, AiFillFacebook, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

// Reusable IconButton with glow effect
const IconButton = ({ icon, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white text-2xl hover:text-yellow-400 transition transform hover:scale-125 hover:drop-shadow-xl"
  >
    {icon}
  </a>
);

const Footer = () => {
  return (
    <footer className="w-full py-8 bg-gradient-to-r from-purple-700 via-pink-600 to-red-500">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Section */}
       <div className="text-center md:text-left">
  <h3 className="text-white text-4xl md:text-5xl font-extrabold mb-2 drop-shadow-xl tracking-wider">
    Sakhawat Hossain
  </h3>
  <p className="text-gray-300 text-sm md:text-base tracking-wide">
     Front End Web Developer
  </p>
</div>


        {/* Right Section: Social Icons */}
        <div className="flex gap-6 justify-center md:justify-end">
          <IconButton icon={<AiFillGithub />} link="https://github.com/sakhawat236hossain" />
          <IconButton icon={<FaLinkedinIn />} link="https://www.linkedin.com/in/md-sakhawat-hossain-web-developer/" />
          <IconButton icon={<AiFillFacebook />} link="https://www.facebook.com/md.sakhawth.hosain" />
          <IconButton icon={<AiOutlineTwitter />} link="https://x.com/MdSakhawat21005" />
          <IconButton icon={<AiFillInstagram />} link="https://www.instagram.com/mhmdshwthsyn/?hl=en" />
        </div>
      </div>

      {/* Optional bottom line */}
      <div className="mt-8 border-t border-white/30 pt-4 text-center text-white/80 text-sm">
         <p className="text-gray-200">© {new Date().getFullYear()} Copyright 2025 Designed by
Md Sakhawat Hossain</p>
      </div>
    </footer>
  );
};

export default Footer;
