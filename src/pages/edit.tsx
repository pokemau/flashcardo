import Head from "next/head";
import { useRef, useEffect, useState } from "react";

// components
import InputFields from "../components/edit-questions/InputFields";
import QuestionsList from "../components/edit-questions/QuestionsList";

export type QuestionsListType = {
  id: string;
  def: string;
  ans: string;
};

const EditQuestions = () => {
  // localstorage items
  const [currTitle, setCurrTitle] = useState<string>("");
  const [titleSets, setTitleSets] = useState<string[]>([]);

  // questions and answers
  const [questionsList, setQuestionsList] = useState<QuestionsListType[]>([]);

  // input fields ref
  const inputAnsRef = useRef<HTMLTextAreaElement>(null);
  const inputDefRef = useRef<HTMLTextAreaElement>(null);

  // get local storage items
  useEffect(() => {
    const titleLocalStorage = localStorage.getItem("currTitle");
    const titleSetsLocalStorage = localStorage.getItem("titleSets");

    if (titleLocalStorage) setCurrTitle(titleLocalStorage);
    if (titleSetsLocalStorage) setTitleSets(JSON.parse(titleSetsLocalStorage));

    inputDefRef?.current?.focus();
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
        />
      </div>
    </>
  );
};

export default EditQuestions;
