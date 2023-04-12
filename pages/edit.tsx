import Head from "next/head";
import { useRef, useEffect, useState } from "react";

// components
import InputFields from "../components/EditQuestions/InputFields";
import QuestionsList from "../components/EditQuestions/QuestionsList";

interface TitleSets {
  [index: number]: string;
}

interface QuestionsList {
  id: string;
  def: string;
  ans: string;
}

const EditQuestions = () => {
  // localstorage items
  const [currTitle, setCurrTitle] = useState<string>("");
  const [titleSets, setTitleSets] = useState<TitleSets>([]);

  // questions and answers
  const [questionsList, setQuestionsList] = useState<QuestionsList[]>([]);

  // input fields ref
  const inputAnsRef = useRef(null);
  const inputDefRef = useRef(null);

  // get local storage items
  useEffect(() => {
    setCurrTitle(localStorage.getItem("currTitle"));
    setTitleSets(JSON.parse(localStorage.getItem("titleSets")));

    inputDefRef.current.focus();
  }, []);

  return (
    <>
      <Head>
        <title>Flashcardo | Edit</title>
      </Head>

      <div className="mt-1 w-full m-auto lg:flex">
        <InputFields
          setQuestionsList={setQuestionsList}
          questionsList={questionsList}
          inputAnsRef={inputAnsRef}
          inputDefRef={inputDefRef}
        />

        <QuestionsList
          questionsList={questionsList}
          setQuestionsList={setQuestionsList}
          currTitle={currTitle}
          titleSets={titleSets}
          setTitleSets={setTitleSets}
          inputAnsRef={inputAnsRef}
          inputDefRef={inputDefRef}
        />
      </div>
    </>
  );
};

export default EditQuestions;
