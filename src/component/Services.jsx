import React from "react";
import IonIcon from "@reacticons/ionicons";
import { Fade } from "react-reveal";
const services = () => {
  return (
    <>
      <section className="py-16">
        <Fade left cascade>
          <div className="mx-auto max-w-7xl px-8 md:px-6" id="service">
            <div className="mb-10 text-center">
              <span className="font-medium text-appcolor-500-500">
                What Can we Help you with
              </span>
              <h1 className="text-2xl font-bold text-slate-700 sm:text-3xl">
                If you are planning on developing a product landing
              </h1>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:gap-8">
              <div className="group flex cursor-pointer flex-col items-center  rounded-xl border border-blue-500/10 bg-white px-5 py-8 shadow-lg shadow-blue-300/10 duration-200 hover:bg-appcolor-500">
                <IonIcon
                  name="bar-chart-outline"
                  className="text-[55px] text-appcolor-500-500 duration-200 group-hover:text-white"
                />
                <h4 className="mt-3 mb-1 text-[17px] font-semibold text-slate-600 duration-200 group-hover:text-white">
                  Custom Software Development
                </h4>
                <p className="text-center text-sm text-slate-500  duration-200 group-hover:text-white">
                  Bayabotech creates custom software solutions that are tailored
                  to your specific needs and requirements, using the latest
                  technologies and development methodologies.
                </p>
              </div>

              <div className="group flex cursor-pointer flex-col items-center rounded-xl border border-blue-500/10 bg-white px-5 py-8 shadow-lg shadow-blue-300/10 duration-200 hover:bg-appcolor-500">
                <IonIcon
                  name="bar-chart-outline"
                  className="text-[55px] text-appcolor-500-500 duration-200 group-hover:text-white"
                />
                <h4 className="mt-3 mb-1 text-[17px] font-semibold text-slate-600 duration-200 group-hover:text-white">
                  BPO for managing other companies tech departments
                </h4>
                <p className="text-center text-sm text-slate-500 duration-200 group-hover:text-white">
                  Bayabotech provides business process outsourcing services to
                  manage other companies tech departments, helping to reduce
                  costs, increase efficiency, and improve productivity
                </p>
              </div>

              <div className="group flex cursor-pointer flex-col items-center rounded-xl border border-blue-500/10 bg-white px-5 py-8 shadow-lg shadow-blue-300/10 duration-200 hover:bg-appcolor-500">
                <IonIcon
                  name="speedometer-outline"
                  className="text-[55px] text-appcolor-500-500 duration-200 group-hover:text-white"
                />
                <h4 className="mt-3 mb-1 text-[17px] font-semibold text-slate-600 duration-200 group-hover:text-white">
                  IT Management Services
                </h4>
                <p className="text-center text-sm text-slate-500 duration-200 group-hover:text-white">
                  Bayabotech provides comprehensive IT management services,
                  including network design and implementation, help desk
                  support, and maintenance.
                </p>
              </div>

              <div className="group flex cursor-pointer flex-col items-center rounded-xl border border-blue-500/10 bg-white px-5 py-8 shadow-lg shadow-blue-300/10 duration-200 hover:bg-appcolor-500">
                <IonIcon
                  name="diamond-outline"
                  className="text-[55px] text-appcolor-500-500 duration-200 group-hover:text-white"
                />
                <h4 className="mt-3 mb-1 text-[17px] font-semibold text-slate-600 duration-200 group-hover:text-white">
                  Revenue Collection Solutions
                </h4>
                <p className="text-center text-sm text-slate-500 duration-200 group-hover:text-white">
                  fancybox Revenue Collection Solutions Bayabotech's revenue
                  collection solutions streamline billing and payment processes,
                  improve accuracy, reduce errors, and optimize cash flow.
                </p>
              </div>

              <div className="group flex cursor-pointer flex-col items-center rounded-xl border border-blue-500/10 bg-white px-5 py-8 shadow-lg shadow-blue-300/10 duration-200 hover:bg-appcolor-500">
                <IonIcon
                  name="file-tray-full-outline"
                  className="text-[55px] text-appcolor-500-500 duration-200 group-hover:text-white"
                />
                <h4 className="mt-3 mb-1 text-[17px] font-semibold text-slate-600 duration-200 group-hover:text-white">
                  IT Consultancy
                </h4>
                <p className="text-center text-sm text-slate-500 duration-200 group-hover:text-white">
                  Bayabotech offers IT consultancy services to develop and
                  implement IT strategies that align with business goals,
                  optimize IT infrastructure, and improve IT operations.
                </p>
              </div>

              <div className="group flex cursor-pointer flex-col items-center rounded-xl border border-blue-500/10 bg-white px-5 py-8 shadow-lg shadow-blue-300/10 duration-200 hover:bg-appcolor-500">
                <IonIcon
                  name="bar-chart-outline"
                  className="text-[55px] text-appcolor-500-500 duration-200 group-hover:text-white"
                />
                <h4 className="mt-3 mb-1 text-[17px] font-semibold text-slate-600 duration-200 group-hover:text-white">
                  Trainings
                </h4>
                <p className="text-center text-sm text-slate-500 duration-200 group-hover:text-white">
                  Bayabotech offers a range of training programs, from basic
                  computer skills to advanced technical training, to help
                  individuals and organizations acquire the skills and knowledge
                  needed to succeed in today's fast-paced business environment
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    </>
  );
};

export default services;
