import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

import { useState, useEffect, useRef } from "react";

export default function Home() {
  const router = useRouter();
  const [currTitle, setCurrTitle] = useState("");
  const [titleSets, setTitleSets] = useState(null);

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
    localStorage.removeItem(title);
    setTitleSets(
      titleSets.filter((t, tIndex) => t !== title && tIndex !== index)
    );
  }

  // push title sets to localstorage
  useEffect(() => {
    if (titleSets) {
      localStorage.setItem("titleSets", JSON.stringify(titleSets));
    }
  }, [titleSets]);

  // get items from localstorage
  useEffect(() => {
    if (localStorage.getItem("titleSets")) {
      const tSets = JSON.parse(localStorage.getItem("titleSets"));
      setTitleSets(tSets);
    } else {
      localStorage.setItem("titleSets", JSON.stringify([]));
    }
  }, []);

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
      <div className={styles["body-cont"]}>
        <div className={styles["create-cont"]}>
          <h1>Create New Flashcard</h1>
          <input
            className={styles["create-input"]}
            value={currTitle}
            type="text"
            onInput={(e) => {
              setCurrTitle(e.target.value);
            }}
          />
          <button
            onClick={handleCreateNew}
            className={styles["create-new-btn"]}>
            Create New
          </button>
        </div>

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
      </div>
    </>
  );
}
