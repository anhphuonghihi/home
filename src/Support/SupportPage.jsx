import React from "react";
import AllQuestionSection from "../components/allquestionsection/AllQuestionSection";
import QuestionsSection from "../components/questionssection/QuestionsSection";
import SupportSection from "../components/supportsection/SupportSection";

const SupportPage = () => {
  return (
    <>
      <QuestionsSection />
      <AllQuestionSection />
      <SupportSection />
    </>
  );
};

export default SupportPage;
