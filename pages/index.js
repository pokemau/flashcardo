import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles["body-container"]}>
      <div className={styles["create-container"]}>
        <h1>Create New Flashcard</h1>
        <input type="text" />
        <div className="create-btn-cont">
          <button type="button">Create New</button>
        </div>
      </div>

      <div className={styles["previous-flashcards-container"]}>
        <h1>Previous Flashcards</h1>
      </div>
    </div>
  );
}
