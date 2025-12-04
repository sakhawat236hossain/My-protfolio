import React from 'react';
import myIMG from"../assets/profile.jpg"


const About = () => {
  return (
    <div
      id="about"
      className="w-full min-h-screen flex items-center justify-center px-6"
    >
      <div className="w-[90%] lg:w-[70%] flex flex-col md:flex-row items-center gap-10">

        {/* Left side: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="bg-white p-4 rounded-2xl shadow-xl transition-transform transform hover:-translate-y-4">
            <img
              src={myIMG}
              alt="About me"
              className="w-[90%] rounded-xl"
            />
          </div>
        </div>

        {/* Right side: Text */}
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-800 mb-4">
            Hi! I'm <span className="font-bold text-blue-600">Md Sakhawat Hossain</span>, a passionate Frontend Developer.
            I love crafting beautiful and responsive web interfaces using modern technologies like React, Tailwind CSS, and JavaScript.
          </p>
          <p className="text-lg text-gray-800 mb-4">
            I enjoy turning complex problems into simple, intuitive designs and continuously learning new things in web development.
          </p>
          <p className="text-lg text-gray-800">
            When I'm not coding, I love exploring UI/UX design trends, experimenting with animations, and building small projects for practice.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;
