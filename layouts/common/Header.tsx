import React, { FC, ReactNode, useState } from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <section className="py-10 pb-2">
        <nav className="mb-12 flex justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white tracking-wide">
              Renato Mission
            </h1>
          </div>

          <div>
            <Link
              href="https://drive.google.com/file/d/1Sjv2D1y0Wt8LZp2LqNyZJ-qsg34CxIUS/view?usp=share_link"
              target="_blank"
              legacyBehavior
            >
              <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 font-semibold rounded-md ml-5 ">
                Hire me?
              </a>
            </Link>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Header;
