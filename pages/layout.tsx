/* eslint-disable @next/next/no-img-element */
import React from "react";
import Emotion from "../components/Emotion";
import Intro from "../components/Intro";

const Homepage = () => {
  return (
    <div>
      <div className="relative flex flex-col h-screen text-white bg-black lg:flex-row">
        <div className="lg:h-screen lg:w-[150px] bg-black z-20 flex flex-col lg:items-center lg:p-8 p-4 relative">
          <div className="cursor-pointer lg:mt-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M6 6h-6v-6h6v6zm9-6h-6v6h6v-6zm9 0h-6v6h6v-6zm-18 9h-6v6h6v-6zm9 0h-6v6h6v-6zm9 0h-6v6h6v-6zm-18 9h-6v6h6v-6zm9 0h-6v6h6v-6zm9 0h-6v6h6v-6z" />
            </svg>
          </div>
          <div className="absolute hidden m-auto -rotate-90 top-1/2 lg:block">
            <div className="space-x-12 text-lg font-semibold">
              <a
                href=""
                className="transition-all transform opacity-50 hover:opacity-100"
              >
                Facebook
              </a>
              <a
                href=""
                className="transition-all transform opacity-50 hover:opacity-100"
              >
                Instagram
              </a>
              <a
                href=""
                className="transition-all transform opacity-50 hover:opacity-100"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
        <Emotion />
        <div className="absolute top-0 z-10 w-screen h-screen bg-black opacity-50"></div>
      </div>
      <div className="w-full h-[500px] bg-black"></div>
      <Intro />
    </div>
  );
};

export default Homepage;
