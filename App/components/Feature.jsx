import Image from "next/image";
import React from "react";
import feature1 from "../../public/images/feature1.jpg";
import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], weight: "800" });
const roboto = Roboto({ subsets: ["latin"], weight: "400" });

const Feature = () => {
  return (
    <>
      <div className="bg-[#141617]">
        <div className="lg:max-w-6xl mx-auto py-48 drop-shadow-2xl">
          <h1
            className={`text-4xl font-bold text-white mb-8 ${inter.className} `}
          >
            What is{" "}
            <span className="underline underline-offset-8 decoration-[#f6f2a5]">
              CANCER?
            </span>
          </h1>
          <Image src={feature1} alt="cancer cell" />
          <p
            className={`mt-12 text-2xl font-light text-white mb-8 ${roboto.className}`}
          >
            Cancer is a disease in which some of the body’s cells grow
            uncontrollably and spread to other parts of the body. <br /> Cancer
            can start almost anywhere in the human body, which is made up of
            trillions of cells. Normally, human cells grow and multiply (through
            a process called cell division) to form new cells as the body needs
            them. When cells grow old or become damaged, they die, and new cells
            take their place... &nbsp;
            <Link href="/cancer">
              <span className="text-xl font-extralight underline underline-offset-4 decoration-blue-500 text-blue-500">
                Read More
              </span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Feature;
