import { AiFillEdit } from "react-icons/ai";
import { Dispatch, SetStateAction } from "react";
import { QuestionsListType } from "../../../../pages/edit";
("");

type EditQuesOptProps = {
  setEditIndex: Dispatch<SetStateAction<number>>;
  question: QuestionsListType;
  index: number;
};

const EditQuesOpt: React.FC<EditQuesOptProps> = ({
  setEditIndex,
  question,
  index,
}) => {
  function editSelectedQuestion(question: QuestionsListType, index: number) {
    setEditIndex(index);
  }

  return (
    <button
      className="cursor-pointer min-w-[2em] border-none transition-all duration-100 
    flex items-center justify-center bg-[#e4e4e4]/90 p-1 hover:bg-[#d8d8d8] 
    text-[1.3em] rounded-tl rounded-bl"
      onClick={() => editSelectedQuestion(question, index)}>
      <AiFillEdit />
    </button>
  );
};

export default EditQuesOpt;
