import React from "react";
import features from "../assets/programmer.jpg";
import icon1 from "../assets/icon (1).png";
import icon2 from "../assets/icon (2).png";
import icon3 from "../assets/icon (3).png";
import { Flip, Slide } from "react-reveal";
const Features = () => {
  return (
    <>
      <section className="pb-16 ml-6" id="about-us">
        <div className="mx-auto max-w-7xl px-8 md:px-6">
          <Flip left cascade>
            <div className="mb-5 sm:mb-10">
              <span className="font-medium text-appcolor-500-500">
                BayoTech
              </span>
              <h1 className="text-2xl font-bold text-slate-700 sm:text-3xl">
                The new Generation tech Company
              </h1>
            </div>
          </Flip>

          <div className="md:flex md:justify-between md:gap-6 xl:gap-10">
            <div className="mb-5 max-h-[600px] overflow-hidden rounded-lg md:mb-0 md:w-5/12">
              <img
                src={features}
                alt="features img"
                className="h-full scale-125 sm:w-full sm:object-cover"
              />
            </div>
            <Slide cascade right>
              <div className="md:w-7/12">
                <div className="mb-16 flex flex-col">
                  <p className="mb-10 text-slate-500">
                    our vision is to become the leading provider of innovative
                    technology solutions that enable businesses to thrive in the
                    ever-evolving digital landscape. We aspire to empower
                    companies of all sizes and industries to achieve their full
                    potential by leveraging cutting-edge technologies and expert
                    guidance
                  </p>

                  <button className="w-full rounded-md bg-appcolor-500 px-8 py-2.5 font-semibold text-white shadow-md shadow-blue-500/20 hover:bg-blue-600 duration-200 md:w-max">
                    Get Started
                  </button>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="flex flex-col rounded-xl bg-white px-4 py-8 shadow-lg">
                    <img className="mb-3 w-10" alt="" src={icon1} />
                    <h3 className="text-lg font-bold">Ideate and Document</h3>
                    <p className="text-base text-slate-500">
                      we think through it with you
                    </p>
                  </div>

                  <div className="flex flex-col rounded-xl bg-white px-4 py-8 shadow-lg">
                    <img className="mb-3 w-10" alt="" src={icon2} />
                    <h3 className="text-lg font-bold">Implement and Deploy</h3>
                    <p className="text-base text-slate-500">
                      we bring you head picture to real life
                    </p>
                  </div>

                  <div className="flex flex-col rounded-xl bg-white px-4 py-8 shadow-lg">
                    <img className="mb-3 w-10" alt="" src={icon3} />
                    <h3 className="text-lg font-bold">Scale Up</h3>
                    <p className="text-base text-slate-500">
                      We help you scale up using necessary technology
                    </p>
                  </div>
                </div>
              </div>
            </Slide>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
