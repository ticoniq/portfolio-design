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
    { name: 'ReactJS', icon: <FaReact />, color: 'text-{#00D8FF}' },
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
      title: "Leaderboard",
      image: project1,
      details:
        "Leaderboard is a way to track the performance of teams in a competitive environment. It is displayed as a list, with the teams ranked by their scores. Leaderboards provide a sense of accomplishment, and to create a sense of community. ",
      techStack: "HTML, CSS, JavaScript, Web-Pack",
      live: "https://leaderboard-5318etbmg-ticoniq.vercel.app",
      source: "https://github.com/ticoniq/Leaderboard",
    },
    {
      id: 2,
      title: "Portfolio Template",
      image: project1,
      details:
        "Portfolio template is designed to be user-friendly and easy to navigate. You can learn more about me and my work by exploring the different sections, including my projects, work experience, and education.",
      techStack: "HTML, CSS, JavaScript",
      live: "https://portfolio-ticoniq.vercel.app",
      source: "https://github.com/ticoniq/Portfolio",
    },
    {
      id: 3,
      title: "Bookstore",
      image: project1,
      details:
        "bookstore React JS project is a web application that allows users to browse and purchase books. The project can be built using React JS, a JavaScript library for building user interfaces.",
      techStack: "ReactJS, Redux, Route, Tailwind CSS, DaisyUI, API",
      live: "https://bookstore-theta-flax.vercel.app",
      source: "https://github.com/ticoniq/bookstore",
    },
  ]);

  const sortedProjects = [...projects].sort((a, b) => b.id - a.id);

  const fadeInAnimationVarients = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.01 * index,
      },
    }),
  };

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
              <div className="" key={item.id}>
                <div className="relative mb-6 overflow-hidden bg-cover bg-no-repeat bg-black shadow-lg">
                  <img src={item.image} alt={item.title} className="w-full" />
                  {/* <a onClick={() => openModal(index)}>
                    <div className="mask absolute inset-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]" />
                  </a> */}
                    <div
                      className="absolute inset-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out bg-[hsla(0,0%,99%,0.15)]">
                        <div className="flex h-full items-start justify-start">
                          <div className="m-6 text-white">
                            <h5 className="mb-3 text-lg font-bold">{item.title}</h5>
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