import React from "react";
import PropTypes from "prop-types";

function Project(props) {
  return(
    <React.Fragment>
      <a rel="noreferrer" href={props.url} target="_blank">
        <div className="w-full h-full mx-auto p-1 overflow-hidden relative cursor-pointer">
        { props.img.includes("png") ? 
          <img className="mx-auto w-82 min-h-52 h-80 rounded-md" src={props.img} alt={props.id}/>
        :
        <video className="object-cover mx-auto w-4/5 min-h-52 h-80 rounded-md" controls muted>
          <source src={props.img} type="video/mp4" />
        </video>
        }
          <div className="mx-auto w-2/3 p-2.5 top-0 inset-x-0 text-lg text-left select-none font-semibold :hover:brightness-75 dark:hover:text-sky-400 hover:text-blue-700 space-y-2">
            <p className="tracking-wide font-bold uppercase">
              {props.name}
            </p>
            <p className="text-xs">
              {props.language}  
            </p>
            <p className="text-sm">
              {props.description}
            </p>
          </div>
        </div>
      </a>
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
  description: PropTypes.string
}