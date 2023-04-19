import { useRouter } from "next/router";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { Dispatch, SetStateAction, useState } from "react";

interface PrevCardsProps {
  titleSets: string[];
  setTitleSets: Dispatch<SetStateAction<string[]>>;
  setCurrTitle: Dispatch<SetStateAction<string>>;
}

const PreviousCards: React.FC<PrevCardsProps> = ({
  titleSets,
  setTitleSets,
  setCurrTitle,
}) => {
  const router = useRouter();

  const [isHovered, setIsHovered] = useState(-1);

  function goToFlashcardSet(title: string) {
    setCurrTitle(title);
    localStorage.setItem("currTitle", title);
    router.push("/flashcard");
  }

  function deleteFlashcardSet(title: string, index: number) {
    localStorage.removeItem(title);

    const newTitleSets = [...titleSets];
    newTitleSets.splice(index, 1);
    setTitleSets(newTitleSets);
    localStorage.setItem("titleSets", JSON.stringify(newTitleSets));
  }

  function editFlashcardSet(title: string) {
    localStorage.setItem("currTitle", title);

    router.push("/edit");
  }

  return (
    <>
      <div className="w-full mx-auto flex flex-col items-center">
        <h1 className="text-2xl font-bold mt-4 mb-2">Previous Flashcards</h1>
        {titleSets &&
          titleSets.map((title, index) => (
            <div
              className="relative flex items-center w-[70%] min-h-[2.5rem] pr-1 rounded border-[1px] border-[#d4d4d4] mb-2 lg:w-[30vw] hover:border-[2px] cursor-pointer"
              key={title}
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(-1)}>
              <div
                className="pl-3 text-lg"
                onClick={() => {
                  goToFlashcardSet(title);
                }}>
                <p>{title}</p>
              </div>

              {isHovered == index && (
                <div className="flex absolute right-1 top-[.15rem] z-10 border-[1px] border-[#b1b1b1] rounded">
                  {/* <button
                    className="question-list-btn"
                    type="button"
                    onClick={() => editFlashcardSet(title)}>
                    <AiFillEdit />
                  </button> */}

                  <button
                    className="question-list-btn"
                    type="button"
                    onClick={() => {
                      deleteFlashcardSet(title, index);
                    }}>
                    <BsFillTrashFill />
                  </button>
                </div>
              )}
            </div>
          ))}
      </div>
    </>
  );
};

export default PreviousCards;
