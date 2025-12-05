import React, { useState } from 'react';

const projectsData = [
  {
    title: "Green Nest (Tree & Plant Service Website)",
   
    description: "A web application focused on tree plantation, plant services, and environmental awareness.",
    image: "https://github.com/user-attachments/assets/c6adb38c-5398-43a5-b287-b68481cf80ee",
    liveLink: "https://greennest-assigment-9.firebaseapp.com/",
    githubClient: "https://github.com/sakhawat236hossain/Green-Nest-A9",
    // githubServer: "https://github.com/sakhawat236hossain/tournest-server"
  },
  {
    title: "Hobby Related Website: HobbyHub",
    
    description: "To build a platform that allows users to discover, join, and create hobby-based groups, fostering meaningful connections and vibrant communities around shared passions and interests.",
    image: "/images/project2.png",
    liveLink: "https://hobbyhub-demo.com",
    githubClient: "https://github.com/sakhawat236hossain/hobbyhub-client",
    githubServer: "https://github.com/sakhawat236hossain/hobbyhub-server"
  },
  {
    title: "Group-Study Related Website: FriendAssign",
  
    description: "Purpose: To create a collaborative online platform where friends can assign, complete, and evaluate each other’s work, making group study more engaging, organized, and productive.",
    image: "/images/project3.png",
    liveLink: "https://friendassign-demo.com",
    githubClient: "https://github.com/sakhawat236hossain/friendassign-client",
    githubServer: "https://github.com/sakhawat236hossain/friendassign-server"
  },

  
 
  
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
