import React from "react";
import Marquee from "react-fast-marquee";

const skillsData = [
  { name: "HTML", img: "https://img.icons8.com/color/96/html-5.png" },
  { name: "CSS", img: "https://img.icons8.com/color/96/css3.png" },
  { name: "JavaScript", img: "https://img.icons8.com/color/96/javascript.png" },
  { name: "React", img: "https://img.icons8.com/color/96/react-native.png" },
  { name: "MongoDB", img: "https://img.icons8.com/color/96/mongodb.png" },
  { name: "Tailwind CSS", img: "https://img.icons8.com/color/96/tailwindcss.png" },
  { name: "Git", img: "https://img.icons8.com/color/96/git.png" },
  { name: "GitHub", img: "https://img.icons8.com/color/96/github.png" },
];

const Skills = () => {
  return (
    <div id="skills" className="w-full py-16 px-6 ">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Gradient Section Title */}
        <h2 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-lg">
          My Skills
        </h2>
        <p className="text-gray-200 mb-12 text-lg">
          Here are some of the technologies and tools I work with.
        </p>

        {/* Marquee */}
        <Marquee gradient={false} speed={200}>
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="mx-8 flex flex-col items-center transition-transform duration-300 hover:scale-110"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-28 h-28 object-contain mb-2"
              />
              {/* Gradient Skill Name */}
              <p className="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500 animate-gradient-x drop-shadow-lg">
                {skill.name}
              </p>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
