import { BsFillTrashFill } from "react-icons/bs";
import { Dispatch, SetStateAction } from "react";

type DeleteOptProps = {
  title: string;
  index: number;
  titleSets: string[];
  setTitleSets: Dispatch<SetStateAction<string[]>>;
};

const DeleteOpt: React.FC<DeleteOptProps> = ({
  title,
  index,
  titleSets,
  setTitleSets,
}) => {
  function deleteFlashcardSet(title: string, index: number) {
    localStorage.removeItem(title);

    const newTitleSets = [...titleSets];
    newTitleSets.splice(index, 1);
    setTitleSets(newTitleSets);
    localStorage.setItem("titleSets", JSON.stringify(newTitleSets));
  }
  return (
    <button
      className="question-list-btn"
      type="button"
      onClick={() => {
        deleteFlashcardSet(title, index);
      }}>
      <BsFillTrashFill />
    </button>
  );
};

export default DeleteOpt;
