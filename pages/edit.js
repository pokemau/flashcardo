import styles from "../styles/Edit.module.css";
import Head from "next/head";
import { use, useEffect, useState } from "react";
import { useRouter } from "next/router";

const EditQuestions = () => {
  const router = useRouter();

  // localstorage items
  const [currTitle, setCurrTitle] = useState("");
  const [titleSets, setTitleSets] = useState([]);

  const [questionsList, setQuestionsList] = useState([]);
  const [def, setDef] = useState("");
  const [ans, setAns] = useState("");
  const [numCount, setNumCount] = useState(1);

  // add question
  function handleAddQues(e) {
    e.preventDefault();

    if (def && ans) {
      setQuestionsList([
        ...questionsList,
        { id: numCount, def: def, ans: ans },
      ]);
      setNumCount(numCount + 1);
      setDef("");
      setAns("");
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
        <div className="left-edit-cont">
          <div className="def-input-cont">
            <input
              value={def}
              className={styles["def-input"]}
              type="text"
              placeholder="Write your question here..."
              onInput={(e) => {
                setDef(e.target.value);
              }}
            />
          </div>

          <div className="ans-input-cont">
            <input
              value={ans}
              className={styles["ans-input"]}
              type="text"
              placeholder="Answer here..."
              onInput={(e) => {
                setAns(e.target.value);
              }}
            />
          </div>
          <div className="add-ques-btn-cont">
            <button className="add-ques" type="button" onClick={handleAddQues}>
              Add Question
            </button>
          </div>
        </div>

        <div className="right-edit-cont">
          <div className="questions-cont">
            <h1>Questions</h1>

            {questionsList &&
              questionsList.map((question, index) => (
                <div className="ques-cont" key={index}>
                  <p>
                    {index + 1}) {question.ans} - {question.def}
                  </p>
                  <button
                    className="del-ques-btn"
                    onClick={() => {
                      handleDelQues(event, question);
                    }}>
                    Del
                  </button>
                </div>
              ))}
          </div>
          <div className="start-btn-cont">
            <button className="start-btn" onClick={handleStart}>
              Start
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditQuestions;
