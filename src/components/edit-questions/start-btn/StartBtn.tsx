import { MouseEvent, Dispatch, SetStateAction } from "react";
import { useRouter } from "next/router";

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
      className="min-w-[20vw] md:min-w-[8rem] cursor-pointer bg-primary-btn mx-1 
      py-1 px-2 text-lg rounded my-[5px] hover:bg-[#a77aaf] transition-all 
      duration-100 shadow-md"
      onClick={startFlashcard}
      type="button"
    >
      Start
    </button>
  );
};

export default StartBtn;
