"use client";
import { useState } from "react";
import MatchStage from "./MatchStage.jsx";
import MCQStage from "./MCQStage.jsx";
import ResultStage from "./ResultStage.jsx";

export default function KnowledgeCheck() {
  const [stage, setStage] = useState("match");
  // Save Results
  const [answers, setAnswers] = useState({
    matchResults: [],
    mcqResults: []
  })

  return (
    <div>
      {/*Matching Stage*/}
      {stage === "match" && (
        <MatchStage
          setStage={setStage}
          setAnswers={setAnswers}
          currentAnswers={answers}
        />
      )}
      {/*Multiple Choice Stage*/}
      {stage === "mcq" && (
        <MCQStage
          setStage={setStage}
          setAnswers={setAnswers}
          currentAnswers={answers}
        />
      )}
      {/*Result Stage*/}
      {stage === "result" && (
        <ResultStage
          setStage={setStage}
          answers={answers}
        />
      )}
    </div>
  );
}