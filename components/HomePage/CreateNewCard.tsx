import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useState } from "react";

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

  function createNewFlashcardSet() {
    const alreadyExists = titleSets.includes(currTitle);

    if (currTitle && !alreadyExists) {
      localStorage.setItem("currTitle", currTitle);
      router.push("/edit");
      setCurrTitle("");
    }
    if (!currTitle) {
      setTitleMsg("Title cannot be blank.");
      setTimeout(() => {
        setTitleMsg("");
      }, 800);
    } else if (currTitle && alreadyExists) {
      setTitleMsg("Title already exists, select a new one.");
      setTimeout(() => {
        setTitleMsg("");
      }, 800);
    }
  }

  function checkIfEnter(e: React.KeyboardEvent<HTMLInputElement>) {
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

        <button
          onClick={() => createNewFlashcardSet}
          className="cursor-pointer bg-[#b989c2] py-1 px-2 text-lg rounded my-[5px] hover:bg-[#a77aaf] transition-all duration-100">
          Create New
        </button>
      </div>
    </>
  );
};

export default CreateNewCard;
