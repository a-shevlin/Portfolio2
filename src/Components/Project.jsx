import React from "react";
import PropTypes from "prop-types";

function Project(props) {
  return(
    <React.Fragment>
      <div className="w-full h-full mx-auto p-1 overflow-hidden relative cursor-pointer">
        { props.img.includes("png") ? 
          <img className="object-cover w-full min-h-52 h-80 rounded-lg" src={props.img} alt={props.id}/>
        :
        <video className="object-cover w-full min-h-52 h-80 rounded-lg" controls muted>
          <source src={props.img} type="video/mp4" />
        </video>
        }
        <a rel="noreferrer" href={props.url} target="_blank">
          <div class="w-full p-2.5 top-0 inset-x-0 text-blue-500 dark:text-slate-200 text-xl text-left select-none font-semibold :hover:brightness-75 dark:hover:text-sky-400 hover:text-blue-700">
            <p className="tracking-wide">
              {props.name}
            </p>
            <p className="text-sm">
              {props.language}  
            </p>
          </div>
        </a>
      </div>
    </React.Fragment>
  )
}

export default Project;

Project.propTypes = {
  name: PropTypes.string,
  language: PropTypes.string,
  img: PropTypes.string,
  id: PropTypes.number,
  url: PropTypes.string,
}