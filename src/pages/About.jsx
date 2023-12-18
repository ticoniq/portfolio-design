import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import {
  FaReact,
  FaCss3,
  FaHtml5,
  FaChrome,
  FaGitAlt,
} from "react-icons/fa";
import {  
  SiJavascript,
  SiNodedotjs,
  SiFigma,
  SiNpm,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import Hero from "../components/Hero";

function About() {
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
  
  return (
    <>
      <Hero name="ABOUT ME" details="IT’S A-ME, MARIO!" />
      <section className="text-black">
        <div className="container space-y-10 py-16">
          <article className="max-w-[45rem] mx-auto">
            <h3 className="font-bold text-[2rem] mb-1">My Background</h3>
            <p className="text-base whitespace-break-spaces">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. <br /><br />

            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. <br /><br />

            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   <br /><br />

            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   <br /><br />

            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla
            </p>
          </article>
          <article className="max-w-[45rem] mx-auto">
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
          <article className="max-w-[45rem] mx-auto">
            <h3 className="font-bold text-[2rem] mb-1">My Hobbies and Interests</h3>
            <p className="text-base whitespace-break-spaces">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. <br /><br />

              At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. <br />
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. <br /><br />  

              Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla
            </p>
          </article>
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

export default About