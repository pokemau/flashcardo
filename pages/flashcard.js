import { use, useEffect, useState } from "react";
import Head from "next/head";

const Flashcard = () => {
  const [currTitle, setCurrTitle] = useState("");
  const [questionsList, setQuestionsList] = useState([]);
  const [currQuestion, setCurrQuestion] = useState("");
  const [currAns, setCurrAns] = useState("");
  const [firstQisRun, setFirstQisRun] = useState(true);

  // get localstorage items
  useEffect(() => {
    const t = localStorage.getItem("currTitle");
    setCurrTitle(t);
    setQuestionsList(JSON.parse(localStorage.getItem(t)));
  }, []);

  // get first question on render
  useEffect(() => {
    if (firstQisRun && questionsList.length) {
      getFirstQuestion();
      setFirstQisRun(false);
    }
  }, [questionsList]);

  // get random num
  function getRandNum() {
    const randNum = Math.floor(Math.random() * questionsList.length);
    return randNum;
  }

  function getFirstQuestion() {
    const randNum = getRandNum();
    if (questionsList.length) {
      setCurrQuestion(questionsList[randNum].def);
      setCurrAns(questionsList[randNum].ans);
      setQuestionsList(questionsList.filter((q, index) => index !== randNum));
    }
  }

  // get random question
  function getRandomQuestion(e) {
    e.preventDefault();
    const randNum = getRandNum();

    if (questionsList.length) {
      setCurrQuestion(questionsList[randNum].def);
      setCurrAns(questionsList[randNum].ans);
      setQuestionsList(questionsList.filter((q, index) => index !== randNum));
    }
  }

  useEffect(() => {
    console.log(questionsList, currQuestion, currAns);
  }, [currQuestion, currAns, questionsList]);

  return (
    <>
      <Head>
        <title>Flashcardo | {currTitle}</title>
      </Head>
      <div className="flashcards">
        <h1>Flashcardo</h1>

        <button type="button" onClick={(e) => getRandomQuestion(e)}>
          NEXT
        </button>
        <p>{currQuestion}</p>
      </div>
    </>
  );
};

export default Flashcard;
