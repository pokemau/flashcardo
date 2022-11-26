import { useEffect, useState } from "react";
import Head from "next/head";

const Flashcard = () => {
  const [currTitle, setCurrTitle] = useState("");
  const [questionsList, setQuestionsList] = useState([]);
  const [currQuestion, setCurrQuestion] = useState("");

  // get questions
  useEffect(() => {
    getRandomQuestion();
    const t = localStorage.getItem("currTitle");
    setCurrTitle(t);
    if (t) {
      const qList = JSON.parse(localStorage.getItem(t));
      setQuestionsList(qList);
    }
  }, []);

  // test
  useEffect(() => {
    if (currQuestion && questionsList.length) {
      console.log(`currQ: ${currQuestion}`);
      console.log(`qList: ${JSON.stringify(questionsList)}`);
    }
  }, [currQuestion, questionsList]);

  // get question
  function getRandomQuestion() {
    if (questionsList.length > 0) {
      const randNum = Math.floor(Math.random() * questionsList.length);
      setCurrQuestion(questionsList[randNum].def);

      setQuestionsList(
        questionsList.filter((question) => question.def !== currQuestion)
      );
    }
  }

  return (
    <>
      <Head>
        <title>Flashcardo | {currTitle}</title>
      </Head>
      <div className="flashcards">
        <h1>Flashcardo</h1>

        <button type="button" onClick={getRandomQuestion}>
          NEXT
        </button>

        <p>{currQuestion}</p>
      </div>
    </>
  );
};

export default Flashcard;
