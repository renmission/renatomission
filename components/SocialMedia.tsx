import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillGithub,
    AiFillMail,
  } from "react-icons/ai";
  
const SocialMedia = () => {
    return(
        <>
            <div className="text-5xl flex justify-center gap-10 py-3 text-gray-600 dark:text-white">
          <a href="https://twitter.com/ren_mission" target="_blank" rel="noreferrer">
            <AiFillTwitterCircle />
          </a>
          <a href="https://www.linkedin.com/in/renmission/" target="_blank" rel="noreferrer">
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/renmission" target="_blank" rel="noreferrer">
            <AiFillGithub />
          </a>
          <a href="mailto:missionrenjr@gmail.com" target="_blank" rel="noreferrer">
            <AiFillMail />
          </a>
        </div>
        </>
    )
}