import React from "react";
import logo from "../assets/logo.png";
import IonIcon from "@reacticons/ionicons";
const Footer = () => {
  return (
    <>
      <footer className="bg-slate-50/80 pt-16">
        <div className="mx-auto max-w-7xl px-8 md:px-6">
          <div className="grid gap-16  mb-8 lg:grid-cols-6">
            <div className="md:max-w-md lg:col-span-2">
              <img src={logo} alt="footer logo" className="w-36" />
              <div className="mt-4 lg:max-w-sm">
                <p className="text-sm text-slate-500">Next Generation</p>
                <p className="text-sm text-slate-500 mt-2">
                  innovation is at the core of everything we do. We foster a
                  culture that encourages creativity, exploration, and
                  continuous improvement. Our commitment to staying ahead of the
                  curve enables us to deliver forward-thinking solutions.
                </p>
              </div>
            </div>

            <div className="grid row-gap-8 grid-cols-2 gap-5 md:grid-cols-4 lg:col-span-4">
              <div className="">
                <p className="font-semibold text-slate-700">Links</p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-slate-500 transition-colors duration-300 hover:text-slate-700"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-slate-500 transition-colors duration-300 hover:text-slate-700"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-slate-500 transition-colors duration-300 hover:text-slate-700"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-slate-500 transition-colors duration-300 hover:text-slate-700"
                    >
                      contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between border-t py-8 sm:flex-row">
            <p className="text-sm text-slate-500">
              © Copyright 2023
              <a
                href="#"
                className="text-slate-700 hover:text-appcolor-500-500"
              >
                BayaboTech
              </a>
              All rights reserved.
            </p>
            <div className="mt-4 flex items-center space-x-4 sm:mt-0">
              <a href="#">
                <IonIcon
                  name="logo-facebook"
                  className="text-2xl text-slate-500 hover:text-appcolor-500-500 duration-300"
                />
              </a>
              <a href="#">
                <IonIcon
                  name="logo-twitter"
                  className="text-2xl text-slate-500 hover:text-appcolor-500-500 duration-300"
                />
              </a>
              <a href="#">
                <IonIcon
                  name="logo-youtube"
                  className="text-2xl text-slate-500 hover:text-appcolor-500-500 duration-300"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
