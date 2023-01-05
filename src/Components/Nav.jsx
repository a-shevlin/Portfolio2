import React from "react";
import { BsMoonStarsFill } from 'react-icons/bs';
import resume from "../assets/Alex Shevlin Resume.pdf";

function Nav() {
  return(
    <React.Fragment>
      <nav className="px-8 py-5 flex justify-between">
        <h1 className="uppercase font-bold tracking-[0.3em] scale-y-110">as</h1>
        <ul className="flex items-center gap-4">
          <li>
            <a href={resume} className="py-1 rounded-lg text-slate-100 bg-gradient-to-r from-blue-500 to-red-600 dark:from-sky-400 dark:to-slate-100 bg-clip-text  text-transparent font-bold animate-text" download>
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  )
}

export default Nav;