import React, { FC, ReactNode, useState } from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <section className="py-10 pb-2">
        <nav className="text-center mb-6 flex flex-col sm:justify-between sm:flex-row sm:flex-wrap">
          <div className="text-4xl font-bold text-white py-4 sm:py-2">
            <h1>
              Renato Mission
            </h1>
          </div>

          <div className="py-4">
            <Link
              href="https://drive.google.com/file/d/1Sjv2D1y0Wt8LZp2LqNyZJ-qsg34CxIUS/view?usp=share_link"
              target="_blank"
              legacyBehavior
            >
              <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-16 py-4 font-semibold rounded-md ml-5 sm:px-6 sm:py-2">
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
