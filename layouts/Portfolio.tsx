import Image from 'next/legacy/image';

import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';

const Portfolio = () => {
  const webs = [
    {
      id: 1,
      src: web1,
      title: 'HTML',
    },
    {
      id: 2,
      src: web2,
      title: 'CSS',
    },
    {
      id: 3,
      src: web3,
      title: 'Javascript',
    },
    {
      id: 4,
      src: web4,
      title: 'ReactJS',
    },
    {
      id: 5,
      src: web5,
      title: 'NodeJS',
    },
    {
      id: 6,
      src: web6,
      title: 'GraphQL',
    },
  ];
  return (
    <section>
      <div className="flex flex-col gap-10 pb-10 lg:flex-row lg:flex-wrap">
        {webs.map(({ id, src, title }) => (
          <div
            key={id}
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer basis-1/3 flex-1"
          >
            <Image
              src={src}
              alt={title}
              className="rounded-lg object-cover"
              width={100}
              height={100}
              layout="responsive"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
