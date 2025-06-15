'use client'

import CreateNewCard from "@/components/home/CreateNewCard";
import { questionsListAtom, titleSetsAtom } from "@/lib/atoms";
import { useSetAtom } from "jotai";
import { useEffect } from "react";

export default function Home() {
  const setTitleSets = useSetAtom(titleSetsAtom);
  const setQuestionsList = useSetAtom(questionsListAtom);

  useEffect(() => {
    const titleSetsLocalStorage = localStorage.getItem("titleSets");
    if (titleSetsLocalStorage) {
      setTitleSets(JSON.parse(titleSetsLocalStorage));
    } else localStorage.setItem("titleSets", JSON.stringify([]));

    setQuestionsList([]);

    localStorage.setItem("currTitle", "");
  }, []);

  return (
    <CreateNewCard />
  );
}
