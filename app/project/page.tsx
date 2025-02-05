import { link } from "node:fs";

export default function Project() {
    const projects = [
      {
        title: "Flowchain",
        year: "2024",
        description: "Flowchain is a decentralized application built on the Internet Computer Protocol blockchain layer. Its main aim is to allow users to manage their logistics in one platform.",
        image: "/images/flowchain.png",
        link: "https://6irrc-aqaaa-aaaah-aq4za-cai.icp0.io/"
      },
      {
        title: "Livestock Management System",
        year: "2024",
        description: "This is a Rust Smart Contract for Livestock Management System which enables a farmer to manage his cattle farm with ease. This system has incorporated the basic CRUD operations. Through the system, a farmer records cattle breed, age, height, health records, update health status and medical records.",
        image: "/images/livestock.png",
        link: "https://github.com/leonemunyao/Get_Rusty/tree/main/rust_smart_contract1/Livestock_Management/livestock_management"
      },
      {
        title: "Portfolio Website",
        year: "2025",
        description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS, showcasing my projects and professional experience.",
        image: "/images/myportfolio.png",
        link: "https://leonemunyao.netlify.app/"
      },
      {
        title: "Crop Yield System",
        year: "2024",
        description: "This is a Rust Smart Contract for crop yield system which enables a farmer to manage their crop details. Through this system a farmer can predict crop yield through analysing the weather conditions and other factors such as fertilizer application.",
        image: "/images/cropyield.png",
        link: "https://github.com/leonemunyao/Get_Rusty/tree/main/rust_smart_contract1/Crop_Yield_System/crop_yield_system"
      },
      {
        title: "Loan Management System",
        year: "2024",
        description: "This is a loan management system built on the Internet Computer Protocol blockchain layer.",
        image: "/images/project2.jpg"
      }
    ];
  
    return (
      <div className="min-h-screen pt-24">
        <div className="container mx-auto px-6">
          <div className="relative">
            
            
            <h1 className="text-5xl font-bold mb-12">PROJECTS</h1>
  
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="group">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    >
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
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  