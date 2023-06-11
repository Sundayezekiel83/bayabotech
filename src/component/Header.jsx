import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import IonIcon from "@reacticons/ionicons";
import { Flip, Fade } from "react-reveal";

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);

  useEffect(() => {
    // window.addEventListener(
    //   "resize",
    //   () => window.innerWidth >= 960 && setToggleNav(true)
    // );
    if (window.innerWidth >= 960) {
      setToggleNav(true);
    } else if (window.innerWidth < 960) {
      setToggleNav(false);
    }
  }, []);

  console.log("inner widhth", window.innerWidth);

  console.log("the toggle nav", toggleNav);
  return (
    <>
      <header className="sticky left-0 top-0 z-50 bg-white/90 w-full backdrop-blur">
        <div className="mx-auto h-[90px] max-w-7xl px-8 md:px-6">
          <div className="relative flex h-full items-center justify-between border-b border-slate-500/10">
            <Fade left cascade>
              <div className="w-[15rem] max-w-full">
                <a href="#">
                  <img src={logo} alt="logo" className="w-full" />
                </a>
              </div>
            </Fade>

            <div
              className={`flex w-full items-center justify-between ${
                !toggleNav && "invisible"
              }`}
            >
              <nav className="absolute right-0 top-[90px] w-full max-w-[350px] rounded-lg border border-blue-200 bg-white py-5 px-6 shadow-lg shadow-blue-400/5 transition-all lg:static lg:block lg:max-w-full lg:border-none lg:shadow-none lg:bg-transparent lg:px-0 lg:py-0">
                <ul className="flex justify-center gap-8 flex-col lg:flex-row">
                  <li onClick={() => setToggleNav(false)}>
                    <a
                      href=""
                      className="text-lg font-medium text-slate-700 duration-200 hover:text-appcolor-500 lg:text-base"
                    >
                      Home
                    </a>
                  </li>
                  <li onClick={() => setToggleNav(false)}>
                    <a
                      href="#about-us"
                      className="text-lg font-medium text-slate-700 duration-200 hover:text-appcolor-500 lg:text-base"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#service"
                      className="text-lg font-medium text-slate-700 duration-200 hover:text-appcolor-500 lg:text-base"
                    >
                      Services
                    </a>
                  </li>

                  <li>
                    <a
                      href="#contact"
                      className="text-lg font-medium text-slate-700 duration-200 hover:text-appcolor-500 lg:text-base"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex">
              <button className="block lg:hidden">
                <IonIcon
                  name="menu-outline"
                  className="text-4xl text-appcolor-500"
                  onClick={() => setToggleNav(!toggleNav)}
                />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
