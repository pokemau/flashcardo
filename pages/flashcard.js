import { useRef, useEffect, useState } from "react";
import Head from "next/head";
import QuestionCard from "../components/Flashcard/QuestionCard";
import ControlQuestionsButtons from "../components/Flashcard/ControlQuestionsButtons";

const Flashcard = () => {
  const [currTitle, setCurrTitle] = useState("");
  const [questionsList, setQuestionsList] = useState([]);
  const [currQuestion, setCurrQuestion] = useState("");
  const [currAns, setCurrAns] = useState("");
  const [currNum, setCurrNum] = useState(0);
  const [showAns, setShowAns] = useState(false);

  // get local storage items
  useEffect(() => {
    const title = localStorage.getItem("currTitle");
    let questions = JSON.parse(localStorage.getItem(title));

    setCurrTitle(title);
    randomizeQuestions(questions);
  }, []);

  function randomizeQuestions(questions) {
    let runOnce = 0;

    while (questions.length) {
      const randNum = Math.floor(Math.random() * questions.length);
      const newQuestion = questions[randNum];

      // set initial currQuestion and currAns
      if (!runOnce) {
        setCurrAns(newQuestion.ans);
        setCurrQuestion(newQuestion.def);
        runOnce = 1;
      }
      setQuestionsList((prevQuestions) => [...prevQuestions, newQuestion]);
      questions = questions.filter((item) => item !== newQuestion);
    }
  }

  // update currQues and currAns values
  function updateAnswerAndQuestion() {
    setCurrQuestion(questionsList[currNum].def);
    setCurrAns(questionsList[currNum].ans);
  }

  // update current question text
  useEffect(() => {
    if (questionsList.length) updateAnswerAndQuestion();
  }, [currNum]);

  return (
    <>
      <Head>
        <title>Flashcardo | {currTitle}</title>
      </Head>

      <div className="flashcards">
        <h1 className="text-center font-bold text-4xl my-2">{currTitle}</h1>
        <h1 className="text-center font-bold text-xl mb-2">{`${currNum + 1} / ${
          questionsList.length
        }`}</h1>

        <QuestionCard
          currAns={currAns}
          currQuestion={currQuestion}
          showAns={showAns}
        />

        <ControlQuestionsButtons
          showAns={showAns}
          setShowAns={setShowAns}
          currNum={currNum}
          setCurrNum={setCurrNum}
          questionsListLen={questionsList.length}
        />
      </div>
    </>
  );
};

export default Flashcard;
