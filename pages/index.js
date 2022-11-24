import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [currTitle, setCurrTitle] = useState("");

  function handleCreateNew(e) {
    e.preventDefault();

    if (currTitle) {
      window.localStorage.setItem("currTitle", currTitle);
      router.push("/edit");
      setCurrTitle("");
    }
  }

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
        </div>
      </div>
    </>
  );
}
