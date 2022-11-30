import styles from "../../styles/Edit.module.css";

import Image from "next/image";
import { useRouter } from "next/router";

const QuestionsList = ({
  questionsList,
  setQuestionsList,
  currTitle,
  titleSets,
  setTitleSets,
}) => {
  const router = useRouter();
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
  return (
    <>
      <div className={styles["right-edit-cont"]}>
        <div className={styles["questions-cont"]}>
          <h1>Questions</h1>
          <div className={styles["ques-border-line"]}>
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
        <button
          className={styles["start-btn"]}
          onClick={handleStart}
          type="button">
          Start
        </button>
      </div>
    </>
  );
};

export default QuestionsList;
