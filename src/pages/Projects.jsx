/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import project1 from '../assets/project1.png';
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import {
  EyeIcon,
  CodeBracketIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

function Projects() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Bookstore",
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
      title: "Bookstore3",
      image: project1,
      details:
        "bookstore React JS project is a web application that allows users to browse and purchase books. The project can be built using React JS, a JavaScript library for building user interfaces.",
      techStack: "ReactJS, Redux, Route, Tailwind CSS, DaisyUI, API",
      live: "https://bookstore-theta-flax.vercel.app",
      source: "https://github.com/ticoniq/bookstore",
    },
    {
      id: 4,
      title: "Bookstore4",
      image: project1,
      details:
        "bookstore React JS project is a web application that allows users to browse and purchase books. The project can be built using React JS, a JavaScript library for building user interfaces.",
      techStack: "ReactJS, Redux, Route, Tailwind CSS, DaisyUI, API",
      live: "https://bookstore-theta-flax.vercel.app",
      source: "https://github.com/ticoniq/bookstore",
    },
    {
      id: 5,
      title: "Bookstore5",
      image: project1,
      details:
        "bookstore React JS project is a web application that allows users to browse and purchase books. The project can be built using React JS, a JavaScript library for building user interfaces.",
      techStack: "ReactJS, Redux, Route, Tailwind CSS, DaisyUI, API",
      live: "https://bookstore-theta-flax.vercel.app",
      source: "https://github.com/ticoniq/bookstore",
    },
    {
      id: 6,
      title: "Bookstore6",
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
      <Hero name="MY PROJECTS" details="MADE WITH LOVE" />
      <section>
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
                            <h5 className="mb-3 text-lg font-bold" onClick={() => openModal(index)}>{item.title}</h5>
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

export default Projects;