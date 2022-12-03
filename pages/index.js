import Head from "next/head";

import { useState, useEffect } from "react";

// components
import PreviousCards from "../components/index/PreviousCards";
import CreateNewCard from "../components/index/CreateNewCard";

export default function Home() {
  const [currTitle, setCurrTitle] = useState("");
  const [titleSets, setTitleSets] = useState(null);

  // update titlesets if a set is deleted
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

  return (
    <>
      <Head>
        <title>Flashcardo | Home</title>
      </Head>
      <div className="w-[100vw] my-5 mx-auto">
        <CreateNewCard currTitle={currTitle} setCurrTitle={setCurrTitle} />

        <PreviousCards
          titleSets={titleSets}
          setTitleSets={setTitleSets}
          setCurrTitle={setCurrTitle}
        />
      </div>
    </>
  );
}
