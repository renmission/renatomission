import Image from "next/legacy/image";
import me from "../public/me.jpg";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Hero = () => {
  return (
    <>
      <section className="grid grid-cols-3 gap-4" id="about">
        <div className="py-5 pr-6 col-span-6 lg:col-span-4 lg:col-start-1 lg:col-end-4 ">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 py-2 leading-10 text-teal-400 font-bold text-4xl sm:text-5xl">
            Hello! I&apos;m Ren, a developer based in Philippines.
          </h2>

          <p className="text-xl pt-5 pb-3 leading-8 md:text-xl max-w-4xl text-white">
            I love building tools that are
            <span className="text-teal-400"> user-friendly, simple, </span> and
            <span className="text-teal-400"> delightful </span>.
          </p>

          <p className="text-xl pb-3  leading-8 md:text-xl max-w-4xl text-white">
            I&apos;m a Computer Science graduate, A self-taught developer and
            enthusiast. Where I learn the fundamentals of
            <span className="text-teal-400"> front-end </span> and
            <span className="text-teal-400"> back-end web development</span>.
          </p>

          <p className="text-xl pb-3  leading-8 md:text-xl max-w-4xl text-white">
            Through the years of my experience, I have the opportunity to work
            with both small and large, specialised and cross-functionial teams
            accross different time zones and developed a working style that
            leans towards <span className="text-teal-400">flexibility</span>,
            <span className="text-teal-400">clarity</span>, and
            <span className="text-teal-400"> collaboration</span>.
          </p>

          <p className="text-xl pb-3  leading-8 md:text-xl max-w-4xl text-white">
            I&apos;m currently looking for a new role as a developer.
            <Link
              href={
                "https://drive.google.com/file/d/1Sjv2D1y0Wt8LZp2LqNyZJ-qsg34CxIUS/view?usp=share_link"
              }
              target="_blank"
              legacyBehavior
            >
              <span className="border h-16 rounded-[50%] py-2 px-1 border-teal-400">
                <span className="font-semibold"> Hire me</span>
                <span className="font-semibold italic ">?</span>
              </span>
            </Link>
          </p>

          <div className="py-5 flex flex-col sm:flex-row sm:flex-wrap">
            <div className="py-2">
              <Link
                href={"https://www.linkedin.com/in/renmission/"}
                target="_blank"
              >
                <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold px-16 py-4 sm:py-2 sm:px-4 rounded mr-4">
                  <div className="flex justify-between">
                    <span className="mr-2 mt-1">
                      <AiFillLinkedin />
                    </span>
                    <span>View Linkedin</span>
                  </div>
                </button>
              </Link>
            </div>
            
            

            <div className="py-2">
              <Link href={"https://github.com/renmission"} target="_blank">
                <button className="bg-transparent font-semibold text-white px-16 py-4 sm:py-2 sm:px-4 border border-teal-500 hover:bg-teal-500  rounded">
                  <div className="flex justify-between px-1 hover:text-white">
                    <span className="mr-2 mt-1 pl-1  to-emerald-400 ">
                      <AiFillGithub />
                    </span>
                    <span>View GitHub</span>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="relative invisible rounded-md w-72 h-96 mt-5 overflow-hidden lg:visible col-end-7 col-span-2">
          <Image
            src={me}
            alt="ren mission"
            layout="fill"
            objectFit="cover"
            className="object-contain"
          />
        </div>
      </section>

    </>
  );
};

export default Hero;
