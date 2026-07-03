"use client";

export default function ResultStage({ setStage, answers }) {
  // Get saved results from both stages
  const { matchResults, mcqResults } = answers;

  // Match stage
  const matchCorrect = matchResults.filter(item => item.isCorrect).length;
  const matchTotal = matchResults.length;

  // MCQ stage
  const mcqCorrect = mcqResults.filter(q => q.isCorrect).length;
  const mcqTotal = mcqResults.length;

  // Overall score
  const totalCorrect = matchCorrect + mcqCorrect;
  const totalQuestions = matchTotal + mcqTotal;
  const scorePercent = Math.round((totalCorrect / totalQuestions) * 100);

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "16px" }}>
      <h2 style={{ fontSize: "22px", marginBottom: "20px" }}>📝 Final Result</h2>

      <div style={{
        padding: "18px",
        background: "#f8f9fa",
        borderRadius: "8px",
        marginBottom: "24px",
        border: "1px solid #e9ecef"
      }}>
        <h3 style={{ margin: "0 0 12px 0", fontSize: "20px" }}>Your Score: {scorePercent}%</h3>
        <p style={{ margin: "6px 0" }}>Matching Stage: {matchCorrect} / {matchTotal} correct</p>
        <p style={{ margin: "6px 0" }}>Multiple Choice: {mcqCorrect} / {mcqTotal} correct</p>
        <p style={{ margin: "8px 0 0 0", fontWeight: "bold" }}>Total: {totalCorrect} / {totalQuestions}</p>
      </div>

      <h3 style={{ fontSize: "18px", margin: "24px 0 12px 0" }}>🔍 Matching Stage Answers</h3>
      <div style={{ overflowX: "auto" }}>
        <table style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "15px"
        }}>
          <thead>
            <tr style={{ background: "#e9ecef" }}>
              <th style={{ border: "1px solid #ddd", padding: "10px", textAlign: "left" }}>Description</th>
              <th style={{ border: "1px solid #ddd", padding: "10px", textAlign: "left" }}>Your Choice</th>
              <th style={{ border: "1px solid #ddd", padding: "10px", textAlign: "left" }}>Correct Answer</th>
              <th style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>Result</th>
            </tr>
          </thead>
          <tbody>
            {matchResults.map(item => (
              <tr key={item.id} style={{
                background: item.isCorrect ? "#d4edda" : "#f8d7da"
              }}>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>{item.text}</td>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>{item.assignedZone}</td>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>{item.correctZone}</td>
                <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>
                  {item.isCorrect ? "✅ Correct" : "❌ Wrong"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={{ fontSize: "18px", margin: "24px 0 12px 0" }}>📋 Multiple Choice Answers</h3>
      <div style={{ overflowX: "auto" }}>
        <table style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "15px"
        }}>
          <thead>
            <tr style={{ background: "#e9ecef" }}>
              <th style={{ border: "1px solid #ddd", padding: "10px", textAlign: "left" }}>Question</th>
              <th style={{ border: "1px solid #ddd", padding: "10px", textAlign: "left" }}>Your Answer</th>
              <th style={{ border: "1px solid #ddd", padding: "10px", textAlign: "left" }}>Correct Answer</th>
              <th style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>Result</th>
            </tr>
          </thead>
          <tbody>
            {mcqResults.map(q => (
              <tr key={q.id} style={{
                background: q.isCorrect ? "#d4edda" : "#f8d7da"
              }}>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>{q.text}</td>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>{q.selected || "Not Answered"}</td>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>{q.correct}</td>
                <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>
                  {q.isCorrect ? "✅ Correct" : "❌ Wrong"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button
        onClick={() => setStage("match")}
        style={{
          marginTop: "30px",
          padding: "12px 24px",
          fontSize: "16px",
          border: "none",
          borderRadius: "6px",
          background: "#2196f3",
          color: "white",
          cursor: "pointer"
        }}
      >
        🔄 Start Over
      </button>
    </div>
  );
}