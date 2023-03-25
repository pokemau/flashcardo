import Head from "next/head";
import { useRef, useEffect, useState } from "react";

// components
import InputFields from "../components/EditQuestions/InputFields";
import QuestionsList from "../components/EditQuestions/QuestionsList";

const EditQuestions = () => {
  // localstorage items
  const [currTitle, setCurrTitle] = useState("");
  const [titleSets, setTitleSets] = useState([]);

  // questions and answers
  const [questionsList, setQuestionsList] = useState([]);

  // get localstorage items
  useEffect(() => {
    const title = localStorage.getItem("currTitle");
    const questions = JSON.parse(localStorage.getItem(title));

    setQuestionsList([...questionsList, ...questions]);

    setCurrTitle(localStorage.getItem("currTitle"));
    setTitleSets(JSON.parse(localStorage.getItem("titleSets")));
  }, []);

  function showQuestionLists() {
    console.log(questionsList);
  }

  return (
    <>
      <Head>
        <title>Flashcardo | Edit</title>
      </Head>

      <div className="mt-1 w-full m-auto lg:flex">
        <button onClick={showQuestionLists}>TEST</button>
        <InputFields
          setQuestionsList={setQuestionsList}
          questionsList={questionsList}
        />

        <QuestionsList
          questionsList={questionsList}
          setQuestionsList={setQuestionsList}
          currTitle={currTitle}
          titleSets={titleSets}
          setTitleSets={setTitleSets}
        />
      </div>
    </>
  );
};

export default EditQuestions;
