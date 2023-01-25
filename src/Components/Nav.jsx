import React from "react";
import { BsMoonStarsFill } from 'react-icons/bs';
import resume from "../assets/Alex Shevlin Resume.pdf";

function Nav() {
  return(
    <React.Fragment>
      <nav className="relative mx-auto h-8 z-40">
        <div className="w-full fixed px-8 py-3 top-0 left-1/2 -translate-x-1/2 uppercase  bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))]  from-blue-200 via-pink-200 to-amber-200 dark:from-sky-800 dark:via-[#000000] dark:to-[#2348c4]">
          <div className="w-10/12 mx-auto flex justify-between">

          <h1 className="font-bold tracking-[0.3em] my-auto scale-y-110">as</h1>
          <ul className="flex items-center gap-4">
            <li>
              <a href={resume} className="py-1 rounded-lg text-slate-100 bg-gradient-to-r from-blue-500 to-red-600 dark:from-sky-400 dark:to-slate-100 bg-clip-text text-2xl text-transparent font-bold animate-text" download>
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