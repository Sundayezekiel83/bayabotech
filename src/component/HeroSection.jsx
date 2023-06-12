import React from "react";
import hero from "../assets/hero.jpg";
import brand1 from "../assets/brand (1).png";
import brand2 from "../assets/brand (2).png";
import brand3 from "../assets/brand (3).png";
import brand4 from "../assets/brand (4).png";
import { Slide, Fade } from "react-reveal";
const HeroSection = () => {
  return (
    <>
      <section className="relative bg-white py-16 lg:pt-[100px] ml-6">
        <div className="mx-auto max-w-7xl px-8 md:px-6">
          <div className="flex flex-wrap">
            <Slide top cascade>
              <div className="w-full lg:w-5/12">
                <h1 className="text-slate-800 mb-3 text-4xl font-bold leading-snug sm:text-[42px] lg:text-[40px] xl:text-[42px]">
                  We are what your StartUp needs
                  <span className="text-appcolor-500-600"></span>
                </h1>
                <p className="text-slate-500 mb-8 max-w-[480px] text-base">
                  we are dedicated to fueling innovation, empowering
                  entrepreneurs, and propelling tech startups towards
                  unparalleled success. Whether you're disrupting an industry or
                  building the next big thing, we have the expertise and
                  resources to help you thrive.
                </p>

                <button className="w-full rounded-md bg-appcolor-500 px-8 py-2.5 font-semibold text-white shadow-md shadow-blue-500/20 hover:bg-blue-600 duration-200 sm:w-auto">
                  Get Started
                </button>

                <button className="mt-4 box-border w-full rounded-md border border-blue-500/20 px-8 py-2.5 font-semibold text-appcolor-500-500 shadow-md shadow-blue-500/10 duration-200 sm:ml-4 sm:mt-0 sm:w-auto">
                  Register Now
                </button>

                <div className="mt-6 grid grid-cols-4 gap-4">
                  <img
                    src={brand1}
                    alt="brand"
                    className="w-32 cursor-pointer rounded-lg border border-blue-300/20 bg-white px-5 py-3 shadow-md shadow-blue-500/5 duration-200 hover:scale-95 sm:w-36"
                  />
                  <img
                    src={brand2}
                    alt="brand"
                    className="w-32 cursor-pointer rounded-lg border border-blue-300/20 bg-white px-5 py-3 shadow-md shadow-blue-500/5 duration-200 hover:scale-95 sm:w-36"
                  />
                  <img
                    src={brand3}
                    alt="brand"
                    className="w-32 cursor-pointer rounded-lg border border-blue-300/20 bg-white px-5 py-3 shadow-md shadow-blue-500/5 duration-200 hover:scale-95 sm:w-36"
                  />
                  <img
                    src={brand4}
                    alt="brand"
                    className="w-32 cursor-pointer rounded-lg border border-blue-300/20 bg-white px-5 py-3 shadow-md shadow-blue-500/5 duration-200 hover:scale-95 sm:w-36"
                  />
                </div>
              </div>
            </Slide>

            <div className="hidden px-4 lg:block lg:w-1/12"></div>
            <Fade right>
              <div className="w-full px-4 lg:w-6/12">
                <div className="lg:ml-auto lg:text-right">
                  <div className="relative z-10 inline-block pt-11 lg:pt-0">
                    <img
                      src={hero}
                      alt="hero section img"
                      className="max-w-full lg:ml-auto rounded-b-lg rounded-l-3xl rounded-t-xl"
                    />
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
