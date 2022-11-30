import { useRef, useEffect, useState } from "react";
import Head from "next/head";

import styles from "../styles/Flashcard.module.css";

const Flashcard = () => {
  const [currTitle, setCurrTitle] = useState("");
  const [questionsList, setQuestionsList] = useState([]);
  const [currQuestion, setCurrQuestion] = useState("");
  const [currAns, setCurrAns] = useState("");
  const firstQisRun = useRef(true);
  const ansRef = useRef(null);

  // get localstorage items
  useEffect(() => {
    const t = localStorage.getItem("currTitle");
    setCurrTitle(t);
    setQuestionsList(JSON.parse(localStorage.getItem(t)));
  }, []);

  // get first question on render
  useEffect(() => {
    if (firstQisRun.current && questionsList.length) {
      getFirstQuestion();
      firstQisRun.current = false;
    }
  }, [questionsList]);

  // get random num
  function getRandNum() {
    const randNum = Math.floor(Math.random() * questionsList.length);
    return randNum;
  }

  // show answer
  function showAns(e) {
    e.preventDefault();

    ansRef.current.innerText = currAns;
  }

  // get first question
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
      ansRef.current.innerText = "";
    } else window.alert("No More Questions!!");
  }

  return (
    <>
      <Head>
        <title>Flashcardo | {currTitle}</title>
      </Head>
      <div className="flashcards">
        <h1 className={styles["curr-title"]}>{currTitle}</h1>
        <div className={styles["question-cont"]}>
          <p className={styles["def-text"]}>{currQuestion}</p>
          <p className={styles["ans-text"]} ref={ansRef}></p>
        </div>
        <button type="button" onClick={(e) => getRandomQuestion(e)}>
          NEXT
        </button>
        <button type="button" onClick={(e) => showAns(e)}>
          SHOW ANSWER
        </button>
      </div>
    </>
  );
};

export default Flashcard;
