import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

import { useState, useEffect, useRef } from "react";

export default function Home() {
  const router = useRouter();
  const [currTitle, setCurrTitle] = useState("");
  const [titleSets, setTitleSets] = useState([]);
  const didMount = useRef(false);

  // create new
  function handleCreateNew(e) {
    e.preventDefault();

    if (currTitle) {
      localStorage.setItem("currTitle", currTitle);

      router.push("/edit");
      setCurrTitle("");
    }
  }

  function goToQuestion(title) {
    setCurrTitle(title);
    router.push("/flashcard");
  }

  function delPrevQuestion(title, index) {
    setTitleSets(
      titleSets.filter((t, tIndex) => t !== title && tIndex !== index)
    );

    localStorage.setItem("titleSets", JSON.stringify(titleSets));
  }
  // get items from localstorage
  useEffect(() => {
    if (localStorage.getItem("titleSets")) {
      const tSets = JSON.parse(localStorage.getItem("titleSets"));

      setTitleSets(tSets);
    } else {
      localStorage.setItem("titleSets", JSON.stringify([]));
    }
  }, []);

  // test
  useEffect(() => {
    console.log(`3: ${titleSets}`);
  }, [titleSets]);

  // store curr title to local storage
  useEffect(() => {
    if (currTitle !== "") {
      localStorage.setItem("currTitle", currTitle);
    }
  }, [currTitle]);

  return (
    <>
      <Head>
        <title>Flashcardo | Home</title>
      </Head>
      <div className={styles["body-container"]}>
        <div className={styles["create-container"]}>
          <h1>Create New Flashcard</h1>
          <input
            value={currTitle}
            type="text"
            onInput={(e) => {
              setCurrTitle(e.target.value);
            }}
          />
          <div className="create-btn-cont">
            <button onClick={handleCreateNew}>Create New</button>
          </div>
        </div>

        <div className={styles["previous-flashcards-container"]}>
          <h1>Previous Flashcards</h1>
          {titleSets.map((title, index) => (
            <div
              className="previous-title-sets-cont"
              key={Math.random() * 1000}>
              <div className="question">
                <div
                  className="question-text"
                  onClick={() => {
                    goToQuestion(title);
                  }}>
                  <p>{title}</p>
                </div>
                <button
                  className="del-prev-ques-btn"
                  type="button"
                  onClick={() => {
                    delPrevQuestion(title, index);
                  }}>
                  Del
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
