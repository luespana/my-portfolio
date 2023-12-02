import { useState } from "react";
import Link from "next/link";
import { GithubLogo, LinkedinLogo, X, List } from "@phosphor-icons/react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="w-full fixed top-0 left-0 right-0 h-24">
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
              <LinkedinLogo size={30} className="ml-4" />
            </Link>
            <Link href="/">
              <GithubLogo size={30} className="ml-8" />
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
            ? "fixed right-0 top-0 w-[65%] sm:hidden h-screen bg-slate-300 p-10 ease-in duration-500"
            : "fixed top-0 left-[100%] p-10 ease-in duration-500"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer"></div>
          <X size={30} />
        </div>
      </div>
    </nav>
  );
}
