import React from "react";
import HeroSlider          from "../components/home/HeroSlider";
import ScholarshipBanner   from "../components/home/ScholarshipBanner";
import BecomePartSection   from "../components/home/BecomePartSection";
import CareerBanner        from "../components/home/CareerBanner";
import WelcomeSection      from "../components/home/WelcomeSection";
import OurActivities       from "../components/home/OurActivities";
import StatsSection        from "../components/home/StatsSection";
import DownloadRisala      from "../components/home/DownloadRisala";

const Home = () => (
  <main>
    <HeroSlider />
    <ScholarshipBanner />
    <BecomePartSection />
    <CareerBanner />
    <WelcomeSection />
    <OurActivities />
    <StatsSection />
    <DownloadRisala />
  </main>
);

export default Home;
