import { useState } from "react";
import Link from "next/link";
import { GithubLogo, LinkedinLogo, X, List } from "@phosphor-icons/react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="w-full fixed top-0 left-0 right-0 h-24 sm:shadow-sm">
      <div className="flex justify-between items-center h-24 w-full px-4 2xl:px-16">
        <Link href="/">
          <img src="images/logo.png" />
        </Link>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <Link href="/">
              <li className="text-base ml-10">Home</li>
            </Link>
            <Link href="/">
              <li className="text-base ml-10">About</li>
            </Link>
            <Link href="/">
              <li className="text-base ml-10">Tech Skills</li>
            </Link>
            <Link href="/">
              <li className="text-base ml-10">Projects</li>
            </Link>
            <Link href="/">
              <li className="text-base ml-10">Contact</li>
            </Link>
            <Link href="/">
              <LinkedinLogo size={25} className="ml-10" />
            </Link>
            <Link href="/">
              <GithubLogo size={25} className="ml-8" />
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
          <List size={30} />
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed right-0 top-0 w-[65%] sm:hidden h-screen bg-white p-10 shadow-lg transition-transform ease-in-out duration-300 transform translate-x-0"
            : "fixed top-0 left-[100%] p-10 transition-transform ease-in-out duration-300 transform translate-x-full"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <X size={30} />
          </div>
        </div>
        <div className="flex-col py-4">
          <ul>
            <Link href="/">
              <li
                onClick={() => {
                  setMenuOpen(false);
                }}
                className="py-4 cursor-pointer"
              >
                Home
              </li>
            </Link>
            <Link href="/">
              <li
                onClick={() => {
                  setMenuOpen(false);
                }}
                className="py-4 cursor-pointer"
              >
                About
              </li>
            </Link>
            <Link href="/">
              <li
                onClick={() => {
                  setMenuOpen(false);
                }}
                className="py-4 cursor-pointer"
              >
                Tech Skills
              </li>
            </Link>
            <Link href="/">
              <li
                onClick={() => {
                  setMenuOpen(false);
                }}
                className="py-4 cursor-pointer"
              >
                Projects
              </li>
            </Link>
            <Link href="/">
              <li
                onClick={() => {
                  setMenuOpen(false);
                }}
                className="py-4 cursor-pointer"
              >
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
