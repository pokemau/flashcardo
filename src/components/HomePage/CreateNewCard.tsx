import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useState } from "react";
import ImportQuestions from "./ImportQuestions";
import { QuestionsListType } from "../../pages/edit";

interface CreateNewCardProps {
  titleSets: string[];
  setTitleSets: Dispatch<SetStateAction<string[]>>;
  currTitle: string;
  setCurrTitle: Dispatch<SetStateAction<string>>;
}

const CreateNewCard: React.FC<CreateNewCardProps> = ({
  titleSets,
  setTitleSets,
  currTitle,
  setCurrTitle,
}) => {
  const router = useRouter();

  const [titleMsg, setTitleMsg] = useState("");

  const [isImporting, setIsImporting] = useState(false);
  const [importQuestions, setImportQuestions] = useState("");

  function createNewFlashcardSet(): void {
    const alreadyExists = titleSets.includes(currTitle);
    if (currTitle && !alreadyExists) {
      localStorage.setItem("currTitle", currTitle);
      router.push("/edit");
      setCurrTitle("");
    }
    if (alreadyExists) {
      setTitleMsg("Title already exists, select a new one.");
      setTimeout(() => {
        setTitleMsg("");
      }, 800);
    }
    if (!currTitle) {
      setTitleMsg("Title cannot be blank.");
      setTimeout(() => {
        setTitleMsg("");
      }, 800);
    }
  }

  function handleImportQuestions(): void {
    const alreadyExists = titleSets.includes(currTitle);

    if (currTitle && !alreadyExists && importQuestions) {
      const validQuestions = checkIfValidQuestionFormat(importQuestions);
      if (!validQuestions) {
        setTitleMsg("Invalid question format.");
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
      setTitleMsg("Questions cannot be blank.");
      setTimeout(() => {
        setTitleMsg("");
      }, 800);
    }

    if (!currTitle) {
      setTitleMsg("Title cannot be blank.");
      setTimeout(() => {
        setTitleMsg("");
      }, 800);
    }

    if (alreadyExists) {
      setTitleMsg("Title already exists, select a new one.");
      setTimeout(() => {
        setTitleMsg("");
      }, 800);
    }
  }

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

  function checkIfEnter(e: React.KeyboardEvent<HTMLInputElement>): void {
    if (e.code === "Enter") {
      createNewFlashcardSet();
    }
  }

  return (
    <>
      <div className="w-[100vw] flex flex-col items-center">
        <h1 className="text-2xl font-bold">Create New Flashcard</h1>

        <input
          className="flex h-8 w-[65%] m-2 border-[1px] border-[#a8a8a8] md:w-[50%] lg:w-[30%] p-2 focus:outline-none"
          value={currTitle}
          type="text"
          onChange={(e) => {
            setCurrTitle(e.target.value);
          }}
          onKeyDown={checkIfEnter}
        />

        <div className="text-red-600">{titleMsg}</div>

        {!isImporting ? (
          <div className="flex">
            <button
              onClick={() => createNewFlashcardSet()}
              className="home-btn">
              Create New
            </button>
            <button onClick={() => setIsImporting(true)} className="home-btn">
              ImportQuestions
            </button>
          </div>
        ) : (
          <div>
            <div className="flex">
              <button
                onClick={() => handleImportQuestions()}
                className="home-btn">
                Done
              </button>
              <button
                onClick={() => setIsImporting(false)}
                className="home-btn">
                Cancel
              </button>
            </div>
            <ImportQuestions setImportQuestions={setImportQuestions} />
          </div>
        )}
      </div>
    </>
  );
};

export default CreateNewCard;
