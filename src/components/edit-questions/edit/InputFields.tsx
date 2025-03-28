import { generateUID } from "../../../utils/generateUID";
import { QuestionsListType } from "../../../pages/edit";
import { SetStateAction, Dispatch, RefObject, KeyboardEvent } from "react";
import { Button } from "../../ui/button/Button";

export type InputFieldsProps = {
  setQuestionsList: Dispatch<SetStateAction<QuestionsListType[]>>;
  questionsList: QuestionsListType[];
  inputAnsRef: RefObject<HTMLTextAreaElement>;
  inputDefRef: RefObject<HTMLTextAreaElement>;
};

const addQuesTitle = "Add Question";

const InputFields: React.FC<InputFieldsProps> = ({
  questionsList,
  setQuestionsList,
  inputAnsRef,
  inputDefRef,
}) => {
  function addNewQuestion() {
    const ansRefVal = inputAnsRef.current?.value.trim();
    const defRefVal = inputDefRef.current?.value.trim();

    if (defRefVal && ansRefVal) {
      setQuestionsList([
        ...questionsList,
        { id: generateUID(), def: defRefVal, ans: ansRefVal },
      ]);

      if (inputAnsRef.current) inputAnsRef.current.value = "";
      if (inputDefRef.current) inputDefRef.current.value = "";

      inputDefRef?.current?.focus();
    }
  }

  function checkIfEnterKeyIsPressed(e: KeyboardEvent<HTMLTextAreaElement>) {
    const defRefVal = inputDefRef.current?.value;
    const ansRefVal = inputAnsRef.current?.value;

    const isEnterKey = e.key === "Enter";

    if (defRefVal && ansRefVal && isEnterKey) {
      addNewQuestion();
    }
  }

  return (
    <>
      <div
        className="mt-4 lg:mt-5 w-[100%] flex flex-col items-center mb-4
        lg:w-[50%] lg:mx-auto transition-all"
      >
        <textarea
          name="ques-form"
          placeholder="Write your question here..."
          className="h-full min-h-[15rem] resize-none w-[90%] mt-2
          border-[1px] border-[#b1b1b1] rounded text-xl p-2"
          ref={inputDefRef}
          onKeyDown={checkIfEnterKeyIsPressed}
        ></textarea>

        <textarea
          name="ans-form"
          placeholder="Answer here..."
          className="resize-none w-[90%] border-[1px] border-[#b1b1b1]
          rounded mb-4 mt-2 p-2 text-xl"
          ref={inputAnsRef}
          onKeyDown={checkIfEnterKeyIsPressed}
        ></textarea>

        <Button btnFunc={addNewQuestion} btnTitle={addQuesTitle} />
      </div>
    </>
  );
};

export default InputFields;
