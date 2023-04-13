import { generateUID } from "../Utils/generateUID";
import { QuestionsListType } from "../../pages/edit";
import React from "react";

export interface InputFieldsProps {
  setQuestionsList: React.Dispatch<React.SetStateAction<QuestionsListType[]>>;
  questionsList: QuestionsListType[];
  inputAnsRef: React.RefObject<HTMLTextAreaElement>;
  inputDefRef: React.RefObject<HTMLTextAreaElement>;
}

const InputFields: React.FC<InputFieldsProps> = ({
  questionsList,
  setQuestionsList,
  inputAnsRef,
  inputDefRef,
}) => {
  function addNewQuestion() {
    const defRefVal = inputDefRef?.current?.value;
    const ansRefVal = inputAnsRef?.current?.value;

    if (defRefVal && ansRefVal) {
      setQuestionsList([
        ...questionsList,
        { id: generateUID(), def: defRefVal, ans: ansRefVal },
      ]);

      inputDefRef.current.value = "";
      inputAnsRef.current.value = "";

      inputDefRef?.current.focus();
    }
  }

  function checkIfEnterKeyIsPressed(
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ) {
    const defRefVal = inputDefRef?.current?.value;
    const ansRefVal = inputAnsRef?.current?.value;

    const isEnterKey = e.key === "Enter";

    if (defRefVal && ansRefVal && isEnterKey) {
      addNewQuestion();
    }
  }

  return (
    <>
      <div className="mt-4 lg:mt-5 w-[100%] flex flex-col items-center mb-4 lg:w-[50%] lg:mx-auto">
        <textarea
          name="ques-form"
          placeholder="Write your question here..."
          className="block h-full min-h-[10em] resize-none w-[90%] mt-2 border-[1px] border-[#b1b1b1] rounded text-xl p-2"
          ref={inputDefRef}
          onKeyDown={checkIfEnterKeyIsPressed}></textarea>

        <textarea
          name="ans-form"
          placeholder="Answer here..."
          className="resize-none w-[90%] border-[1px] border-[#b1b1b1] rounded mb-4 mt-2 p-2 text-xl"
          ref={inputAnsRef}
          onKeyDown={checkIfEnterKeyIsPressed}></textarea>

        <button
          className="py-1 px-2 rounded text-lg bg-[#b989c2] hover:bg-[#a77aaf] transition-all duration-100 "
          type="button"
          onClick={addNewQuestion}>
          Add Question
        </button>
      </div>
    </>
  );
};

export default InputFields;
