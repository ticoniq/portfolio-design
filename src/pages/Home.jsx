/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaReact,
  FaCss3,
  FaHtml5,
  FaChrome,
  FaGitAlt,
} from "react-icons/fa";
import {  
  SiDaisyui, 
  SiJavascript,
  SiNodedotjs,
  SiFigma,
  SiNpm,
} from "react-icons/si";
import { IoIosArrowRoundForward } from "react-icons/io";
import { TbBrandVscode } from "react-icons/tb";
import {
  EyeIcon,
  CodeBracketIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import Hero from "../components/Hero";
import project1 from '../assets/project1.png'

function Home() {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 />, color: 'text-[#E44D26]' },
    { name: 'CSS', icon: <FaCss3 />, color: 'text-blue-600' },
    { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-400' },
    { name: 'ReactJS', icon: <FaReact />, color: 'text-[#00D8FF]' },
    { name: 'NodeJS', icon: <SiNodedotjs />, color: 'text-[#539E43]' },
    { name: 'Figma ', icon: <SiFigma />, color: 'text-red-500' },
    { name: 'Chrome', icon: <FaChrome />, color: 'text-yellow-500' },
    { name: 'Vscode', icon: <TbBrandVscode />, color: 'text-blue-500' },
    { name: 'Git', icon: <FaGitAlt />, color: 'text-[#DE4C36]' },
    { name: 'NPM', icon: <SiNpm />, color: 'text-[#C12127]' },
  ]

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Bookstore3",
      image: project1,
      details:
        "bookstore React JS project is a web application that allows users to browse and purchase books. The project can be built using React JS, a JavaScript library for building user interfaces.",
      techStack: "ReactJS, Redux, Route, Tailwind CSS, DaisyUI, API",
      live: "https://bookstore-theta-flax.vercel.app",
      source: "https://github.com/ticoniq/bookstore",
    },
    {
      id: 2,
      title: "Bookstore2",
      image: project1,
      details:
        "bookstore React JS project is a web application that allows users to browse and purchase books. The project can be built using React JS, a JavaScript library for building user interfaces.",
      techStack: "ReactJS, Redux, Route, Tailwind CSS, DaisyUI, API",
      live: "https://bookstore-theta-flax.vercel.app",
      source: "https://github.com/ticoniq/bookstore",
    },
    {
      id: 3,
      title: "Bookstore1",
      image: project1,
      details:
        "bookstore React JS project is a web application that allows users to browse and purchase books. The project can be built using React JS, a JavaScript library for building user interfaces.",
      techStack: "ReactJS, Redux, Route, Tailwind CSS, DaisyUI, API",
      live: "https://bookstore-theta-flax.vercel.app",
      source: "https://github.com/ticoniq/bookstore",
    },
  ]);

  const sortedProjects = [...projects].sort((a, b) => b.id - a.id);

  const techStackToArray = (techStack) => {
    return techStack ? techStack.split(", ") : [];
  };

  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

  const openModal = (index) => {
    setSelectedProjectIndex(index);
  };

  const closeModal = () => {
    setSelectedProjectIndex(null);
  };

  useEffect(() => {
    if (selectedProjectIndex !== null) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [selectedProjectIndex]);

  const prevProject = () => {
    setSelectedProjectIndex((prevIndex) =>
      prevIndex === 0 ? sortedProjects.length - 1 : prevIndex - 1
    );
  };

  const nextProject = () => {
    setSelectedProjectIndex((prevIndex) =>
      prevIndex === sortedProjects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const selectedProject = sortedProjects[selectedProjectIndex];
  
  return (
    <>
      <Hero name="Your Name" details="WEB-DESIGNER" />
      <section className="text-black">
        <div className="container space-y-10 py-16">
          <article className="max-w-[35rem] mx-auto">
            <h3 className="font-bold text-[2rem] mb-1">About Me</h3>
            <p className="text-base">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
          </article>
          <article className="max-w-[35rem] mx-auto">
            <h3 className="font-bold text-[2rem] mb-4">My Skills</h3>
            <ul className="flex flex-wrap gap-5 justify-start items-center text-white">
              {skills.map((tool, index) => (
                <li
                  key={index} 
                  className={`flex flex-row flex-grow items-start gap-2`}>
                  <span className={`text-xl ${tool.color}`}>{tool.icon}</span>
                  <p className="font-semibold text-base text-black">{tool.name}</p>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="container py-5 md:py-16">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {sortedProjects.map((item, index) => (
              <div className="" key={item.id} onClick={() => openModal(index)}>
                <div className="relative mb-6 overflow-hidden bg-cover bg-no-repeat bg-black shadow-lg">
                  <img src={item.image} alt={item.title} className="w-full" />
                    <div
                      className="absolute inset-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out bg-[hsla(0,0%,99%,0.15)]">
                        <div className="flex h-full items-start justify-start">
                          <div className="m-6 text-white">
                            <h5 className="mb-3 text-lg font-bold cursor-pointer" onClick={() => openModal(index)}>{item.title}</h5>
                            {techStackToArray(item.techStack).map((tech, index) => (
                              <span
                                key={index}
                                className="mr-2 my-1 border-2 badge border-newbBlue badge-outline text-newbBlue font-semibold">
                                {tech}
                              </span>
                            ))}
                            <div className="mt-4 flex justify-start gap-5 self-end text-sm">
                              <a
                                href={item.source}
                                rel="noreferrer"
                                target="_blank"
                                className="text-newDarkGray font-bold flex gap-1">
                                <CodeBracketIcon className="w-4" />
                                Source Code
                              </a>
                              <a
                                href={item.live}
                                rel="noreferrer"
                                target="_blank"
                                className="text-newDarkGray font-bold flex gap-1">
                                <EyeIcon className="w-4" />
                                Live Preview
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                </div>
              </div>
            ))}
          </div>
          {/* Modal Popup */}
          {selectedProjectIndex !== null && (
            <div className="fixed inset-0 grid place-items-center z-50 max-h-full bg-black bg-opacity-75 overflow-y-scroll">
              <div
                className="max-w-5xl bg-white dark:bg-neutral rounded-lg m-5">
                <article className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <figure className="bg-black">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="rounded-lg shadow-lg w-full h-full"
                    />
                  </figure>
                  <aside className="p-4">
                    <div className="flex justify-end items-center">
                      <XMarkIcon
                        className="w-6 cursor-pointer"
                        onClick={closeModal}
                      />
                    </div>
                    <h2 className="text-2xl font-bold">
                      {selectedProject.title}
                    </h2>
                    <p className="mt-4">
                      {selectedProject.details}
                    </p>
                    <div className="my-5">
                      {techStackToArray(selectedProject.techStack).map(
                        (tech, index) => (
                          <span
                            key={index}
                            className="mr-2 my-1 border-2 badge badge-outline font-semibold">
                            {tech}
                          </span>
                        )
                      )}
                    </div>
                    <div className="mt-4 flex justify-start gap-5 text-sm">
                      <a
                        href={selectedProject.source}
                        rel="noreferrer"
                        target="_blank"
                        className="font-bold flex gap-1 hover:text-newYellow">
                        <CodeBracketIcon className="w-4" />
                        Source Code
                      </a>
                      <a
                        href={selectedProject.live}
                        rel="noreferrer"
                        target="_blank"
                        className="text-newDarkGray font-bold flex gap-1 dark:text-white hover:text-newYellow dark:hover:text-newYellow">
                        <EyeIcon className="w-4" />
                        Live Preview
                      </a>
                    </div>
                    <div className="flex justify-between mt-6 relative top-0">
                      <button
                        onClick={prevProject}
                        className="text-newDarkGray font-semibold dark:text-white hover:text-newYellow dark:hover:text-newYellow">
                        Previous
                      </button>
                      <button
                        onClick={nextProject}
                        className="text-newDarkGray font-semibold dark:text-white hover:text-newYellow dark:hover:text-newYellow">
                        Next
                      </button>
                    </div>
                  </aside>
                </article>
              </div>
            </div>
          )}
          <div className="flex flex-col justify-center items-center gap-10 mt-10 md:flex-row">
            <Link
              to="/project"
              className="p-3 px-10 text-black bg-[#D9D9D9] text-base flex justify-center items-center gap-1 w-full md:w-fit">
              <IoIosArrowRoundForward className="text-2xl" />
                All Projects
            </Link>
            <Link
              to="/contact"
              className="p-3 px-10 text-black bg-[#D9D9D9] text-base flex justify-center items-center gap-1 w-full md:w-fit">
              <IoIosArrowRoundForward className="text-2xl" />
                Contact me
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home