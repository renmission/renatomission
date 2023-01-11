import React, { FC, ReactNode, useState } from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-5/6 mx-auto">
      <section className="py-10 pb-2 items-center">
        <nav className="text-center mb-6 flex flex-col sm:justify-between sm:flex-row sm:flex-wrap">
          <div className="text-3xl md:text-4xl font-bold text-black py-4 sm:py-2">
            <h1>
              Renato Mission
            </h1>
          </div>

          <div className="py-4">
            <Link
              href="https://drive.google.com/file/d/1JvH_ZgyFGmfu62IwvOXkkmYfT8AKktxO/view?usp=share_link"
              target="_blank"
              legacyBehavior
            >
              <a className="text-sm bg-blue-700  text-white px-12 py-4 font-semibold rounded-md  sm:px-6 sm:py-3">
                Download CV
              </a>
            </Link>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Header;
