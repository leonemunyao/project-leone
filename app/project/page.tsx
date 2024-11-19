export default function Project() {
    const projects = [
      {
        title: "Simple Shell",
        year: "2023",
        description: "A Unix command line interpreter built in C that handles command lines with arguments, implements the PATH, and includes built-in commands like exit, env, and cd.",
        image: "/images/project1.jpg"
      },
      {
        title: "AirBnB Clone",
        year: "2023",
        description: "A comprehensive web application clone of AirBnB, featuring a command interpreter, web static interface, MySQL storage, and RESTful API implementation.",
        image: "/images/project2.jpg"
      },
      {
        title: "Portfolio Website",
        year: "2023",
        description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS, showcasing my projects and professional experience.",
        image: "/images/project3.jpg"
      }
    ];
  
    return (
      <div className="min-h-screen pt-24">
        <div className="container mx-auto px-6">
          <div className="relative">
            <div className="year-display">2022 - 2023</div>
            
            <h1 className="text-5xl font-bold mb-12">SELECTED PROJECT</h1>
  
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="group">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title} | {project.year}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  