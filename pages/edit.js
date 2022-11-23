import styles from "../styles/Edit.module.css";

const EditQuestions = () => {
  return (
    <div className={styles["edit-questions-cont"]}>
      <div className="left-edit-cont">
        <div className="def-input-cont">
          <input
            className={styles["def-input"]}
            type="text"
            placeholder="Write your question here..."
          />
        </div>

        <div className="ans-input-cont">
          <input
            className={styles["ans-input"]}
            type="text"
            placeholder="Answer here..."
          />
        </div>
        <div className="add-ques-btn-cont">
          <button className="add-ques" type="button">
            Add Question
          </button>
        </div>
      </div>

      <div className="right-edit-cont">
        <div className="questions-cont">
          <h1>Questions</h1>
        </div>
      </div>
    </div>
  );
};

export default EditQuestions;
