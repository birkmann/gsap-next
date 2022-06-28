/* eslint-disable @next/next/no-img-element */
import React from "react";

const homepage = () => {
  return (
    <div className="bg-black text-white h-screen relative flex flex-col lg:flex-row">
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
        <div className="m-auto -rotate-90 absolute top-1/2 hidden lg:block">
          <div className="space-x-12 font-semibold text-lg">
            <a
              href=""
              className="opacity-50 hover:opacity-100 transition-all transform"
            >
              Facebook
            </a>
            <a
              href=""
              className="opacity-50 hover:opacity-100 transition-all transform"
            >
              Instagram
            </a>
            <a
              href=""
              className="opacity-50 hover:opacity-100 transition-all transform"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row items-center relative h-screen">
        <div className="lg:absolute z-50 mt-10 lg:mt-0 top-10 left-10 w-[104px] h-[130px] text-[#d2aa64] cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 376.2 472.4"
            width="376.2"
            height="472.4"
            className="w-full h-full"
            fill="currentColor"
          >
            <path d="M150.6 107.7c14.6-16.9 17.9-42.6 5.4-61-10.5-15.5-27-21.5-44.7-22.5-18.2-1.2-31.8 4.3-45.2 15.7-6.3 5.3-12.5 11-17.6 18.6 23.8-17.9 55-22.8 76-5.4 17.5 14.5 23.2 34.7 13.3 65.2 5.4-2.8 9.3-6.6 12.8-10.6m57.6 100.9c-1.5-14.2 5.6-26.2 11.1-39-20.4 2.3-21.2-14.7-25-29-1-3.6-2.4-5.6-4.9-5.6h-.2c-2.5 0-4.1 2-5 5.6-3.8 14.3-4.6 31.3-25 29 5.5 12.8 12.6 24.8 11.1 39-.7 8-3 14.9-5.3 22.7-2.7 9.4-1.5 13.3 7.6 16.6 7.5 2.7 12.8 6.6 16.6 15.9v.1-.1c3.9-9.3 9.1-13.2 16.6-15.9 9.2-3.2 10.4-7.2 7.6-16.6-2.2-7.8-4.5-14.7-5.2-22.7m35.1 36.2c6.3 9.5 2.7 18.6-7.8 22-9.1 3-34.1 5.5-34.1-5.4 0-4.5 10-8.5 12.9-9.4 18.8-5.6 5.8-28.6 2.6-41.2-.1-.4 19 22.8 26.4 34m-32.7-84.7c5.4 2.3 25.1 2.4 36.2-7.1 3.8-3.2 5.6-6.4 8.1-7 4.2-.9 10 .6 10.8.1 1.1-.7-5.7-8.2-8.1-10.1-7.8-6.2-17.6-5.8-31 9.7-9.5 11-23.6 11.1-16 14.4m-40.8 0c-5.4 2.3-25.1 2.4-36.2-7.1-3.8-3.2-5.6-6.4-8.1-7-4.2-.9-10 .6-10.8.1-1.1-.7 5.7-8.2 8.1-10.1 7.8-6.2 17.6-5.8 31 9.7 9.6 11 23.6 11.1 16 14.4m-36.7 82.3c-6.3 10.4-2.7 20.4 7.8 24.2 9.1 3.3 34.1 6.1 34.1-6 0-5-8.7-6.6-11.6-7.6-18.8-6.2-3.1-32.7.1-46.6.1-.4-23 23.6-30.4 36m-26-241.2c-16.6 3.3-35.9 11-50.6 28.7C31.4 60 22.6 56.4 22.6 56.4c16.7 5 27.9-13.2 38.1-22 12-10.4 32.6-19.5 53.7-17.8 22.5 1.8 35.2 10.9 42.8 18.8 8 8.4 11.3 16.1 11.3 16.1 8-9.2 7-27-6.1-37.9-14.9-12.4-42.7-14.9-55.3-12.4M79.3 84c5.3 11.7 3.1 24.1 4.4 36.1.7 6 2.6 10.4 5.9 15.1 3.4 4.8 11 7.1 17.1.7 7.9-8.4 11-32.3 1.8-44.6-8.2-10.9-19.7-16.9-34-16-.5 0-1.6.1-1.5.4.1.1.4.2 1 .8 2.6 2.6 3.9 4.5 5.3 7.5m225-7.7c.6-.6.9-.7 1-.8.1-.3-1-.4-1.5-.4-14.3-1.1-25.9 4.9-34.1 15.7-9.3 12.2-8.9 32.4.2 43.5 5.7 6.9 12.6 8.5 18.1 1.3 3.5-4.5 5.6-9.8 6.3-15.8 1.5-12-.6-24.4 4.7-36.1 1.4-2.9 2.8-4.8 5.3-7.4m-80 36.6c-13.9 3.9-40.6-6.5-45.9-29.2-8.6-37.3 12-67.5 45.4-78.9 29.9-10.1 49.5-3 69.2 9 5.9 3.6 9.7 7 12.6 10.2-13.8-4.1-25.4-6.3-38-6-27.9.6-51.6 13.4-58.5 40.5-4.7 18.5 2.9 41.1 15.2 54.4m26.2-60.6c21.3-16.9 48.7-16.2 69.6-1.5C313.7 39 298.9 30.6 285 27c-17.3-4.4-52 .9-64.9 23.6-10.7 18.8-3.4 46.8 16.7 58-6.8-21.1-4.7-41.8 13.7-56.3M347 137c-.6-16.7-2.2-33.2-8.2-49.1-7.7-20.5-27.3-42.8-53.5-40.5-19.1 1.6-34.7 11.7-42.3 29.2-8.5 19.4-1 38.3 15.6 48.2-2.5-9-3.3-16.6-2.4-24.3 2.1-19.3 18.8-36.7 43.9-32 11.3 2.1 19.7 11.7 24.7 24.2 8 20.2 9.4 33.1 10.9 57.2.9 13.4 5.6 27.6 18.1 40-4.5-12.4-5.6-17.1-6.8-52.9m-60.4 22.4c-.7 14.1 5.7 26.5 9.9 39.3 3.6 11.1 7.1 22.3 7.8 33.9 1.2 21.1 1.1 42.1-6.7 62.3-3.4 9-7.1 17.6-10.8 27.2 2.6-2.9 23.2-20.4 31.3-51.1 10.5-39.9-1.8-73.6-6.6-87.6-3.7-10.8-8-21.8-9.3-33.2-1-9.3-1.6-15-.7-23.2-9.9 9.3-14.3 19.7-14.9 32.4m-7 85.4c3 18.5 1.5 37.6-2.3 55.6-1.5 7.2-6.6 21.6-9.2 31.2 2.7-3.3 8.9-11.4 10.8-14.3 11.3-17.4 19.7-42.7 16.7-62.5-3.5-23.2-5.4-40.3-9-64.7-3.2 4.6-10.3 34.4-7 54.7m-11.8-20.1c-6 9.4-11.7 30.2-8.9 56.8 2.1 20.4-3.2 49.4-3.2 49.4s17.6-23 18.9-44.2c.6-8.9-1-17.9-1.7-26.8-1.1-15.2 0-26.7 2.6-43.6-2.9 2.5-5.9 5.5-7.7 8.4m-23 121.4c5.4-14.3 6.3-29.5 6.2-44.9-.1-16.8 1.1-23.5 1.3-37.4-5 6.9-7.8 11-9.5 18.3-3.7 16.3-3.9 33.8-3.5 50.5.2 7.3-1.2 14.4-3.2 21.3-1.6 5.6-4.5 10.6-7.3 15.6 8.2-6.7 12.6-14.4 16-23.4m-22.4-38.6c-4.1 4.3-5.2 7.4-5.1 12.8.6 19.4-4.2 37.4-14.4 54-2.2 3.6-11.3 13.1-13.7 15.6 40.7-21.7 46.9-57.9 44.2-99.3-3 6.3-5.9 11.6-11 16.9m-34.9 76.2c19.8-19.8 24.9-45.6 24.5-62.2-.1-4.3-1.3-7.8-1.3-7.8s-5 2.2-12.4 3.7c-7.8 1.6-14.2 1-14.2 1s.3 2.5.8 6c1 7 2.4 17.3 2.4 24.8 0 9.9.1 14-.6 19.2-.6 4.6-1.7 10.3-8.4 21.6 3.8-2.1 6.1-3.3 9.2-6.3m-8.3-44.3c-1.4-5.4-2.6-10.9-2.3-16.3.1-1.9.4-4.3.4-4.3s-10.9-2.1-17.6-7.7c-.9 10.5 2.5 19.6 6.3 28.5 2 4.7 3 7.7 3.2 12.6.5 9.4 1.1 18.4-2.3 26.9 2.2-2.1 6.7-4.9 11-16.2 1.7-4.7 3.9-13.7 1.3-23.5M141 294.7c-2.4 12.5-2.5 24.7 2.7 36.9 6.4 15.1 14.2 29.8 12.8 48 5.1-10.1 6.6-25.4 1.3-37.5-3.3-7.5-4.7-15.1-4.8-23.5-.2-17.2-1.9-21-10.5-29.8-1 3.5-1.1 4.1-1.5 5.9m-40-28.4c-1.9 18.4-1.8 35.4 3.8 50.5 4.1 11 5.1 17.2 12.6 29.6-2.4-19-4-35.6-1.9-54 1.5-13 2.9-26.1 1.4-39-2.3-20-5.9-31.2-18.6-44.2 1.1 10.6 5.8 27.1 2.7 57.1m-20.7-21.4c-3.1 16-6.4 22-3.3 38.9 2.9 16.4 11.1 30.7 22.8 42.3-2-5.1-4.4-13.3-5.2-16-5.5-20.2-6.5-33.5-5.9-41.7.8-9.4 3.2-19 3.5-31 .4-15.2-.3-29.8-8-44-2.3 13.5 1.9 21.3-3.9 51.5m-11.2-76.4c-8.1 19-13.9 38.8-15.5 59.4-2 26.3.8 45.9 15 67.6 3.6 5.5 10.3 14.4 16.5 21-8.4-17.5-10.3-25.5-13.2-38-4.9-20.8-2.5-41.5 2.2-62.5 3.3-14.6 9.5-28.1 14.3-42.2 5.6-16.3 1.5-34.4-11.5-45.4 1.3 11.8-1 23.7-7.8 40.1m-23 38.3c2.7-15.4 8.8-27.4 14.5-41.6 5.4-13.4 9.1-27.1 7.4-41.5-1.2-10.7-.4-20.2 1.7-31.6-4.2 1.7-6.7 4.5-8.9 8-9.1 14.5-10.6 31-12.2 47.4-1 10.8-2.2 21.5-6.1 31.6-4.7 11.9-7.8 23.9-6.9 36.8.6 9.4 3.6 18 9.1 25.7-2.1-11.1-.5-23.7 1.4-34.8m-8.9-35.1c5.8-11.6 6-26.2 6.4-38.8.5-15 3.6-29 9.2-42.6 7.7-19 28.4-25.5 45.9-19.4 12.6 4.4 20.3 15.1 21 28.5.4 8.5.7 17-1.6 25.9 13.7-6.7 19.8-22.3 17.4-38.7C131.2 57 101.9 43.9 75.9 51c-22.1 6.1-35.2 21.7-41.7 42.2-7 21.9-2.9 42.1-4.9 64.6-.8 9.1.5 17.4-6.2 32.1 8.2-8 10.5-11.1 14.1-18.2m270.3-45.3c-.7 7.8-1.1 15.9.4 24 4.1 21.4 14.8 40.6 22 60.8 3.9 10.9 4.2 20.1 4.2 31.3 0 6.2-.1 14.5-2.2 22.6 4.8-6.4 16.4-38 6.6-67-4.2-12.3-8-24.9-8.7-37.7-.8-14.5-1.9-28.9-5.8-42.8-3-10.6-5.7-20.5-17.1-27.6 1.4 13.8 1.7 24.7.6 36.4m-161.4 243c-2.8-5-5.7-10-7.3-15.6-1.9-6.9-3.3-14-3.2-21.3.4-16.7.9-30.2-2.8-46.5-1.6-7.2-4.5-15.3-9.6-22.2 1.2 13.3 1.4 21.5 0 37.4-1.3 15.3.8 30.5 6.2 44.9 3.5 9 8.5 16.7 16.7 23.3m69.3-93.8c-8.3.6-16.3-.8-23.7-5.1-.9-.5-2-1.5-3.8-.5-9 4.7-18.7 6.3-28.7 5.6-2.2-.2-3.2.5-3 2.9 1 9.3 3.6 17.7 11.1 23.8 9.5 7.7 20.7 9.4 32.1 6 12.8-3.8 18.8-12.6 21.7-27.9.8-4.6-1.5-5.1-5.7-4.8"></path>{" "}
            <path d="M331.3 413.9l-2.6-.2c-.1 0-.2.1-.3.2l-11.5 38.2-14-38.1c0-.1-.1-.2-.3-.2h-10.8c-.1 0-.2 0-.2.1-.1.1-.1.2 0 .2l7.9 22.2-6.1 17.9-15.3-40.2c0-.1-.1-.2-.2-.2H267c-.1 0-.2 0-.2.1-.1.1-.1.2 0 .3l20.9 56.4c0 .1.1.2.3.2h2.3c.1 0 .2-.1.3-.2l10.5-30 10.7 30c0 .1.1.2.3.2h2.3c.1 0 .2-.1.3-.2l17-56.4v-.2c-.3-.1-.3-.1-.4-.1m-318.7 2.9l6.2-.8c.3-.1.6-.1 1.2-.1 2.7 0 5.3 1 7.7 3 2.5 2 4.5 5 6.1 9 1.6 4 2.4 8.8 2.4 14.4 0 4.4-.5 8.6-1.5 12.6s-2.7 7.3-4.9 9.9c-2.2 2.6-5.1 3.9-8.6 3.9-2.6 0-5.5-.5-8.6-1.5-.8-10-1.2-18.3-1.2-24.9 0-6.6.4-15.2 1.2-25.5zm22.7-.5c-3.4-1.6-6.2-2.4-8.4-2.4H.3c-.1 0-.1 0-.2.1-.1 0-.1.1-.1.1.4 6.3.7 11.8.9 16.4.2 4.7.3 8.7.3 11.8 0 3.2-.1 7.2-.3 11.8-.2 4.6-.5 10.1-.9 16.4 0 .1 0 .1.1.2s.1.1.2.1h26.6c2.7 0 5.8-.9 9.2-2.8 3.4-1.8 6.4-4.9 9-9.2 2.5-4.2 3.8-9.8 3.8-16.5 0-7.2-1.4-13-4.2-17.2-2.8-4.2-6-7.2-9.4-8.8m60.5-2.4H55.5c-.1 0-.1 0-.2.1s-.1.1-.1.2c.4 6.3.7 11.8.9 16.4.2 4.7.3 8.7.3 11.8 0 3.2-.1 7.2-.3 11.8-.2 4.6-.5 10.1-.9 16.4 0 .1 0 .1.1.2s.1.1.2.1h40.3c.1 0 .3-.1.3-.3v-10.5c0-2-.8-2.4-1.5-2.4-1 0-2 .7-3 2.2-.4.4-.9 1-1.3 1.6-1.6 2.1-3.2 3.8-4.7 5.2-1.5 1.3-3.2 2-5.1 2H67.9c-.4-5.6-.7-10.6-.9-14.7-.2-4.1-.3-7.7-.3-10.6h6.6c1.9 0 3.5.5 4.8 1.6 1.3 1.1 2.6 2.4 3.8 4 1 1.3 1.9 2 2.5 2 .8 0 1.2-.7 1.2-2.1V436c0-1.4-.4-2.1-1.2-2.1-.7 0-1.6.6-2.6 2-1.2 1.6-2.5 2.9-3.8 4-1.3 1-2.9 1.6-4.8 1.6h-6.6c0-2.9.1-6.4.3-10.6.2-4.1.5-9.1.9-14.7h12.6c1.9 0 3.6.7 5.1 2 1.5 1.4 3.1 3.1 4.7 5.1.4.7.9 1.2 1.3 1.6 1 1.5 2 2.2 3 2.2.7 0 1.5-.4 1.5-2.4v-10.5c.1-.2 0-.3-.2-.3m18.5 13.1c.2-2.8.6-6 1.3-9.5 1.5-.9 3.4-1.4 5.6-1.4 2.9 0 5.5 1 7.6 2.9 2.1 1.9 3.2 4.9 3.2 8.8 0 3.5-1 6.3-2.9 8.2-2 1.9-4.5 2.9-7.7 2.9-2.3 0-4.8-.5-7.4-1.5.1-4.2.2-7.6.3-10.4zm23.1 19.2c-1-1.3-2.2-2.5-3.6-3.5-1.1-.8-2.3-1.5-3.3-2 2.7-.6 5.3-1.8 7.7-3.5 2.7-1.9 4.1-5.1 4.1-9.3 0-3.6-1.1-6.5-3.2-8.5s-4.4-3.5-6.8-4.3c-2.5-.8-4.3-1.2-5.6-1.2h-23.4c-.1 0-.1 0-.2.1s-.1.1-.1.2c.4 6.3.7 11.8.9 16.4.2 4.7.3 8.7.3 11.8 0 3.2-.1 7.2-.3 11.8-.2 4.6-.5 10.1-.9 16.4 0 .1 0 .1.1.2s.1.1.2.1h12.1c.1 0 .2 0 .2-.1.1-.1.1-.1.1-.2-.7-5.4-1.2-9.6-1.4-12.6-.2-3-.2-8.6-.2-16.9h2.2c1.9 0 3.9.8 5.8 2.3 1.9 1.5 3.4 3.2 4.5 4.8 1.3 2.1 2.4 5 3.1 8.6.8 3.6 1.2 7 1.2 10.1 0 1.1-.1 2.4-.3 3.7 0 .1 0 .2.1.2.1.1.1.1.2.1H142c.1 0 .3-.1.3-.3 0-.2 0-.6.1-1.3.1-.7.1-1.6.1-2.7 0-3.6-.4-7.3-1.1-11-.8-3.8-2.1-6.9-4-9.4m70.6 9.9c-.5.4-1 .8-1.4 1.4-.2.3-.8 1.5-1.9 3.5-1.1 2-2.5 3.9-4.3 5.5-1.7 1.6-3.3 2.3-4.9 2.1H183c-.3-5.8-.6-10.8-.8-15-.2-4.3-.3-8.1-.3-11.3 0-5.1.4-14.6 1-28.2 0-.1 0-.1-.1-.2s-.1-.1-.2-.1h-12.1c-.1 0-.1 0-.2.1s-.1.1-.1.2c.1 1.4.2 2.4.2 3 .4 5.4.7 10.3.9 14.5.2 4.2.3 7.8.3 10.8 0 2.9-.1 6.5-.3 10.5-.2 4.2-.5 8.9-.8 13.9l-.2 3.5c0 .1 0 .1.1.2s.1.1.2.1h40.3c.1 0 .3-.1.3-.3v-12.9c0-.6-.1-1.2-.4-1.5-.6-.5-1.7-.6-2.8.2M348 416h12.6c1.9 0 3.6.7 5.1 2 1.5 1.4 3.1 3.1 4.7 5.1.4.7.9 1.2 1.3 1.6 1 1.5 2 2.2 3 2.2.7 0 1.5-.4 1.5-2.4V414c0-.1-.1-.3-.3-.3h-40.3c-.1 0-.1 0-.2.1s-.1.1-.1.2c.4 6.3.7 11.8.9 16.4.2 4.7.3 8.7.3 11.8 0 3.2-.1 7.2-.3 11.8-.2 4.6-.5 10.1-.9 16.4 0 .1 0 .1.1.2s.1.1.2.1h40.3c.1 0 .3-.1.3-.3v-10.5c0-2-.8-2.4-1.5-2.4-1 0-2 .7-3 2.2-.4.4-.9 1-1.3 1.6-1.6 2.1-3.2 3.8-4.7 5.2-1.5 1.3-3.2 2-5.1 2H348c-.4-5.6-.7-10.6-.9-14.7-.2-4.1-.3-7.7-.3-10.6h6.6c1.9 0 3.5.5 4.8 1.6 1.3 1.1 2.6 2.4 3.8 4 1 1.3 1.9 2 2.5 2 .8 0 1.2-.7 1.2-2.1v-12.9c0-1.4-.4-2.1-1.2-2.1-.7 0-1.6.6-2.6 2-1.2 1.6-2.5 2.9-3.8 4-1.3 1-2.9 1.6-4.8 1.6h-6.6c0-2.9.1-6.4.3-10.6.3-4.1.6-9.1 1-14.7m-83.5 9.3c-2.3-3.8-5.1-6.7-8.4-8.8L253 421c.1.3.3.5.4.8 2.5 5 3.8 11.9 3.8 20.5 0 8.8-1.3 15.7-3.8 20.6-2.5 4.9-6.5 7.3-11.9 7.3s-9.6-2.4-12.3-7.3c-2.7-4.9-4.1-11.6-4.1-19.9 0-8.6 1.4-15.6 4.1-20.9l.9-1.5-3.2-4.6c-3.7 2.1-6.9 5.1-9.6 9.1-3 4.5-4.5 10.3-4.5 17.1 0 6.6 1.4 12.2 4 16.7 2.7 4.5 6.2 7.9 10.5 10.1 4.3 2.2 9 3.3 14 3.3 4.6 0 9-1.1 13.1-3.3 4.1-2.2 7.5-5.6 10.1-10.1 2.6-4.5 3.9-10.1 3.9-16.6.2-6.7-1.2-12.5-3.9-17m-29.7-8.1c1.2 0 2.2-.4 3-1.2.8-.8 1.2-1.8 1.2-3s-.4-2.2-1.2-3c-.8-.8-1.8-1.2-3-1.2s-2.2.4-3 1.2c-.8.8-1.2 1.8-1.2 3s.4 2.2 1.2 3c.8.8 1.8 1.2 3 1.2m13.7 0c1.2 0 2.2-.4 3-1.2.8-.8 1.2-1.8 1.2-3s-.4-2.2-1.2-3c-.8-.8-1.8-1.2-3-1.2s-2.2.4-3 1.2c-.8.8-1.2 1.8-1.2 3s.4 2.2 1.2 3c.8.8 1.8 1.2 3 1.2"></path>{" "}
          </svg>
        </div>
        <div className="relative z-20 mx-8 my-auto lg:m-32 space-y-8 max-w-xl flex flex-col">
          <h2 className="text-3xl lg:text-6xl font-semibold">
            Lorem ipsum dolor sit amet consectetur
          </h2>
          <div>
            <a
              href=""
              className="bg-[#d2aa64] text-white px-6 whitespace-nowrap lg:px-8 font-bold py-3 transition-all transform rounded-full inline-block hover:bg-white hover:text-black lg:text-lg"
            >
              Lorem ipsum dolor
            </a>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt=""
          className="h-full w-full object-cover absolute top-0"
        />
      </div>

      <div className="absolute w-screen h-screen z-10 bg-black top-0 opacity-50"></div>
    </div>
  );
};

export default homepage;
