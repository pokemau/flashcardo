import { useRef, useEffect, useState } from "react";
import Head from "next/head";

const Flashcard = () => {
  const [currTitle, setCurrTitle] = useState("");
  const [questionsList, setQuestionsList] = useState([]);
  const [currQuestion, setCurrQuestion] = useState("");
  const [currAns, setCurrAns] = useState("");
  const ansRef = useRef(null);
  const [currNum, setCurrNum] = useState(0);

  // get local storage item
  useEffect(() => {
    const title = localStorage.getItem("currTitle");
    let questions = JSON.parse(localStorage.getItem(title));
    let runOnce = 0;

    setCurrTitle(title);

    // set questionslist items
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
  }, []);

  // update currQues and currAns values
  const updateQuestionInfo = () => {
    setCurrQuestion(questionsList[currNum].def);
    setCurrAns(questionsList[currNum].ans);
    ansRef.current.innerText = "";
  };

  // update current question text
  useEffect(() => {
    if (questionsList.length) updateQuestionInfo();
  }, [currNum]);

  // get next question
  const nextQuestion = () => {
    if (currNum + 1 < questionsList.length)
      setCurrNum((prevNum) => prevNum + 1);
    else alert("No more Questions");
  };

  // previous question
  const prevQuestion = () => {
    if (currNum > 0) setCurrNum((prevNum) => prevNum - 1);
    else alert("This is the first question.");
  };

  // show answer
  const showAns = (e) => {
    e.preventDefault();
    ansRef.current.innerText = currAns;
  };

  return (
    <>
      <Head>
        <title>Flashcardo | {currTitle}</title>
      </Head>
      <div className="flashcards">
        <h1 className="text-center font-bold text-2xl my-2">{currTitle}</h1>
        <div
          className={`text-center border-[1px] border-[#c9c9c9] rounded p-2 w-[90vw] mx-auto min-h-[10em] flex flex-col justify-between break-words`}>
          <p className="text-lg">{currQuestion}</p>
          <p className="text-lg font-bold text-[#a15dad]" ref={ansRef}></p>
        </div>

        <div className="flex justify-center">
          <button
            className="flashcard-btn px-11"
            type="button"
            onClick={(e) => prevQuestion(e)}>
            Previous
          </button>

          <button
            className="flashcard-btn"
            type="button"
            onClick={(e) => showAns(e)}>
            Show Answer
          </button>

          <button
            className="flashcard-btn px-11"
            type="button"
            onClick={(e) => nextQuestion(e)}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Flashcard;
