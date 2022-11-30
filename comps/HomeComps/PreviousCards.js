// css
import styles from "../../styles/Home.module.css";

import Image from "next/image";
import { useRouter } from "next/router";

const PreviousCards = ({ titleSets, setTitleSets, setCurrTitle }) => {
  const router = useRouter();
  // select question from previous sets
  function goToQuestion(title) {
    setCurrTitle(title);
    router.push("/flashcard");
  }

  function delPrevQuestion(title, index) {
    localStorage.removeItem(title);
    setTitleSets(
      titleSets.filter((t, tIndex) => t !== title && tIndex !== index)
    );
  }
  return (
    <>
      <div className={styles["prev-cards-cont"]}>
        <h1>Previous Flashcards</h1>
        {titleSets &&
          titleSets.map((title, index) => (
            <div className={styles.question} key={Math.random() * 1000}>
              <div
                className={styles["question-text"]}
                onClick={() => {
                  goToQuestion(title);
                }}>
                <p>{title}</p>
              </div>
              <button
                className={styles["del-prev-ques-btn"]}
                type="button"
                onClick={() => {
                  delPrevQuestion(title, index);
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
    </>
  );
};

export default PreviousCards;
