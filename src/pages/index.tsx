import { Poppins } from "next/font/google";
import Link from "next/link";
import NavBar from "@/components/NavBar";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <>
      <NavBar />
      <section id="home" className=""></section>
      <section id="about" className=""></section>
      <section id="tech" className=""></section>
      <section id="projects" className=""></section>
      <section id="contact" className=""></section>
    </>
  );
}
