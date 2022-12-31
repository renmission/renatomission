import Image from "next/legacy/image";

import html from "../public/html.png";
import css from "../public/css.png";
import javascript from "../public/javascript.png";
import react from "../public/react.png";
import node from "../public/node.png";
import graphql from "../public/graphql.png";
import nextjs from "../public/nextjs.png";
import mongodb from "../public/mongodb.png";
import { useState } from "react";

const TechStack = () => {
  const [showTitle, setShowTitle] = useState(false);

  const devIcons = [
    {
      id: 1,
      src: html,
      title: "HTML",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
    },
    {
      id: 3,
      src: javascript,
      title: "Javascript",
    },
    {
      id: 4,
      src: react,
      title: "ReactJS",
    },
    {
      id: 5,
      src: node,
      title: "NodeJS",
    },
    {
      id: 6,
      src: graphql,
      title: "GraphQL",
    },
    {
      id: 7,
      src: mongodb,
      title: "MongoDB",
    },
    {
      id: 8,
      src: nextjs,
      title: "NextJS",
    },
  ];

  return (
    <section id="tech" className="py-16">
      <div className="container">
        <div className="row justify-center pb-12">
          <div className="w-full">
            <div className="section_title pb-6 text-center text-white">
              <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">
                My Technology Stack
              </h2>
              <h3 className="mb-6 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                My preferred weapons of choice
              </h3>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 justify-between">
          {devIcons.map(({ id, src, title }) => (
            <div
              key={id}
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-95 duration-300 cursor-pointer basis-1/5 flex-1 lg:basis-2"
            >
              <Image
                src={src}
                alt={title}
                onMouseOver={() => setShowTitle(!showTitle)}
                className="rounded-lg object-cover"
                layout="responsive"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
