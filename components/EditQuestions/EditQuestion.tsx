import { QuestionsListType } from "../../pages/edit";
import { Dispatch, SetStateAction, useState } from "react";

import { AiOutlineCheck } from "react-icons/ai";

interface EditQuestionProps {
  question: QuestionsListType;
  index: number;
  setEditIndex: Dispatch<SetStateAction<number>>;
  questionsList: QuestionsListType[];
  setQuestionsList: Dispatch<SetStateAction<QuestionsListType[]>>;
}

const EditQuestion: React.FC<EditQuestionProps> = ({
  question,
  index,
  setEditIndex,
  questionsList,
  setQuestionsList,
}) => {
  const [newAnsVal, setNewAnsVal] = useState(question.ans);
  const [newDefVal, setNewDefVal] = useState(question.def);

  function handleFinishEditQuestion() {
    const updatedQuestionsList = [...questionsList];
    updatedQuestionsList[index] = {
      id: question.id,
      def: newDefVal,
      ans: newAnsVal,
    };

    setQuestionsList(updatedQuestionsList);

    setEditIndex(-1);
  }

  return (
    <div className="w-full h-full break-words p-1 hover:cursor-auto">
      <p className="pt-1">{index + 1})</p>
      <div className="flex flex-col w-full">
        <div className="">
          <p>Answer:</p>
          <div
            className="edit-form"
            role="textbox"
            contentEditable={true}
            suppressContentEditableWarning={true}
            onInput={(e) => setNewAnsVal(e.currentTarget.textContent || "")}>
            {question.ans}
          </div>
        </div>

        <p>Question:</p>
        <div
          className="edit-form"
          role="textbox"
          contentEditable={true}
          suppressContentEditableWarning={true}
          onInput={(e) => setNewDefVal(e.currentTarget.textContent || "")}>
          {question.def}
        </div>

        <div className="flex items-center justify-center">
          <button
            type="button"
            onClick={() => handleFinishEditQuestion()}
            className="mt-1 bg-[#b989c2] px-4 py-2 rounded hover:bg-[#a77aaf] font-bold">
            <AiOutlineCheck />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditQuestion;
