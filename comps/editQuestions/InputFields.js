import styles from "../../styles/Edit.module.css";

import { useState } from "react";

const InputFields = ({
  inputDefRef,
  inputAnsRef,
  questionsList,
  setQuestionsList,
}) => {
  // id tracker
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
  return (
    <>
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
    </>
  );
};

export default InputFields;
