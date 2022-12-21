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
    <section>
      <div className="text-2xl font-semibold text-center text-gray-700 py-10 dark:text-white">
        <h2>My Technology Stack</h2>
      </div>
      <div className="flex  gap-5 pb-10 flex-row flex-wrap">
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
    </section>
  );
};

export default TechStack;
