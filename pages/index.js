import Head from "next/head";
import styles from "../styles/Home.module.css";

import { useState, useEffect } from "react";

// components
import PreviousCards from "../comps/HomeComps/PreviousCards";
import CreateNew from "../comps/HomeComps/CreateNewCard";

export default function Home() {
  const [currTitle, setCurrTitle] = useState("");
  const [titleSets, setTitleSets] = useState(null);

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
        <CreateNew currTitle={currTitle} setCurrTitle={setCurrTitle} />

        <PreviousCards
          titleSets={titleSets}
          setTitleSets={setTitleSets}
          setCurrTitle={setCurrTitle}
        />
      </div>
    </>
  );
}
