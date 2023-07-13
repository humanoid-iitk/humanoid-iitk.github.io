import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import { Inter } from "@next/font/google";
import Achievement from "@/app/achievment/page";
import Humanoid from "@/app/humanoids/page";
import SponsorPage from "@/app/sponsors/page";
import TeamPage from "@/app/teams/page";
import AboutPage from "@/app/about/page";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <AboutPage/>
      <Achievement/>
      <Humanoid />
      <SponsorPage/>
      {/* <TeamPage/> */}
      <Contact />
    </>
  );
}
