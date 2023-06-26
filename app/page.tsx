import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import { Inter } from "@next/font/google";
import Achievement from "./achievment/page";
import Humanoid from "./humanoids/page";
import SponsorPage from "./sponsors/page";
import TeamPage from "./teams/page";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Achievement/>
      <Humanoid />
      <SponsorPage/>
      {/* <TeamPage/> */}
      <Contact />
    </>
  );
}
