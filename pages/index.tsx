import Head from "next/head";

import { useState, useEffect } from "react";

// components
import PreviousCards from "../components/HomePage/PreviousCards";
import CreateNewCard from "../components/HomePage/CreateNewCard";
import { TitleSets } from "./edit";

export default function Home() {
  const [currTitle, setCurrTitle] = useState<string>("");
  const [titleSets, setTitleSets] = useState<TitleSets>([]);

  // update titlesets if a set is deleted
  useEffect(() => {
    if (titleSets) {
      localStorage.setItem("titleSets", JSON.stringify(titleSets));
    }
  }, [titleSets]);

  // get items from localstorage
  useEffect(() => {
    const titleSetsFromLocalStorage = localStorage.getItem("titleSets");
    if (titleSetsFromLocalStorage) {
      const tSets = JSON.parse(titleSetsFromLocalStorage);
      setTitleSets(tSets);
    } else {
      localStorage.setItem("titleSets", JSON.stringify([]));
    }

    localStorage.setItem("currTitle", "");
  }, []);

  return (
    <>
      <Head>
        <title>Flashcardo | Home</title>
      </Head>
      <div className="w-[100vw] my-5 mx-auto">
        <CreateNewCard
          titleSets={titleSets}
          setTitleSets={setTitleSets}
          currTitle={currTitle}
          setCurrTitle={setCurrTitle}
        />

        <PreviousCards
          titleSets={titleSets}
          setTitleSets={setTitleSets}
          setCurrTitle={setCurrTitle}
        />
      </div>
    </>
  );
}
