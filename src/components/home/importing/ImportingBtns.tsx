import { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/router";
import { QuestionsListType } from "../../../pages/edit";
import { existsMsg, isBlankTitle } from "../create/CreateNewCard";
import { Button } from "../../ui/button/Button";

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
const doneTitle = "Done";
const cancelTitle = "Cancel";

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
      <Button btnFunc={handleImportQuestions} btnTitle={doneTitle} />
      <Button btnFunc={() => setIsImporting(false)} btnTitle={cancelTitle} />
    </div>
  );
};

export default ImportingBtns;
