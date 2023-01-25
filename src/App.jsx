import React from "react";
import { 
  AiFillLinkedin,
  AiFillGithub, 
} from "react-icons/ai";
import { Nav, Project, About } from "./Components";
import { projects } from "./data";
import alex from "./assets/alex-headshot.png"

function App() {
  return (
    <div className="h-full w-full bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))]  from-blue-200 via-pink-200 to-amber-200  dark:from-sky-900 dark:via-[#0a0a0a] dark:to-blue-800  dark:text-blue-100 text-slate-800">
      <Nav />
      <div className="py-5 font-semibold mx-auto w-3/4 h-full">

        <h4 className="text-xl text-left">Hi, my name is</h4>
        <h1 className="text-5xl text-blue-500 dark:text-sky-400">Alex Shevlin</h1>
        <h3 className="text-4xl py-2 opacity-70">I'm a Full Stack Developer </h3>
        <h5 className="text-sm font-normal leading-6 pb-5">Currently focused on making websites and applications more accessible by everyday people. Reach out to me if you're interested in working together!</h5>
        <div className="text-4xl gap-16 flex mx-auto text-center dark:text-gray-300">
          <a className="ml-auto" href="https://www.linkedin.com/in/alexshevlin/" rel="noreferrer" target="_blank">
            <AiFillLinkedin className="hover:dark:text-sky-500 hover:text-blue-600"/>
          </a>
          <a className="mr-auto" href="https://github.com/a-shevlin/" rel="noreferrer" target="_blank">
            <AiFillGithub className="hover:dark:text-sky-500 hover:text-blue-600"/>
          </a>
        </div>
      </div>
      <div className="w-3/4 mx-auto h-full py-5">
        <div className="mx-auto bg-gradient-to-b from-blue-600 dark:from-sky-500 rounded-full w-64 h-64 relative overflow-hidden">
          <img src={alex} alt="an image of Alex Shevlin" className="fill cover"/>
        </div>
        <About />
      </div>
      <div className="w-3/4 mx-auto h-full flex flex-col">
        <h4 className="text-xl text-left font-semibold pb-3">Full Stack Projects</h4>
        <div className="mx-auto w-full tracking-narrow drop-shadow-lg font-bold p-0 text-center uppercase grid grid-cols-1 lg:grid-cols-2 lg">
          {Object.values(projects).map((project) => (
            <Project
              img={project.img}
              name={project.name}
              language={project.language}
              url={project.url}
              id={project.id}
              key={project.id}
            />
            ))}
          </div>

      </div>
    </div>
  );
}

export default App;
