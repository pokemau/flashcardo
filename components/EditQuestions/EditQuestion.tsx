import { QuestionsListType } from "../../pages/edit";
import { Dispatch, SetStateAction } from "react";

interface EditQuestionProps {
  question: QuestionsListType;
  index: number;
  setEditIndex: Dispatch<SetStateAction<number>>;
}

const EditQuestion: React.FC<EditQuestionProps> = ({
  question,
  index,
  setEditIndex,
}) => {
  return (
    <div className=" w-full flex items-center h-full break-words">
      <p>{index + 1})</p>
      <div className="flex flex-col w-full gap-2">
        <div
          className="edit-form"
          role="textbox"
          contentEditable={true}
          suppressContentEditableWarning={true}>
          {question.ans}
        </div>

        <div
          className="edit-form"
          role="textbox"
          contentEditable={true}
          suppressContentEditableWarning={true}>
          {question.def}
        </div>

        <button type="button" onClick={() => setEditIndex(-1)}>
          Check
        </button>
      </div>
    </div>
  );
};

export default EditQuestion;
