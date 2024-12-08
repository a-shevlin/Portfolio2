import React from "react";
import alex from "../assets/alex-headshot.png";
import { 
  AiFillLinkedin,
  AiFillGithub, 
} from "react-icons/ai";

function About() {
  return(
    <React.Fragment>
      <div className="grid md:grid-cols-2">
        <div className="my-auto h-fit">
          <h4 className="text-5xl text-left">Hi, I'm <span className="text-5xl text-blue-500 dark:text-sky-400">Alex Shevlin</span></h4>
          <h3 className="text-4xl py-2 font-semibold opacity-70">Full Stack Developer </h3>
        </div>
        <div className=" h-full py-5 w-3/4 mx-auto">
          <div>
            <div className="mx-auto bg-gradient-to-b from-blue-600 dark:from-sky-500 rounded-full w-64 h-64 relative overflow-hidden">
              <img src={alex} alt="Alex Shevlin" className="fill cover"/>
            </div>
          </div>
          <div className="text-4xl gap-16 flex mx-auto dark:text-gray-300">
            <a className="ml-auto" href="https://www.linkedin.com/in/alexshevlin/" rel="noreferrer" target="_blank">
              <AiFillLinkedin className="hover:dark:text-sky-500 hover:text-blue-600"/>
            </a>
            <a className="mr-auto" href="https://github.com/a-shevlin/" rel="noreferrer" target="_blank">
              <AiFillGithub className="hover:dark:text-sky-500 hover:text-blue-600"/>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full mx-auto">
        <h4 className="text-xl text-left font-semibold py-3">My Experience</h4>
        <div className="space-y-3 pb-4 leading-7 w-5/6 mx-auto text-justify">
          <p className="pt-4">I am a skilled Software Engineer with 3 years of experience in this field and 6 years across Management roles. Day to day I use C# and JavaScript with frameworks such as React and Angular and both SQL and NoSQL databases like MongoDB, MS SQL, and Firestore. </p>
          <p>I am detail-oriented and able to effectively plan and execute projects from start to finish, ensuring that all deadlines are met and that all stakeholders are kept informed. I have a proven track record of leading teams, and am skilled in team building and communication. </p> 
          <p>Overall, I hope to be valuable asset to any team, with a combination of technical, managerial, and marketing expertise.</p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default About;

