import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useState } from "react";
import EditOpt from "./previous-card-options/EditOpt";
import ExportOpt from "./previous-card-options/ExportOpt";
import DeleteOpt from "./previous-card-options/DeleteOpt";

type PrevCardsProps = {
  titleSets: string[];
  setTitleSets: Dispatch<SetStateAction<string[]>>;
  setCurrTitle: Dispatch<SetStateAction<string>>;
};

const PreviousCards: React.FC<PrevCardsProps> = ({
  titleSets,
  setTitleSets,
  setCurrTitle,
}) => {
  const router = useRouter();

  const [isHovered, setIsHovered] = useState(-1);

  function goToFlashcardSet(title: string) {
    console.log("black");
    setCurrTitle(title);
    localStorage.setItem("currTitle", title);
    router.push("/flashcard");
  }

  return (
    <>
      <div className="w-full mx-auto flex flex-col items-center">
        <h1 className="text-2xl font-bold mt-4 mb-2">Previous Flashcards</h1>
        {titleSets &&
          titleSets.map((title, index) => (
            <div
              className="relative flex items-center w-[65%] md:w-[50%] lg:w-[30%]
							min-h-[2.5rem] pr-1 rounded border-[1px] border-[#d4d4d4] mb-2 
							hover:border-[2px] cursor-pointer"
              key={title}
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(-1)}>
              <div
                className="flex pl-3 text-lg w-[70%]"
                onClick={() => {
                  goToFlashcardSet(title);
                }}>
                <p>{title}</p>
              </div>

              {isHovered == index && (
                <div
                  className="flex absolute right-1 top-[.15rem] z-10 border-[1px]
								border-[#b1b1b1] rounded">
                  <EditOpt title={title} />
                  <ExportOpt title={title} />
                  <DeleteOpt
                    index={index}
                    title={title}
                    setTitleSets={setTitleSets}
                    titleSets={titleSets}
                  />
                </div>
              )}
            </div>
          ))}
      </div>
    </>
  );
};

export default PreviousCards;
