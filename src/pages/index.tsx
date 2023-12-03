import { Poppins } from "next/font/google";
import NavBar from "@/components/NavBar";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <>
      <NavBar />
    </>
  );
}
