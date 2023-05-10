import Head from "next/head";
import { useRef, useEffect, useState } from "react";

// components
import InputFields from "../components/edit-questions/edit/InputFields";
import QuestionsList from "../components/edit-questions/edit/QuestionsList";
import JorashMode from "../components/jorash-mode/JorashMode";
import { Button } from "../ui/button/Button";

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

  const [isJorashMode, setIsJorashMode] = useState(false);

  // get local storage items
  useEffect(() => {
    const titleFromStorage = localStorage.getItem("currTitle");
    const tSetsFromStorage = localStorage.getItem("titleSets");

    if (titleFromStorage) {
      setCurrTitle(titleFromStorage);
      const questionsLocalStorage = localStorage.getItem(titleFromStorage)!;
      const questions: QuestionsListType[] = JSON.parse(questionsLocalStorage);
      if (questions) setQuestionsList([...questions]);
    }
    if (tSetsFromStorage) {
      setTitleSets(JSON.parse(tSetsFromStorage));
    }

    inputDefRef?.current?.focus();
  }, []);

  return (
    <>
      <Head>
        <title>Flashcardo | Edit</title>
      </Head>

      <div className="w-[5rem] m-auto">
        <Button
          btnFunc={() => setIsJorashMode(!isJorashMode)}
          btnTitle={isJorashMode ? "Jorash Mode" : "Normal Mode"}
        />
      </div>

      <div className="mt-1 w-full m-auto lg:flex">
        {isJorashMode ? (
          <JorashMode
            questionsList={questionsList}
            setQuestionsList={setQuestionsList}
          />
        ) : (
          <InputFields
            setQuestionsList={setQuestionsList}
            questionsList={questionsList}
            inputAnsRef={inputAnsRef}
            inputDefRef={inputDefRef}
          />
        )}

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
