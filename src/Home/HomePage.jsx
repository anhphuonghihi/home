import React from "react";
import MainSection from "../components/mainsection/MainSection";
import StatisticalSections from "../components/statisticalsections/StatisticalSections";
import MissionSection from "../components/missionsection/MissionSection";
import ForSection from "../components/forsection/ForSection";
import OfficeSection from "../components/officesection/OfficeSection";
import TeamSection from "../components/teamsection/TeamSection";
import AdviSesecion from "../components/advisesection/AdviSesecion";
const Home = () => {
  return (
    <>
      <MainSection />
      <StatisticalSections />
      <MissionSection />
      <ForSection />
      <OfficeSection />
      <TeamSection />
      <AdviSesecion />
    </>
  );
};

export default Home;
