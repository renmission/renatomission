import Link from "next/link";
import Image from "next/legacy/image";

import cabrinimed from "../public/cabrinimed.png";
import jott from "../public/jott.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

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
    <section>
      <div className="text-3xl font-semibold  text-teal-400 py-3 md:text-3xl lg:text-4xl">
        <h2>Projects</h2>
      </div>
      <div className="text-sm  text-gray-300 pb-6 md:text-md lg:text-lg">
        <p>Some of the side projects I&apos;m working on:</p>
      </div>

      <div className="flex flex-col gap-10 pb-10 ">
        {works.map(({ id, src, title, link }) => (
          <Link key={id} href={link} target="_blank">
            <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer basis-1/3 flex-1">
              <Image
                src={src}
                alt={title}
                className="rounded-lg object-cover"
                width={100}
                height={100}
                layout="responsive"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
