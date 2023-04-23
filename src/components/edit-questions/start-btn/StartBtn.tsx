import { MouseEvent, Dispatch, SetStateAction } from "react";
import Router, { useRouter } from "next/router";

import { QuestionsListType } from "../../../pages/edit";

type StartBtnProps = {
  questionsList: QuestionsListType[];
  currTitle: string;
  titleSets: string[];
  setTitleSets: Dispatch<SetStateAction<string[]>>;
};

const StartBtn: React.FC<StartBtnProps> = ({
  questionsList,
  currTitle,
  titleSets,
  setTitleSets,
}) => {
  const router = useRouter();

  function startFlashcard(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    if (questionsList.length) {
      localStorage.setItem(currTitle, JSON.stringify(questionsList));
      if (!titleSets.includes(currTitle)) {
        setTitleSets([...titleSets, currTitle]);
      }
      router.push("/flashcard");
    }
  }
  return (
    <button
      className="cursor-pointer rounded px-4 py-1 bg-[#b989c2] 
          hover:bg-[#a77aaf] transition-all duration-100"
      onClick={startFlashcard}
      type="button">
      Start
    </button>
  );
};

export default StartBtn;
