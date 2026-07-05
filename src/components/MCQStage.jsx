"use client";
import { useState } from "react";

export default function MCQStage({ setStage, setAnswers, currentAnswers }) {
  // Define questions and correct answers
  const questions = [
    {
      id: 1,
      text: "Which ajkdnjaskdjaskdakdajs?",
      options: ["WiFi 0-3", "WiFi 4", "WiFi 5", "WiFi 6", "WiFi 7"],
      correct: "WiFi 0-3"
    },
    {
      id: 2,
      text: "Which akdjalkdjskaldjaslkd?",
      options: ["WiFi 0-3", "WiFi 4", "WiFi 5", "WiFi 6", "WiFi 7"],
      correct: "WiFi 4"
    },
    {
      id: 3,
      text: "Which asjdaskdjaslkdjasld?",
      options: ["WiFi 0-3", "WiFi 4", "WiFi 5", "WiFi 6", "WiFi 7"],
      correct: "WiFi 5"
    },
    {
      id: 4,
      text: "Which adkasjdaslkdjaosdjkal?",
      options: ["WiFi 0-3", "WiFi 4", "WiFi 5", "WiFi 6", "WiFi 7"],
      correct: "WiFi 6"
    },
    {
      id: 5,
      text: "Which asjdkadkaskdk?",
      options: ["WiFi 0-3", "WiFi 4", "WiFi 5", "WiFi 6", "WiFi 7"],
      correct: "WiFi 7"
    }
  ];

  // Handle Selected
  const [selected, setSelected] = useState({});

  const handleSelect = (questionId, chosenAnswer) => {
    setSelected(prev => ({
      ...prev,
      [questionId]: chosenAnswer
    }));
  };

  const goToResult = () => {
    // Check each answer and mark correct/incorrect
    const mcqResults = questions.map(q => ({
      id: q.id,
      text: q.text,
      selected: selected[q.id] || "",
      correct: q.correct,
      isCorrect: selected[q.id] === q.correct
    }));

    // Save results to shared answers state
    setAnswers({
      ...currentAnswers,
      mcqResults: mcqResults
    });

    // Move to final result page
    setStage("result");
  };

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto" }}>

      {questions.map(question => (
        <div
          key={question.id}
          style={{
            marginBottom: "20px",
            padding: "16px",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            background: "#fdfdfd"
          }}
        >
          <p style={{ fontSize: "16px", margin: "0 0 14px 0", lineHeight: "1.5" }}>
            <strong>{question.id}.</strong> {question.text}
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {question.options.map(option => (
              <label
                key={option}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "10px 12px",
                  borderRadius: "6px",
                  background: selected[question.id] === option ? "#e3f2fd" : "#f8f9fa",
                  border: selected[question.id] === option ? "1px solid #00227098" : "1px solid transparent",
                  cursor: "pointer",
                  fontSize: "15px"
                }}
              >
                <input
                  type="radio"
                  name={`q-${question.id}`}
                  value={option}
                  checked={selected[question.id] === option}
                  onChange={() => handleSelect(question.id, option)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}

      <div style={{ display: "flex", gap: "12px", marginTop: "24px", flexWrap: "wrap" }}>

        <button
          onClick={goToResult}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            border: "none",
            borderRadius: "6px",
            background: "#002170",
            color: "white",
            cursor: "pointer"
          }}
        >
          See Result →
        </button>
      </div>
    </div>
  );
}