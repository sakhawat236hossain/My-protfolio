import React from "react";
import { motion } from "framer-motion";
import {
  AiFillGithub,
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

// Reusable IconButton
const IconButton = ({ icon, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-700 text-2xl hover:text-purple-600 transition"
  >
    {icon}
  </a>
);

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full min-h-screen py-20 px-6 bg-gradient-to-br from-purple-700 via-pink-600 to-red-500"
    >
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
          Contact Me
        </h2>
        <p className="text-gray-200 mb-12 text-lg">
          Have a question or want to work together? Let's talk.
        </p>

        {/* Card Container */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left: Form */}
          <motion.form
            className="flex-1 bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-2xl flex flex-col gap-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <label
                  htmlFor="fullName"
                  className="block text-left text-gray-200 font-semibold text-sm mb-1"
                >
                  Full Name *
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="John Doe"
                  required
                  className="w-full p-3 rounded-lg bg-white/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="emailAddress"
                  className="block text-left text-gray-200 font-semibold text-sm mb-1"
                >
                  Email Address *
                </label>
                <input
                  id="emailAddress"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full p-3 rounded-lg bg-white/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="yourMessage"
                className="block text-left text-gray-200 font-semibold text-sm mb-1"
              >
                Your Message *
              </label>
              <textarea
                id="yourMessage"
                rows="6"
                placeholder="Let me know how I can help you..."
                required
                className="w-full p-3 rounded-lg bg-white/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-pink-400 transition resize-none"
              ></textarea>
            </div>

            <div className="text-left">
              <button
                type="submit"
                className="bg-yellow-300 text-purple-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-400 hover:scale-105 transform transition duration-300"
              >
                Send Message
              </button>
            </div>
          </motion.form>

          {/* Right: Info */}
          <motion.div
  className="flex-1 bg-white/20 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-2xl flex flex-col gap-6"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  <h3 className="text-3xl font-bold text-white mb-4">
    Let's Connect
  </h3>
  <p className="text-gray-200 mb-6">
    You can also reach me directly through the following details.
  </p>

  <div className="text-white space-y-3 mb-6">
    <p>
      <span className="font-bold">Whatsapp:</span> +8801851121472
    </p>
    <p>
      <span className="font-bold">Email:</span> hmdsakhawat236@gmail.com
    </p>
  </div>

  <div className="flex gap-6 mt-4 justify-center">
  <IconButton
    icon={<AiFillGithub />}
    link="https://github.com/sakhawat236hossain"
    className="text-white hover:text-gray-900 transition-colors duration-300"
  />
  <IconButton
    icon={<FaLinkedinIn />}
    link="https://www.linkedin.com/in/md-sakhawat-hossain-web-developer/"
    className="text-white hover:text-blue-600 transition-colors duration-300"
  />
  <IconButton
    icon={<AiFillFacebook />}
    link="https://www.facebook.com/md.sakhawth.hosain"
    className="text-white hover:text-blue-500 transition-colors duration-300"
  />
  <IconButton
    icon={<AiOutlineTwitter />}
    link="https://x.com/MdSakhawat21005"
    className="text-white hover:text-sky-400 transition-colors duration-300"
  />
  <IconButton
    icon={<AiFillInstagram />}
    link="https://www.instagram.com/mhmdshwthsyn/?hl=en"
    className="text-white hover:text-pink-500 transition-colors duration-300"
  />
</div>

</motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
