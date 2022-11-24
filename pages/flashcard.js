import { useEffect, useState } from "react";

const Flashcard = () => {
  const [questionsList, setQuestionsList] = useState([]);

  useEffect(() => {
    const t = localStorage.getItem("currTitle");

    if (t) {
      const qList = JSON.parse(localStorage.getItem(t));
      setQuestionsList(qList);
    }
  }, []);

  return (
    <div className="flashcards">
      <h1>Flashcardo</h1>

      {questionsList &&
        questionsList.map((question, index) => (
          <div className="ques-cont" key={question.id}>
            <p>
              {index + 1}) {question.def} - {question.ans}
            </p>
          </div>
        ))}
    </div>
  );
};

export default Flashcard;
