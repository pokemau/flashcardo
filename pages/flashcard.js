import { useRef, useEffect, useState } from "react";
import Head from "next/head";

const Flashcard = () => {
  const [currTitle, setCurrTitle] = useState("");
  const [questionsList, setQuestionsList] = useState([]);
  const [currQuestion, setCurrQuestion] = useState("");
  const [currAns, setCurrAns] = useState("");
  const [currNum, setCurrNum] = useState(0);
  const [showAns, setShowAns] = useState(false);

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
  };

  // update current question text
  useEffect(() => {
    if (questionsList.length) updateQuestionInfo();
  }, [currNum]);

  // get next question
  const nextQuestion = () => {
    if (currNum + 1 < questionsList.length)
      setCurrNum((prevNum) => prevNum + 1);
    else setCurrNum(0);
  };

  // previous question
  const prevQuestion = () => {
    if (currNum > 0) setCurrNum((prevNum) => prevNum - 1);
    else setCurrNum(questionsList.length - 1);
  };

  // show answer
  const showAnswer = (e) => {
    e.preventDefault();
    setShowAns((prevShowAns) => !prevShowAns);
  };

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

        <div className="relative w-[80vw] h-[40vh] mx-auto mb-2 text-center ">
          <div
            className={`card absolute w-full h-full border-[1px] border-[#c9c9c9] rounded mx-auto min-h-[10em]flex break-words ${
              showAns ? "card-flip" : null
            }`}>
            <div className="front-card absolute w-full h-full bg-orange-200">
              {currQuestion}
            </div>
            <div className="back-card absolute w-full h-full bg-green-200">
              {currAns}
            </div>
          </div>
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
            onClick={(e) => showAnswer(e)}>{`${
            showAns ? "Hide" : "Show"
          } Answer`}</button>

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
