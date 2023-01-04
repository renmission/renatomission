import Link from "next/link";
import Image from "next/image";
import cabrinimed from "../public/cabrinimed.png";
import jott from "../public/jott.png";
import mediumClone from "../public/mediumClone.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { BiLink, BiLinkExternal } from "react-icons/bi";
import me from "../public/me.jpg";
import { AiFillCheckCircle, AiFillGithub } from "react-icons/ai";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 w-5/6 mx-auto">
      <div className="row justify-center">
        <div className="w-full">
          <div className="section_title pb-6 text-center text-white">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">
              Projects
            </h2>
            <h3 className="mb-6 text-lg font-normal text-gray-200 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
              Some of the side projects I&apos;m currently working on:
            </h3>
          </div>
        </div>
      </div>

      <section className="grid gap-12 sm:grid-cols-3 py-16">
        <div className="col-span-2 sm:col-span-1 hidden sm:block">
          <Image src={jott} alt="Jott - Note Taking App" className="rounded" />
        </div>
        <div className="sm:col-span-2">
          <h2 className="text-3xl font-semibold pb-6 text-white">
            Jott - Note Taking App
          </h2>
          <p className="text-xl pb-3 leading-8 max-w-4xl text-gray-300">
            Advanced Note taking application.
          </p>
          <div className="py-2">
            <Link href="https://github.com/renmission/jott" legacyBehavior>
              <a className="text-white hover:text-gray-500" target="_blank">
                <div className="flex flex-row">
                  <span className="text-2xl">
                    <BiLink />
                  </span>
                  <span className="text-xl"> Github Repo</span>
                </div>
              </a>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:gap-4 py-4 text-white">
            <div className="flex flex-row">
              <span className="text-2xl pr-2 text-teal-400">
                <AiFillCheckCircle />
              </span>
              <span className="text-xl"> ReactJS</span>
            </div>
            <div className="flex flex-row">
              <span className="text-2xl pr-2 text-teal-400">
                <AiFillCheckCircle />
              </span>
              <span className="text-xl"> React Bootstrap</span>
            </div>
            <div className="flex flex-row">
              <span className="text-2xl pr-2 text-teal-400">
                <AiFillCheckCircle />
              </span>
              <span className="text-xl"> TypeScript</span>
            </div>
          </div>

          <div className="py-2">
            <Link href={"https://jott-eight.vercel.app/"} target="_blank">
              <button className="bg-transparent font-semibold text-white px-10 py-4 sm:py-2 sm:px-4 border border-teal-500 hover:bg-teal-500 rounded">
                <div className="flex justify-between px-1 hover:text-white">
                  <span className="mr-2 mt-1 pl-1">
                    <BiLinkExternal />
                  </span>
                  <span>View Demo</span>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-12 sm:grid-cols-3 py-16">
        <div className="sm:col-span-2">
          <h2 className="text-3xl font-semibold pb-6 text-white">
            Medium Clone
          </h2>
          <p className="text-xl pb-3 leading-8 max-w-4xl text-gray-300">
            Medium clone using updated technologies with
            <span className="text-teal-400"> front-end </span> and
            <span className="text-teal-400"> back-end </span>.
          </p>
          <div className="py-2">
            <Link
              href="https://github.com/renmission/medium-clone"
              legacyBehavior
            >
              <a className="text-white hover:text-gray-500" target="_blank">
                <div className="flex flex-row">
                  <span className="text-2xl">
                    <BiLink />
                  </span>
                  <span className="text-xl"> Github Repo</span>
                </div>
              </a>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 py-4 text-white">
            <div className="flex flex-row">
              <span className="text-2xl pr-2 text-teal-400">
                <AiFillCheckCircle />
              </span>
              <span className="text-xl"> ReactJS / TypeScript</span>
            </div>
            <div className="flex flex-row">
              <span className="text-2xl pr-2 text-teal-400">
                <AiFillCheckCircle />
              </span>
              <span className="text-xl"> NextJS</span>
            </div>
            <div className="flex flex-row">
              <span className="text-2xl pr-2 text-teal-400">
                <AiFillCheckCircle />
              </span>
              <span className="text-xl"> TailwindCSS</span>
            </div>
            <div className="flex flex-row">
              <span className="text-2xl pr-2 text-teal-400">
                <AiFillCheckCircle />
              </span>
              <span className="text-xl"> Sanity</span>
            </div>
          </div>

          <div className="py-2">
            <Link href={"https://github.com/renmission"} target="_blank">
              <button className="bg-transparent font-semibold text-white px-10 py-4 sm:py-2 sm:px-4 border border-teal-500 hover:bg-teal-500 rounded">
                <div className="flex justify-between px-1 hover:text-white">
                  <span className="mr-2 mt-1 pl-1">
                    <BiLinkExternal />
                  </span>
                  <span>View Demo</span>
                </div>
              </button>
            </Link>
          </div>
        </div>
        <div className="col-span-3 sm:col-span-1 hidden sm:block">
          <Image src={mediumClone} alt="Medium Clone" className="rounded" />
        </div>
      </section>

      {/* <section className="grid gap-12 sm:grid-cols-3 py-16">
          <div className="col-span-2 sm:col-span-1 hidden sm:block">
            <Image src={web5} alt="web5" className="rounded" />
          </div>
          <div className="sm:col-span-2">
            <h2 className="text-3xl font-semibold pb-6 text-white">
              Web3 Exchange Tracker
            </h2>
            <p className="text-xl pb-3 leading-8 max-w-4xl text-gray-300">
              I&apos;m a Computer Science graduate, A self-taught developer and
              enthusiast. Where I learn the fundamentals of
              <span className="text-teal-400"> front-end </span> and
              <span className="text-teal-400"> back-end web development</span>.
            </p>
            <div className="py-2">
              <Link href="/docs/getting-started" legacyBehavior>
                <a className="text-white hover:text-gray-500" target="_blank">
                  <div className="flex flex-row">
                    <span className="text-2xl">
                      <BiLink />
                    </span>
                    <span className="text-xl"> Github Repo</span>
                  </div>
                </a>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 py-4 text-white">
              <div className="flex flex-row">
                <span className="text-2xl pr-2 text-teal-400">
                  <AiFillCheckCircle />
                </span>
                <span className="text-xl"> NextJS</span>
              </div>
              <div className="flex flex-row">
                <span className="text-2xl pr-2 text-teal-400">
                  <AiFillCheckCircle />
                </span>
                <span className="text-xl"> Solidity</span>
              </div>
              <div className="flex flex-row">
                <span className="text-2xl pr-2 text-teal-400">
                  <AiFillCheckCircle />
                </span>
                <span className="text-xl"> Redux / React</span>
              </div>
              <div className="flex flex-row">
                <span className="text-2xl pr-2 text-teal-400">
                  <AiFillCheckCircle />
                </span>
                <span className="text-xl"> Firebase / Superbase</span>
              </div>
            </div>

            <div className="py-2">
              <Link href={"https://github.com/renmission"} target="_blank">
                <button className="bg-transparent font-semibold text-white px-10 py-4 sm:py-2 sm:px-4 border border-teal-500 hover:bg-teal-500 rounded">
                  <div className="flex justify-between px-1 hover:text-white">
                    <span className="mr-2 mt-1 pl-1">
                      <BiLinkExternal />
                    </span>
                    <span>View Demo</span>
                  </div>
                </button>
              </Link>
            </div>
            
          </div>
        </section> */}

      <div className="py-16">
        <div className="max-w-7xl md:w-1/3 mx-auto">
          
            <Link href={"#getIntouch"}>
              <h2 className="text-2xl text-center font-semibold p-4 text-white cursor-pointer hover:bg-teal-500 transition ease-in-out delay-150 border border-teal-500 rounded-lg">
                More, Let&apos;s Talk
              </h2>
            </Link>
          
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
