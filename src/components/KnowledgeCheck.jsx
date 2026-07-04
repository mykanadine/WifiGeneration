"use client";
import { useState } from "react";
import MatchStage from "./MatchStage.jsx";
import MCQStage from "./MCQStage.jsx";
import ResultStage from "./ResultStage.jsx";

export default function KnowledgeCheck() {
  const [stage, setStage] = useState("match");
  const [answers, setAnswers] = useState({
    matchResults: [],
    mcqResults: []
  })

  return (
    <div>
      {stage === "match" && (
        <MatchStage
          setStage={setStage}
          setAnswers={setAnswers}
          currentAnswers={answers}
        />
      )}
      {stage === "mcq" && (
        <MCQStage
          setStage={setStage}
          setAnswers={setAnswers}
          currentAnswers={answers}
        />
      )}
      {stage === "result" && (
        <ResultStage
          setStage={setStage}
          answers={answers}
        />
      )}
    </div>
  );
}