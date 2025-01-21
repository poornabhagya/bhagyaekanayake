import React from "react";
import "./ProjectSection.css";

// Importing local images
import project1Image from "./data/p1.png";
import project2Image from "./data/p2.jpg";
import project3Image from "./data/p4.png";
import project4Image from "./data/p3.png";
import project5Image from "./data/p5.png";
import project6Image from "./data/p6.png";
import project7Image from "./data/p7.png";
import otherProjectsImage from "./data/p8.png"; // Add a new image for "Other Projects"

const projects = [
  {
    title: "Fauna - Wild Life Safari Trip Management System",
    description: "Fauna - Wildlife Safari Trip Management System' is a platform with three main components: Travel Guides, Tourists, and Hotels. Each component allows basic operations like adding, viewing, updating, and deleting data. The system simplifies managing safari trips and improves coordination between guides, tourists, and hotels",
    image: project1Image,
    github: "https://github.com/poornabhagya/Fauna---Wild-Life-Safari-Trip-Management-System",
    field: "Web Development",
    technologies: ["HTML", "CSS","JavaScript","PHP"],
  },
  {
    title: "Movizzy - Transport System",
    description: "Movizzy - Transport System' is a taxi web application with three main components: Taxi Drivers, Taxi Owners, and Passengers. Each component supports basic operations like adding, viewing, updating, and deleting data. The system streamlines taxi booking and management, ensuring better coordination between drivers, owners, and passengers",
    image: project2Image,
    github: "https://github.com/poornabhagya/Movizzy--Online_Transport_System",
    field: "Web Development",
    technologies: ["HTML", "CSS", "JavaScript","JAVA"],
  },
  {
    title: "Travel Management System for Green Holiday Center",
    description: "Travel Management System for Green Holiday Center' is designed to simplify travel management. The system manages five key components: Tourists, Tourist Guides, Safari Vehicles, Drivers, and Hotels. Each component supports CRUD operations, enabling efficient organization and coordination for a seamless travel experience",
    image: project3Image,
    github: "https://github.com/poornabhagya/Travel_management_system_for_Green_Holiday_Center",
    field: "Web Development",
    technologies: ["React", "Node","CSS","MongoDB","Express"],
  },
  {
    title: "Yummy Restaurant Website",
    description: "Yummy Restaurant Website' is a front-end website designed for Yummy Restaurant. It showcases the restaurant's ambiance, menu, and other details, allowing customers to explore and get a clear idea about the restaurant. This project focuses purely on an appealing and user-friendly design.",
    image: project4Image,
    github: "https://github.com/poornabhagya/Yummy-Web_Site_for_Restaurant",
    field: "Frontend Development",
    technologies: ["HTML", "CSS","JavaScript","Bootstrap"],
  },
  {
    title: "CareerLeap - Social Media Platform",
    description: "CareerLeap is a unique social media platform that caters to the needs of general users organizations, businesses and consultants. The platform aims to provide a comprehensive set of features to facilitate networking, job search, advertising, and communication among users.",
    image: project5Image,
    github: "https://github.com/poornabhagya/CareerLeap_Unique_Social_Media_Platform",
    field: "Web Development",
    technologies: ["React", "Node","Express","MonogoDB","Postman"],
  },
  {
    title: "Student Management System with JAVA RMI",
    description: "This project is a Java-based distributed application using Remote Method Invocation (RMI), where a client interacts with a server to manage student records. The server provides services to handle basic operations such as Create, Read, Update, Delete, and List all students.",
    image: project6Image,
    github: "https://github.com/poornabhagya/Student-Management-System-with-JAVA-RMI",
    field: "BackEnd Development",
    technologies: ["JAVA", "JAVA-RMI"],
  },
  {
    title: "IoT Step Counter",
    description: "This project is an IoT-based step counter using the ESP8266 microcontroller and the MPU6050 accelerometer and gyroscope sensor. It captures real-time motion data to calculate step counts, displaying the results on an OLED screen and a web interface. The system provides real-time step tracking for fitness and rehabilitation purposes, ensuring user-friendly and efficient monitoring of physical activity",
    image: project7Image,
    github: "https://github.com/poornabhagya/IoT-Step-Counter",
    field: "IoT",
    technologies: ["C++", "Arduino", "HTML","CSS","JavaScript"],
  },
  {
    title: "Other Projects",  // Title for the "Other Projects" section
    description: "",  // Empty description
    image: otherProjectsImage,  // Add an image for this project
    github: "https://github.com/poornabhagya?tab=repositories",  // Link to GitHub
    field: "",  // No field for this project
    technologies: [],  // No technologies listed
  },
];

const ProjectSection = () => {
  return (
    <div className="project-section">
      <h2 className="project-header">
        &lt; <span className="highlight-p">P</span>rojects /&gt;
      </h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className={`project-card ${index >= 4 ? "centered" : ""}`}
          >
            <img
              src={project.image}
              alt={`${project.title} Screenshot`}
              className="project-image"
            />
            
            {/* Project Field Tag */}
            {project.field && <span className="project-tag">{project.field}</span>}

            {/* Project Title */}
            <h3 className="project-title">{project.title}</h3>

            {/* Project Description */}
            {project.description && <p className="project-description">{project.description}</p>}

            {/* Technologies List */}
            {project.technologies.length > 0 && (
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
