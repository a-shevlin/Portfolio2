import React from "react";

import { Nav, Project, About } from "./Components";
import { projects } from "./data";


function App() {
  return (
    <div className="h-full w-full dark:bg-[#080808] bg-[#faf7f6] dark:text-blue-100 text-slate-800">
      <div className="w-7/12  mx-auto">
        <Nav />
        <div className="py-10 mx-auto h-full">
          <About />
          </div>
          <div className="w-full mx-auto h-full flex flex-col px-8 py-4">
            <h4 className="text-xl text-left font-semibold pb-3">Full Stack Projects</h4>
            <div className="mx-auto w-full tracking-narrow drop-shadow-lg font-bold p-0 text-center grid grid-cols-1 lg:grid-cols-2 gap-5 lg">
              {Object.values(projects).map((project) => (
                <Project
                  img={project.img}
                  name={project.name}
                  language={project.language}
                  url={project.url}
                  description={project.description}
                  id={project.id}
                  key={project.id}
                />
                ))}
              </div>

          </div>
      </div>
      
    </div>
  );
}

export default App;
