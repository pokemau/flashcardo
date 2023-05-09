import Head from "next/head";

import { useState, useEffect } from "react";

// components
import PreviousCards from "../components/home/previous-cards/PreviousCards";
import CreateNewCard from "../components/home/create/CreateNewCard";
import JorashMode from "../components/jorash-mode/JorashMode";

const Home: React.FC = () => {
  const [currTitle, setCurrTitle] = useState<string>("");
  const [titleSets, setTitleSets] = useState<string[]>([]);

  // get items from localstorage
  useEffect(() => {
    const titleSetsLocalStorage = localStorage.getItem("titleSets");
    if (titleSetsLocalStorage) {
      setTitleSets(JSON.parse(titleSetsLocalStorage));
    } else localStorage.setItem("titleSets", JSON.stringify([]));

    localStorage.setItem("currTitle", "");
  }, []);

  return (
    <>
      <Head>
        <title>Flashcardo | Home</title>
      </Head>
      <div className="w-[100vw] my-5 mx-auto">
        <JorashMode />
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
};

export default Home;
