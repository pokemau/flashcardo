import { useRef, useEffect, useState } from "react";
import Head from "next/head";

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
        <h1 className="text-center font-bold text-2xl my-2">{currTitle}</h1>
        <div className="text-center border-[1px] border-[#c9c9c9] rounded p-2 w-[90vw] mx-auto min-h-[10em] flex flex-col justify-between break-words">
          <p className="text-lg">{currQuestion}</p>
          <p className="text-lg font-bold text-[#a15dad]" ref={ansRef}></p>
        </div>

        <div className="flex justify-center">
          <button
            className="flashcard-btn"
            type="button"
            onClick={(e) => showAns(e)}>
            Show Answer
          </button>

          <button
            className="flashcard-btn px-11"
            type="button"
            onClick={(e) => getRandomQuestion(e)}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Flashcard;
