import EditQuesOpt from "./ques-opt-buttons/EditQuesOpt";
import DeleteQuesOpt from "./ques-opt-buttons/DeleteQuesOpt";
import { QuestionsListType } from "../../../pages/edit";

import { Dispatch, SetStateAction } from "react";

type QuesOptsProps = {
  question: QuestionsListType;
  index: number;
  setEditIndex: Dispatch<SetStateAction<number>>;
  questionsList: QuestionsListType[];
  setQuestionsList: Dispatch<SetStateAction<QuestionsListType[]>>;
};

const QuesOpts: React.FC<QuesOptsProps> = ({
  question,
  index,
  setEditIndex,
  setQuestionsList,
  questionsList,
}) => {
  return (
    <div
      className="flex absolute right-2 top-1 z-10 border-[1px] 
		border-[#b1b1b1] rounded">
      <EditQuesOpt
        question={question}
        index={index}
        setEditIndex={setEditIndex}
      />
      <DeleteQuesOpt
        question={question}
        questionsList={questionsList}
        setQuestionsList={setQuestionsList}
      />
    </div>
  );
};

export default QuesOpts;
