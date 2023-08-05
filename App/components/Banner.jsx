import React from "react";
import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";
import Typewriter from "typewriter-effect";
import Navigation from "./Navbar";

const inter = Inter({ subsets: ["latin"], weight: "800" });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

const Banner = () => {
  return (
    <>
      <div className="bg-cover bg-center bg-[url('/images/banner.png')] text-center">
        <Navigation />
        <div className="pt-72 pb-[310px] -mt-14">
          <h3
            className={`text-2xl font-medium text-white mb-8 ${roboto.className}`}
          >
            <Typewriter
              options={{
                strings: [
                  "Predict your cancer status",
                  "Get rid off Nosocomephobia",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
          <h1
            className={`text-5xl font-bold text-white mb-8 ${inter.className}`}
          >
            Check your cancer status without any hussle
          </h1>
          <div>
            <button
              className={`border-2 font-bold text-lg border-white px-6 py-4 rounded-xl text-white mr-8 hover:bg-[#f6f2a5] hover:text-black`}
            >
              With Symptoms
            </button>
            <button
              className={`border-2 font-bold text-lg border-white px-6 py-4 rounded-xl text-black bg-[#f6f2a5] hover:bg-transparent hover:text-white`}
            >
              With Images
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
