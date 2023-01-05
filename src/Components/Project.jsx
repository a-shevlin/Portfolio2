import React from "react";
import PropTypes from "prop-types";

function Project(props) {
  return(
    <React.Fragment>
      <div className="w-full h-full mx-auto p-1 overflow-hidden relative cursor-pointer hover:brightness-75 dark:hover:brightness-75">
        { props.img.includes("png") ? 
        <a rel="noreferrer" href={props.url} target="_blank">
          <img className="object-cover w-full min-h-52 h-80 rounded-lg" src={props.img} alt={props.id}/>
        </a>
        :
        <a rel="noreferrer" href={props.url} target="_blank">
        <video className="object-cover w-full min-h-52 h-80 rounded-lg" controls muted>
          <source src={props.img} type="video/mp4" />
        </video>
        </a>
        }
          <div class="w-full p-2.5 top-0 inset-x-0 text-slate-200 text-xl text-left select-none font-semibold">
            <p className="tracking-wide">
              {props.name}
            </p>
            <p className="text-sm">
              {props.language}  
            </p>
          </div>
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