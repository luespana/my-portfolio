import { Poppins } from "next/font/google";
import NavBar from "@/components/layout/NavBar";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <main className={poppins.className}>
      <NavBar />
      {children}
    </main>
  );
}
