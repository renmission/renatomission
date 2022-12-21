import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillGithub,
    AiFillMail,
  } from 'react-icons/ai';
  
  import Image from 'next/legacy/image';
  import me from '../public/me.jpg';
  
  const Hero = () => {
    return (
      <>
        <section className="min-h-screen">
          <div className="relative mx-auto rounded-full w-40 h-40 mt-5 overflow-hidden md:h-50 md:w-50">
            <Image src={me} alt="deved" layout="fill" objectFit="cover" />
          </div>
  
          <div className="text-center py-10">
            <h2 className="text-5xl py-2 text-teal-400 font-medium md:text-6xl ">
              Ren Mission
            </h2>
            <h3 className="text-2xl font-semibold text-gray-800 py-2 md:text-3xl dark:text-white">
              Web Developer
            </h3>
            <p className="text-xl py-6 leading-8 text-gray-700 md:text-xl max-w-lg mx-auto dark:text-white">
              I`m a Web developer with a strong passion for building applications.
              Specializing in ReactJS, NextJS, NodeJS, GraphQL, ExpressJS &
              NestJS. Also Experienced with QA automation test with Cypress and
              Manual test.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-10 py-3 text-gray-600 dark:text-white">
            <a href="https://twitter.com/ren_mission">
              <AiFillTwitterCircle />
            </a>
            <a href="https://www.linkedin.com/in/renmission/">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/renmission">
              <AiFillGithub />
            </a>
            <a href="mailto:missionrenjr@gmail.com">
              <AiFillMail />
            </a>
          </div>
        </section>
      </>
    );
  };
  
  export default Hero;
  