import Image from 'next/image'
import Link from 'next/link'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: "YADTQ",
    description: "YADTQ - Yet another distributed queue, it is a distributed task queue that coordinates between multiple workers in a highly distributed setup. This system uses kafka as a communication service and redis as the data store.",
    image: "/yadtq.png",
    technologies: ["Python", "Redis", "Kafka", "Shell"],
    github: "https://github.com/atharvakinage/YADTQ",
  },
  {
    title: "Simul8",
    description: "Fun simulations in raylib using C++. This repo contains two exciting simulations - a solar system and a random walker. This was my attempt to learn OOP and a new graphics library. Inspired from the coding train simulations in processing language",
    image: "/solarsystem.png",
    technologies: ["C++", "Raylib"],
    github: "https://github.com/atharvakinage/Simul8",
  },
  {
    title: "my-fzf",
    description: "A script for interactive file navigation and management using fzf fuzzy finder for powershell. Integrated the system commands for interactions, enabling directory navigation, file editing and deletion",
    image: "/fzfnav.png",
    technologies: ["powershell"],
    github: "https://github.com/atharvakinage/my-fzf",
  },
  {
    title: "Dynamic signature capture android app",
    description: "An android application made in kotlin to capture dymanic signature metrics that includes velocity, accelaration, direction and pressure for forgery detection. Custom canvas collects real time signature data and stores images and csv files for metrics which is used for dataset preparation",
    image: "/sigcapture.png",
    technologies: ["kotlin", "Android studio"],
    github: "https://github.com/atharvakinage/dynamic-signature-capture",
  },
  {
    title: "Interpreter for R programming language",
    description: "A basic interpreter for R programming language using Python's PLY (Python Lex-Yacc) library. This language supports constructs like variable assignment, loops (for,while,repeat), and conditional statements (if-else). The project is designed to tokenize and parse input source code and recognize the syntax of the language.",
    image: "/Rinterpreter.png",
    technologies: ["Python", "PLY"],
    github: "https://github.com/atharvakinage/Interpreter-for-R-programming-language",
  },
]


export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  <Github size={20} className="mr-2" />
                  GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

