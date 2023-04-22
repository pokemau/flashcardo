import { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/router";
import { QuestionsListType } from "../../pages/edit";
import { existsMsg, isBlankTitle } from "./CreateNewCard";

type ImportingBtnsProps = {
  setIsImporting: Dispatch<SetStateAction<boolean>>;
  titleSets: string[];
  currTitle: string;
  importQuestions: string;
  setTitleMsg: Dispatch<SetStateAction<string>>;
  setTitleSets: Dispatch<SetStateAction<string[]>>;
};

const invalidQuesFormat = "Invalid question format.";
const quesIsBlank = "Questions cannot be blank.";

const ImportingBtns: React.FC<ImportingBtnsProps> = ({
  setIsImporting,
  titleSets,
  currTitle,
  importQuestions,
  setTitleMsg,
  setTitleSets,
}) => {
  const router = useRouter();

  function checkIfValidQuestionFormat(str: string): 0 | QuestionsListType[] {
    try {
      const importQuestionsJSON = JSON.parse(str);
      if (
        !Array.isArray(importQuestionsJSON) &&
        importQuestionsJSON.every(
          (item: QuestionsListType) =>
            typeof item.id === "string" &&
            typeof item.def === "string" &&
            typeof item.ans === "string"
        )
      ) {
        return 0;
      }
    } catch {
      return 0;
    }
    return JSON.parse(str);
  }

  function handleImportQuestions(): void {
    const alreadyExists = titleSets.includes(currTitle);

    if (currTitle && !alreadyExists && importQuestions) {
      const validQuestions = checkIfValidQuestionFormat(importQuestions);
      if (!validQuestions) {
        setTitleMsg(invalidQuesFormat);
        setTimeout(() => {
          setTitleMsg("");
        }, 800);
        return;
      }

      localStorage.setItem("currTitle", currTitle);
      const updatedTitleSets = [...titleSets, currTitle];
      setTitleSets(updatedTitleSets);
      localStorage.setItem("titleSets", JSON.stringify(updatedTitleSets));
      localStorage.setItem(currTitle, importQuestions);
      router.push("/flashcard");
    }

    if (!importQuestions) {
      setTitleMsg(quesIsBlank);
      setTimeout(() => {
        setTitleMsg("");
      }, 800);
    }

    if (!currTitle) {
      setTitleMsg(isBlankTitle);
      setTimeout(() => {
        setTitleMsg("");
      }, 800);
    }

    if (alreadyExists) {
      setTitleMsg(existsMsg);
      setTimeout(() => {
        setTitleMsg("");
      }, 800);
    }
  }
  return (
    <div className="flex mb-2">
      <button onClick={() => handleImportQuestions()} className="home-btn">
        Done
      </button>
      <button onClick={() => setIsImporting(false)} className="home-btn">
        Cancel
      </button>
    </div>
  );
};

export default ImportingBtns;
