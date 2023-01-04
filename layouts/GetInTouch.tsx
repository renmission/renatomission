import Link from "next/link";

const GetInTouch = () => {
  return (
    <>
      <section className="pt-16 w-5/6 mx-auto" id="getIntouch">
        <div className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">
          <h2>Get in touch</h2>
        </div>
        
        <div className="mb-6 text-lg font-normal text-gray-300 lg:text-xl">
          <p>
            Do you have a job opportunity or idea you&apos;d like to discuss?
            Feel to react me at
            <Link href={"mailto:missionrenjr@gmail.com"}>
              <span className="text-teal-400 font-semibold"> missionrenjr@gmail.com </span>
            </Link>
            You can also find me on
            <Link href={"https://twitter.com/ren_mission"} target="_blank">
              <span className="text-teal-400 font-semibold"> Twitter</span>
            </Link>,
            <Link href={"https://github.com/renmission"} target="_blank">
              <span className="text-teal-400 font-semibold"> GitHub</span>
            </Link>
            , and
            <Link
              href={"https://www.linkedin.com/in/renmission/"}
              target="_blank"
            >
              <span className="text-teal-400 font-semibold"> Linkedin</span>
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
};

export default GetInTouch;
