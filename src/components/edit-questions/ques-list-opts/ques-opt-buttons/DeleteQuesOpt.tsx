import { BsFillTrashFill } from "react-icons/bs";
import { MouseEvent, Dispatch, SetStateAction } from "react";
import { QuestionsListType } from "../../../../pages/edit";

type DeleteQuesOptProps = {
  setQuestionsList: Dispatch<SetStateAction<QuestionsListType[]>>;
  questionsList: QuestionsListType[];
  question: QuestionsListType;
};

const DeleteQuesOpt: React.FC<DeleteQuesOptProps> = ({
  setQuestionsList,
  questionsList,
  question,
}) => {
  function handleDeleteQuestions(
    e: MouseEvent<HTMLButtonElement>,
    question: QuestionsListType
  ) {
    e.preventDefault();

    setQuestionsList(
      questionsList.filter(
        (ques) =>
          (ques.def && ques.ans && ques.id) !==
          (question.def && question.ans && question.id)
      )
    );
  }
  return (
    <button
      className="cursor-pointer min-w-[2em] border-none transition-all duration-100 
    flex items-center justify-center bg-[#e4e4e4]/90 p-1 hover:bg-[#d8d8d8] 
    text-[1.3em] rounded-tr rounded-br"
      onClick={(e) => {
        handleDeleteQuestions(e, question);
      }}>
      <BsFillTrashFill />
    </button>
  );
};

export default DeleteQuesOpt;
