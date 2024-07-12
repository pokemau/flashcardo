import { useEffect, useState } from "react";
import Head from "next/head";
import QuestionCard from "../components/flaschard/QuestionCard";
import ControlQuestionsButtons from "../components/flaschard/ControlButtons";
import { useRouter } from "next/router";
import { QuestionsListType } from "./edit";

const Flashcard = () => {
  const [currTitle, setCurrTitle] = useState("");
  const [questionsList, setQuestionsList] = useState<QuestionsListType[]>([]);
  const [currQuestion, setCurrQuestion] = useState("");
  const [currAns, setCurrAns] = useState("");
  const [currNum, setCurrNum] = useState(0);
  const [showAns, setShowAns] = useState(false);
  const router = useRouter();

  // get local storage items
  useEffect(() => {
    const titleLocalStorage = localStorage.getItem("currTitle");

    if (titleLocalStorage) {
      const questionsLocalStorage = localStorage.getItem(titleLocalStorage)!;
      let questions: QuestionsListType[] = JSON.parse(questionsLocalStorage);

      setCurrTitle(titleLocalStorage);
      randomizeQuestions(questions);
    } else router.push("/");
  }, []);

  function randomizeQuestions(questions: QuestionsListType[]) {
    let runOnce = 0;

    while (questions.length) {
      const randNum = Math.floor(Math.random() * questions.length);
      const newQuestion: QuestionsListType = questions[randNum];

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

  function editCurrentFlashcardSet() {
    router.push("/edit");
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

      <div className="overflow-y-hidden">
        <div className="flex items-center relative justify-center w-[90vw] lg:w-[60vw] mx-auto">
          <button
            onClick={editCurrentFlashcardSet}
            className="absolute left-0 cursor-pointer bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded-md"
          >
            Edit
          </button>
          <div>
            <h1 className="text-center font-bold text-xl md:text-3xl">
              {currTitle}
            </h1>
            <h1 className="text-center font-bold mb-1">{`${currNum + 1} / ${
              questionsList.length
            }`}</h1>
          </div>
        </div>

        <QuestionCard
          currAns={currAns}
          setShowAns={setShowAns}
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
