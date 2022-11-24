import { useEffect, useState } from "react";
import Head from "next/head";

const Flashcard = () => {
  const [currTitle, setCurrTitle] = useState("");
  const [questionsList, setQuestionsList] = useState([]);

  useEffect(() => {
    const t = localStorage.getItem("currTitle");
    setCurrTitle(t);

    if (t) {
      const qList = JSON.parse(localStorage.getItem(t));
      setQuestionsList(qList);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Flashcardo | {currTitle}</title>
      </Head>
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
    </>
  );
};

export default Flashcard;
