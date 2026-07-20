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
      <div style={{ marginBottom: "20px", padding: "14px 16px", border: "1px solid #dbe7ff", borderRadius: "10px", background: "#f5f8ff" }}>
        <h3 style={{ margin: "0 0 8px 0", color: "#002170" }}>How to complete this quiz</h3>
        <ul style={{ margin: 0, paddingLeft: "20px", lineHeight: 1.6 }}>
          <li>Drag each description into the correct Wi-Fi standard box.</li>
          <li>On mobile, tap a card first, then tap the appropriate Wi-Fi generation box to place it.</li>
          <li>After matching all items, click the next button to continue.</li>
          <li>Answer the multiple-choice questions and view your results at the end.</li>
        </ul>
      </div>

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