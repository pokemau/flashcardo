import Head from "next/head";
import { useRef, useEffect, useState } from "react";

// components
import InputFields from "../components/EditQuestions/InputFields";
import QuestionsList from "../components/EditQuestions/QuestionsList";

const EditQuestions = () => {
  // localstorage items
  const [currTitle, setCurrTitle] = useState("");
  const [titleSets, setTitleSets] = useState([]);

  // input refs
  const inputAnsRef = useRef(null);
  const inputDefRef = useRef(null);

  // answers, question
  const [questionsList, setQuestionsList] = useState([]);

  // get localstorage items
  useEffect(() => {
    setCurrTitle(localStorage.getItem("currTitle"));
    setTitleSets(JSON.parse(localStorage.getItem("titleSets")));
  }, []);

  return (
    <>
      <Head>
        <title>Flashcardo | Edit</title>
      </Head>

      <div className="mt-1 w-full m-auto lg:flex">
        <InputFields
          inputDefRef={inputDefRef}
          inputAnsRef={inputAnsRef}
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
