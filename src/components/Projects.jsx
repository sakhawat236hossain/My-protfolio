import React, { useState } from 'react';

const projectsData = [
  {
    title: "Tour & Travel Website: TourNest BD",
    extraText: "Explore Bangladesh like never before!",
    description: "To develop an online platform providing detailed information about tourism in Bangladesh, helping travelers explore destinations, plan trips easily, and experience local culture and activities.",
    image: "/images/project1.png",
    liveLink: "https://tour-nest-demo.com",
    githubClient: "https://github.com/sakhawat236hossain/tournest-client",
    githubServer: "https://github.com/sakhawat236hossain/tournest-server"
  },
  {
    title: "Hobby Related Website: HobbyHub",
    extraText: "Connect and share hobbies with friends!",
    description: "To build a platform that allows users to discover, join, and create hobby-based groups, fostering meaningful connections and vibrant communities around shared passions and interests.",
    image: "/images/project2.png",
    liveLink: "https://hobbyhub-demo.com",
    githubClient: "https://github.com/sakhawat236hossain/hobbyhub-client",
    githubServer: "https://github.com/sakhawat236hossain/hobbyhub-server"
  },
  {
    title: "Group-Study Related Website: FriendAssign",
    extraText: "Make group study more productive!",
    description: "Purpose: To create a collaborative online platform where friends can assign, complete, and evaluate each other’s work, making group study more engaging, organized, and productive.",
    image: "/images/project3.png",
    liveLink: "https://friendassign-demo.com",
    githubClient: "https://github.com/sakhawat236hossain/friendassign-client",
    githubServer: "https://github.com/sakhawat236hossain/friendassign-server"
  },
  {
    title: "Group-Study Related Website: FriendAssign",
    extraText: "Make group study more productive!",
    description: "Purpose: To create a collaborative online platform where friends can assign, complete, and evaluate each other’s work, making group study more engaging, organized, and productive.",
    image: "/images/project3.png",
    liveLink: "https://friendassign-demo.com",
    githubClient: "https://github.com/sakhawat236hossain/friendassign-client",
    githubServer: "https://github.com/sakhawat236hossain/friendassign-server"
  },
  {
    title: "Group-Study Related Website: FriendAssign",
    extraText: "Make group study more productive!",
    description: "Purpose: To create a collaborative online platform where friends can assign, complete, and evaluate each other’s work, making group study more engaging, organized, and productive.",
    image: "/images/project3.png",
    liveLink: "https://friendassign-demo.com",
    githubClient: "https://github.com/sakhawat236hossain/friendassign-client",
    githubServer: "https://github.com/sakhawat236hossain/friendassign-server"
  },
  {
    title: "Group-Study Related Website: FriendAssign",
    extraText: "Make group study more productive!",
    description: "Purpose: To create a collaborative online platform where friends can assign, complete, and evaluate each other’s work, making group study more engaging, organized, and productive.",
    image: "/images/project3.png",
    liveLink: "https://friendassign-demo.com",
    githubClient: "https://github.com/sakhawat236hossain/friendassign-client",
    githubServer: "https://github.com/sakhawat236hossain/friendassign-server"
  },
  {
    title: "Group-Study Related Website: FriendAssign",
    extraText: "Make group study more productive!",
    description: "Purpose: To create a collaborative online platform where friends can assign, complete, and evaluate each other’s work, making group study more engaging, organized, and productive.",
    image: "/images/project3.png",
    liveLink: "https://friendassign-demo.com",
    githubClient: "https://github.com/sakhawat236hossain/friendassign-client",
    githubServer: "https://github.com/sakhawat236hossain/friendassign-server"
  },
  // You can add more projects here
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  // Decide how many projects to show
  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 3);

  return (
    <div id="projects" className="w-full py-16 px-6 bg-gradient-to-r from-purple-400 to-pink-400">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Projects.</h2>
        <p className="text-white mb-12">
          Following projects showcase my skills and experience through demo examples of my work.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 text-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                <p className="text-blue-300 italic mb-2">{project.extraText}</p>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex gap-4 mb-4 flex-wrap">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubClient}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:underline"
                  >
                    GitHub Client
                  </a>
                  <a
                    href={project.githubServer}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 hover:underline"
                  >
                    GitHub Server
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-8 px-6 py-3 bg-white text-purple-600 font-bold rounded-full hover:bg-purple-600 hover:text-white transition"
        >
          {showAll ? "View Less" : "View More"}
        </button>
      </div>
    </div>
  );
};

export default Projects;
