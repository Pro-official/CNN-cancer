/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
// import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";

const solutions = [
  {
    name: "HOME",
    href: "/",
  },
  {
    name: "BLOGS",
    href: "/blogs",
  },
  {
    name: "VIDEOS",
    href: "/videos",
  },
  {
    name: "ABOUT",
    href: "/about",
  },
  {
    name: "SIGN UP",
    href: "/signin",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  return (
    <>
      <Popover className="w-full py-4 flex items-center justify-between text-black bg-[#fcf9c8]">
        <Link className="ml-28" href="/" passHref>
          <div className="flex items-center cursor-pointer">
            <h1 className="text-4xl font-black font-header">CancerD</h1>
            <p className="leading-none ml-2 text-sm font-title font-bold">
              Detect
              <br />
              The Cancer
            </p>
          </div>
        </Link>

        <Popover.Group as="nav" className="hidden md:flex space-x-10 mr-28">
          <Link legacyBehavior href="/">
            <a className="text-base font-links font-bold mt-2 mr-2 hover:text-blue-500 hover:underline focus:text-black underline-offset-4">
              HOME
            </a>
          </Link>

          <Link legacyBehavior href="/blogs">
            <a className="text-base font-links font-bold mt-2 mr-2 hover:text-blue-500 hover:underline underline-offset-4">
              BLOGS
            </a>
          </Link>

          <Link legacyBehavior href="/videos">
            <a className="text-base font-links font-bold mt-2 mr-2 hover:text-blue-500 hover:underline underline-offset-4">
              VIDEOS
            </a>
          </Link>
          <Link legacyBehavior href="/about">
            <a className="text-base font-links font-bold mt-2 mr-2 hover:text-blue-500 hover:underline underline-offset-4">
              ABOUT
            </a>
          </Link>
          <a
            href="/Resume.pdf"
            download
            className="text-base font-links font-bold mt-2 mr-2 hover:text-blue-500 hover:underline underline-offset-4"
          >
            RESUME
          </a>
          <Link legacyBehavior href="/signin">
            <a className="text-base font-links font-bold border-solid border-2 border-black px-4 py-2 mr-2 rounded-lg bg-black text-white hover:bg-slate-600 hover:text-white">
              SIGN UP
            </a>
          </Link>
        </Popover.Group>
      </Popover>
    </>
  );
}
