import styles from "../styles/Edit.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const EditQuestions = () => {
  const router = useRouter();

  const [questionsList, setQuestionsList] = useState([]);
  const [def, setDef] = useState("");
  const [ans, setAns] = useState("");
  const [numCount, setNumCount] = useState(1);

  // add question button handler
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
  // start flashcard btn
  function handleStart(e) {
    e.preventDefault();
    const currTitle = localStorage.getItem("currTitle");
    if (questionsList.length > 0) {
      localStorage.setItem(currTitle, JSON.stringify(questionsList));
      router.push("/flashcard");
    }
  }
  // function handle delete question
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

  return (
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

          {questionsList.map((question, index) => (
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
  );
};

export default EditQuestions;
