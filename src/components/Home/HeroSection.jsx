import React from "react";
import { Link } from "react-scroll";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import myIMG from "../../assets/profile.jpg";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

function HeroSection() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-[90%] lg:w-[80%]">
        {/* === LEFT SECTION === */}
        <div className="text-left w-full mt-10 md:mt-0">
          {/* Welcome Text */}
          <motion.h2
            className="text-3xl font-bold text-gray-900 flex items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="animate-bounce">
              Welcome! <span className="text-4xl">👋</span>
            </span>
          </motion.h2>

          {/* Name With Typewriter */}
          <motion.h2
            className="pt-3 text-3xl font-semibold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I'm{" "}
            <span className="text-4xl font-bold text-blue-600">
              <Typewriter
                options={{
                  strings: ["Md Sakhawat Hossain"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 80,
                  delay: 120,
                }}
              />
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="mt-2 text-lg text-gray-800 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A passionate Frontend Developer crafting elegant, responsive, and
            user-friendly web interfaces.
          </motion.p>

          {/* Skills Typewriter */}
          <motion.div
            className="mt-4 text-2xl font-semibold text-blue-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Typewriter
              options={{
                strings: [
                  "Frontend Developer",
                  "React Developer",
                  "Responsive Web Designer",
                  "MERN Stack Developer",
                  "JavaScript Developer",
                  "UI/UX Enthusiast",

                  "Modern UI Designer",

                  "Interactive UI Builder",

                  "React UI Expert",

                  "Single Page App Developer",
                  "Web Animation Lover",
                ],

                autoStart: true,
                loop: true,
                deleteSpeed: 40,
                delay: 80,
              }}
            />
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="mt-6 flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <IconButton
              icon={<AiFillGithub />}
              link="https://github.com/sakhawat236hossain"
            />
            <IconButton
              icon={<FaLinkedinIn />}
              link="https://www.linkedin.com/in/md-sakhawat-hossain-web-developer/"
            />
            <IconButton
              icon={<AiFillFacebook />}
              link="https://www.facebook.com/md.sakhawth.hosain"
            />
            <IconButton
              icon={<AiOutlineTwitter />}
              link="https://x.com/MdSakhawat21005"
            />
            <IconButton
              icon={<AiFillInstagram />}
              link="https://www.instagram.com/mhmdshwthsyn/?hl=en"
            />
          </motion.div>

          {/* Hire Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="mt-8 inline-block px-6 py-3 rounded-full text-white font-semibold shadow-lg cursor-pointer transition-transform transform hover:scale-105 bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90"
            >
              Hire Me
            </Link>
          </motion.div>
        </div>

        {/* === RIGHT IMAGE SECTION === */}
        <div className="w-full md:w-[50%] flex justify-center">
          <div className="bg-white rounded-2xl p-4 shadow-xl transition-transform transform hover:-translate-y-4">
            <img src={myIMG} alt="profile" className="w-[95%] rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Social Icon Button Component
const IconButton = ({ icon, link }) => (
  <button
    onClick={() => window.open(link, "_blank")}
    className="cursor-pointer text-xl p-3 bg-white rounded-full shadow-md text-gray-700 transition-transform transform hover:-translate-y-1 hover:scale-110 hover:bg-gray-100"
  >
    {icon}
  </button>
);

export default HeroSection;
