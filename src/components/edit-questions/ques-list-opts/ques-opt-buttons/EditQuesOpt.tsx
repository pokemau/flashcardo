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
      className="question-list-btn rounded-tl rounded-bl"
      onClick={() => editSelectedQuestion(question, index)}>
      <AiFillEdit />
    </button>
  );
};

export default EditQuesOpt;
