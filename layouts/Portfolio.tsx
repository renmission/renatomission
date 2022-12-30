import Link from "next/link";
import Image from "next/image";
import cabrinimed from "../public/cabrinimed.png";
import jott from "../public/jott.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { BiLink, BiLinkExternal } from "react-icons/bi";
import me from "../public/me.jpg";
import { AiFillCheckCircle, AiFillGithub } from "react-icons/ai";

const Portfolio = () => {
  const works = [
    {
      id: 1,
      src: cabrinimed,
      title: "HTML",
      link: "https://cabrinimed.com/",
    },
    {
      id: 2,
      src: jott,
      title: "JOTT",
      link: "https://jott-eight.vercel.app/",
    },
    {
      id: 3,
      src: web3,
      title: "Javascript",
      link: "https://cabrinimed.com/",
    },
    {
      id: 4,
      src: web4,
      title: "ReactJS",
      link: "https://cabrinimed.com/",
    },
    {
      id: 5,
      src: web5,
      title: "NodeJS",
      link: "https://cabrinimed.com/",
    },
    {
      id: 6,
      src: web6,
      title: "GraphQL",
      link: "https://cabrinimed.com/",
    },
  ];
  return (
    <section id="portfolio" className="py-16">
      <div className="container">
        <div className="row justify-center pb-12">
          <div className="w-full">
            <div className="section_title pb-6 text-center">
              <h2 className="text-4xl pb-4 font-semibold text-center">Projects</h2>
              <h3 className="main_title">
                Some of the side projects I&apos;m currently working on:
              </h3>
            </div>
          </div>
        </div>

        <section className="grid gap-12 sm:grid-cols-3 py-16">
          <div className="col-span-2 sm:col-span-1">
            <Image src={web3} alt="web3" className="rounded" />
          </div>
          <div className="sm:col-span-2">
            <h2 className="text-3xl font-semibold pb-6">
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

            <div className="grid grid-cols-2 gap-4 py-4 ">
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
                <button className="bg-transparent font-semibold text-white px-16 py-4 sm:py-2 sm:px-4 border border-teal-500 hover:bg-teal-500 rounded">
                  <div className="flex justify-between px-1 hover:text-white">
                    <span className="mr-2 mt-1 pl-1  to-emerald-400 ">
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
            <h2 className="text-3xl font-semibold pb-6">
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

            <div className="grid grid-cols-2 gap-4 py-4 ">
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
                <button className="bg-transparent font-semibold text-white px-16 py-4 sm:py-2 sm:px-4 border border-teal-500 hover:bg-teal-500 rounded">
                  <div className="flex justify-between px-1 hover:text-white">
                    <span className="mr-2 mt-1 pl-1  to-emerald-400 ">
                      <BiLinkExternal />
                    </span>
                    <span>View Demo</span>
                  </div>
                </button>
              </Link>
            </div>
            
          </div>
          <div className="col-span-2 sm:col-span-1">
            <Image src={web4} alt="web4" className="rounded" />
          </div>
        </section>

         <section className="grid gap-12 sm:grid-cols-3 py-16">
          <div className="col-span-2 sm:col-span-1">
            <Image src={web5} alt="web5" className="rounded" />
          </div>
          <div className="sm:col-span-2">
            <h2 className="text-3xl font-semibold pb-6">
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

            <div className="grid grid-cols-2 gap-4 py-4 ">
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
                <button className="bg-transparent font-semibold text-white px-16 py-4 sm:py-2 sm:px-4 border border-teal-500 hover:bg-teal-500 rounded">
                  <div className="flex justify-between px-1 hover:text-white">
                    <span className="mr-2 mt-1 pl-1  to-emerald-400 ">
                      <BiLinkExternal />
                    </span>
                    <span>View Demo</span>
                  </div>
                </button>
              </Link>
            </div>
            
          </div>
        </section>


      </div>
    </section>
  );
};

export default Portfolio;
