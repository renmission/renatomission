import Link from 'next/link';
import Image from 'next/image';
import cabrinimed from '../public/cabrinimed.png';
import jott from '../public/jott.png';
import mediumClone from '../public/mediumClone.png';
import median from '../public/median.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';
import { BiLink, BiLinkExternal } from 'react-icons/bi';
import me from '../public/me.jpg';
import { AiFillCheckCircle, AiFillGithub } from 'react-icons/ai';

interface PortfolioProps {
  id: number;
  src: any;
  title: string;
  excerpt: string;
  stack: string[];
  githubLink: string;
  demoLink: string;
}

const Portfolio = () => {
  const Portfolio: PortfolioProps[] = [
    {
      id: 1,
      src: median,
      title: 'Median',
      excerpt: 'Blog application with Content Management system',
      stack: ['React', 'GraphQL', 'GraphQL', 'TailwindCSS'],
      githubLink: 'https://github.com/renmission/median-blog',
      demoLink: 'https://median-blog.vercel.app/',
    },
    {
      id: 3,
      src: mediumClone,
      title: 'Medium Clone',
      excerpt: 'Medium website clone.',
      stack: ['React', 'TailwindCSS', 'TypeScript', 'Sanity'],
      githubLink: 'https://github.com/renmission/medium-clone',
      demoLink: '/#',
    },
    {
      id: 3,
      src: jott,
      title: 'Jott - Note Taking App',
      excerpt: 'Advanced Note taking application.',
      stack: ['React', 'React Bootstrap', 'TypeScript'],
      githubLink: 'https://github.com/renmission/jott',
      demoLink: 'https://jott-eight.vercel.app/',
    },
  ];

  return (
    <section id="portfolio" className="py-16 lg:w-5/6 mx-auto">
      <div className="row justify-center">
        <div className="w-full">
          <div className="section_title pb-6 text-center text-white">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-black">
              Projects
            </h2>
            <h3 className="mb-6 text-lg font-normal text-gray-200 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-600">
              Some of the side projects I&apos;m currently working on:
            </h3>
          </div>
        </div>
      </div>

      {Portfolio.map((project) => (
        <section key={project.id} className="grid gap-12 sm:grid-cols-3 py-16">
          <div className="col-span-2 sm:col-span-1 sm:block">
            <Image
              src={project.src}
              alt={project.title}
              className="rounded shadow-lg"
            />
          </div>
          <div className="sm:col-span-2">
            <h2 className="text-3xl font-semibold pb-6 text-black">
              {project.title}
            </h2>
            <p className="text-xl pb-3 leading-8 max-w-full text-gray-600">
              {project.excerpt}
            </p>
            <div className="py-2">
              <Link href="https://github.com/renmission/jott" legacyBehavior>
                <a
                  className="text-gray-600 hover:text-blue-700 transition-all ease-in-out"
                  target="_blank"
                >
                  <div className="flex flex-row">
                    <span className="text-2xl">
                      <BiLink />
                    </span>
                    <span className="text-xl"> Github Repo</span>
                  </div>
                </a>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-4 py-2 mt-2 text-gray-600">
              {project.stack.map((item, index) => (
                <div key={index} className="flex flex-row">
                  <span className="text-xl pr-2 text-blue-700">
                    <AiFillCheckCircle />
                  </span>
                  <span className="text-xl">{item}</span>
                </div>
              ))}
            </div>

            <div className="py-6">
              <Link href={'https://jott-eight.vercel.app/'} target="_blank">
                <button className="text-md text-center font-semibold py-3 px-6 text-black hover:text-white cursor-pointer hover:bg-blue-700 transition ease-in-out delay-150 border border-blue-700 rounded">
                  <div className="flex items-center">
                    <span className="mr-2">
                      <BiLinkExternal />
                    </span>
                    <span>View Demo</span>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </section>
      ))}

    
      <div className="py-16">
        <div className="max-w-7xl md:w-1/3 mx-auto">
          <Link href={'#getIntouch'}>
            <h2 className="text-2xl text-center font-semibold p-4 text-black hover:text-white cursor-pointer hover:bg-blue-700 transition ease-in-out delay-150 border border-blue-700 rounded">
              More, Let&apos;s Talk
            </h2>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
