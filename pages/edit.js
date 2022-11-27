import styles from "../styles/Edit.module.css";
import Head from "next/head";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";

const EditQuestions = () => {
  const router = useRouter();

  // localstorage items
  const [currTitle, setCurrTitle] = useState("");
  const [titleSets, setTitleSets] = useState([]);

  // input refs
  const inputAnsRef = useRef(null);
  const inputDefRef = useRef(null);

  // answers, question
  const [questionsList, setQuestionsList] = useState([]);
  const [def, setDef] = useState("");
  const [ans, setAns] = useState("");
  const [numCount, setNumCount] = useState(1);

  // add question
  function handleAddQues(e) {
    e.preventDefault();

    const d = inputDefRef.current.innerText;
    const a = inputAnsRef.current.innerText;

    if (d && a) {
      setQuestionsList([...questionsList, { id: numCount, def: d, ans: a }]);
      setNumCount(numCount + 1);

      inputDefRef.current.innerText = "";
      inputAnsRef.current.innerText = "";
    }
  }
  // start flashcard
  function handleStart(e) {
    e.preventDefault();

    if (questionsList.length > 0) {
      localStorage.setItem(currTitle, JSON.stringify(questionsList));
      setTitleSets([...titleSets, currTitle]);
      router.push("/flashcard");
    }
  }

  // delete questions
  function handleDelQues(event, question) {
    event.preventDefault();
    setQuestionsList(
      questionsList.filter(
        (ques) =>
          (ques.def && ques.ans && ques.id) !==
          (question.def && question.ans && question.id)
      )
    );
  }

  // get localstorage items
  useEffect(() => {
    setCurrTitle(localStorage.getItem("currTitle"));
    setTitleSets(JSON.parse(localStorage.getItem("titleSets")));
  }, []);

  // set title sets
  useEffect(() => {
    if (titleSets.length) {
      localStorage.setItem("titleSets", JSON.stringify(titleSets));
    }
  }, [titleSets]);

  return (
    <>
      <Head>
        <title>Flashcardo | Edit</title>
      </Head>
      <div className={styles["edit-questions-cont"]}>
        <div className={styles["left-edit-cont"]}>
          <div
            className={styles["def-input"]}
            contentEditable="true"
            ref={inputDefRef}></div>
          <div
            className={styles["ans-input"]}
            contentEditable="true"
            ref={inputAnsRef}></div>
          <button
            className={styles["add-ques-btn"]}
            type="button"
            onClick={handleAddQues}>
            Add Question
          </button>{" "}
        </div>

        <div className={styles["right-edit-cont"]}>
          <div className={styles["questions-cont"]}>
            <h1>Questions</h1>

            <div className={styles["all-ques-cont"]}>
              {questionsList &&
                questionsList.map((question, index) => (
                  <div className={styles["ques-cont"]} key={index}>
                    <p>
                      {index + 1}) {question.ans} - {question.def}
                    </p>
                    <button
                      className={styles["del-ques-btn"]}
                      onClick={() => {
                        handleDelQues(event, question);
                      }}>
                      <Image
                        src="/images/trash.png"
                        width={20}
                        height={20}
                        alt="trash icon"
                        className={styles["del-prev-btn-img"]}
                      />
                    </button>
                  </div>
                ))}
            </div>
          </div>
          <button className={styles["start-btn"]} onClick={handleStart}>
            Start
          </button>
        </div>
      </div>
    </>
  );
};

export default EditQuestions;
