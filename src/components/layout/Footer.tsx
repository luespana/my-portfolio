import React from "react";
import Link from "next/link";
import { GithubLogo, LinkedinLogo, Smiley } from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer className="bg-white w-full h-24 md:shadow-sm">
      <div className="flex flex-row justify-between items-center">
        <Link href="/">
          <img src="images/logo.png" className="p-4" />
        </Link>
        <div className="flex flex-row">
          <Link
            href="https://www.linkedin.com/in/lucia-espana/"
            target="_blank"
          >
            <LinkedinLogo size={25} className="ml-10" />
          </Link>
          <Link href="https://github.com/luespana" target="_blank">
            <GithubLogo size={25} className="ml-8" />
          </Link>
        </div>
      </div>
      <div className="flex flex row items-center">
        <nav className="md:flex p-4">
          <ul className="md:flex text-[#666666]">
            <Link href="/">
              <li className="text-base ml-10">Home</li>
            </Link>
            <Link href="/#tech">
              <li className="text-base ml-10 ">Tech Skills</li>
            </Link>
            <Link href="/#about">
              <li className="text-base ml-10">About</li>
            </Link>
            <Link href="/#projects">
              <li className="text-base ml-10">Projects</li>
            </Link>
            <Link href="/">
              <li className="text-base ml-10">Contact</li>
            </Link>
          </ul>
        </nav>
        <p>Built by Lucía España :)</p>
      </div>
    </footer>
  );
}
