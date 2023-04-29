import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useState } from "react";
import ImportQuestions from "../importing/ImportQuestionsField";
import CreateInput from "./CreateInput";
import DefaultHomeButtons from "./DefaultHomeBtns";
import ImportingBtns from "../importing/ImportingBtns";

type CreateNewCardProps = {
  titleSets: string[];
  setTitleSets: Dispatch<SetStateAction<string[]>>;
  currTitle: string;
  setCurrTitle: Dispatch<SetStateAction<string>>;
};

export const existsMsg = "Title already exists, select a new one.";
export const isBlankTitle = "Title cannot be blank.";

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
      setTitleMsg(existsMsg);
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
  }

  return (
    <div className="w-[100vw] flex flex-col items-center">
      <h1 className="text-2xl font-bold">
        {isImporting ? "Import Questions" : "Create New Flashcard"}
      </h1>

      <CreateInput
        setCurrTitle={setCurrTitle}
        currTitle={currTitle}
        createNewFlashcardSet={createNewFlashcardSet}
      />

      <div className="text-red-600">{titleMsg}</div>

      {!isImporting ? (
        <DefaultHomeButtons
          createNewFlashcardSet={createNewFlashcardSet}
          setIsImporting={setIsImporting}
        />
      ) : (
        <>
          <ImportingBtns
            currTitle={currTitle}
            importQuestions={importQuestions}
            setIsImporting={setIsImporting}
            setTitleMsg={setTitleMsg}
            setTitleSets={setTitleSets}
            titleSets={titleSets}
          />
          <ImportQuestions setImportQuestions={setImportQuestions} />
        </>
      )}
    </div>
  );
};

export default CreateNewCard;
