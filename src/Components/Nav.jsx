import React from "react";
import { resume } from "../assets";

function Nav() {
  return(
    <React.Fragment>
      <nav className="relative mx-auto h-8 z-40 w-full">
        <div className="w-full fixed px-8 py-3 top-0 left-1/2 -translate-x-1/2 uppercase">
          <div className="w-8/12 mx-auto flex justify-between">

          <h1 className="text-3xl font-bold tracking-[-0.1em] my-auto scale-y-110 lowercase">as</h1>
          <ul className="flex items-center gap-4">
            <li>
              <a href={resume} className="py-1 rounded-lg text-slate-100 bg-gradient-to-r from-blue-500 to-red-600 dark:from-sky-400 dark:to-slate-100 bg-clip-text text-2xl text-transparent font-bold animate-text" rel="noreferrer" target="_blank">
                Resume
              </a>
            </li>
          </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default Nav;