import React from "react";
import IonIcon from "@reacticons/ionicons";

const Contact = () => {
  return (
    <>
      <section className="relative overflow-hidden py-16" id="contact">
        <img
          src="images/effect.png"
          alt="effect"
          className="absolute bottom-[-400px] -z-10 w-full opacity-[0.2]"
        />
        <div className="mx-auto max-w-7xl px-8 md:px-6">
          <div className="-mx-4 flex flex-wrap lg:justify-between">
            <div className="w-full px-4 md:w-1/2 xl:w-6/12">
              <div className="mb-12 max-w-[570px] lg:mb-0">
                <span className="font-medium text-appcolor-500-500">
                  Contact Us
                </span>
                <h1 className="mb-3 text-2xl font-bold text-slate-700 sm:text-3xl">
                  GET IN TOUCH WITH US
                </h1>
                <p className="text-slate-500 mb-8">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Facere inventore illo porro molestiae maxime magni natus illum
                  commodi! Modi, quisquam?
                </p>

                <div className="mb-8 flex w-full max-w-[420px] items-center rounded-lg bg-white p-4 shadow-md shadow-blue-500/10">
                  <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-appcolor-500 bg-opacity-5 text-appcolor-500-500 sm:h-[70px] sm:max-w-[70px]">
                    <IonIcon name="location-outline" className="text-3xl" />
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold text-slate-700">
                      Our Location
                    </h4>
                    <p className="text-base text-slate-400">
                      29 Ndjamena crescent, Aminu Kano crescent, Wuse 2, beside
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex w-full max-w-[420px] items-center rounded-lg bg-white p-4 shadow-md shadow-blue-500/10">
                  <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-appcolor-500 bg-opacity-5 text-appcolor-500-500 sm:h-[70px] sm:max-w-[70px]">
                    <ion-icon
                      name="call-outline"
                      className="text-3xl"
                    ></ion-icon>
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold text-slate-700">
                      Phone Number
                    </h4>
                    <p className="text-base text-slate-400">
                      {" "}
                      +234 816 228 3793
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex w-full max-w-[420px] items-center rounded-lg bg-white p-4 shadow-md shadow-blue-500/10">
                  <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-appcolor-500 bg-opacity-5 text-appcolor-500-500 sm:h-[70px] sm:max-w-[70px]">
                    <ion-icon
                      name="mail-outline"
                      className="text-3xl"
                    ></ion-icon>
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold text-slate-700">
                      Email Address
                    </h4>
                    <p className="text-base text-slate-400">
                      {" "}
                      business@BayaboTech.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 xl:w-5/12">
              <div className="relative rounded-lg bg-white p-8 shadow-lg shadow-blue-500/10 sm:p-12">
                <form action="">
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full rounded-lg border border-blue-500/20 px-4 py-3 text-slate-500 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full rounded-lg border border-blue-500/20 px-4 py-3 text-slate-500 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="password"
                      placeholder="Your Passsword"
                      className="w-full rounded-lg border border-blue-500/20 px-4 py-3 text-slate-500 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                  <div className="mb-6">
                    <textarea
                      name="message"
                      rows="6"
                      className="resize-none w-full rounded-lg border border-blue-500/20 px-4 py-3 text-slate-500 focus:border-blue-500 focus:outline-none"
                    ></textarea>
                  </div>
                  <div className="">
                    <button
                      type="submit"
                      className="w-full rounded border border-blue-300 bg-appcolor-500 p-3 text-white transition-all hover:bg-opacity-90"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
