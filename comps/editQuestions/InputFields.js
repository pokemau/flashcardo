import { useState } from "react";

const InputFields = ({
  inputDefRef,
  inputAnsRef,
  questionsList,
  setQuestionsList,
}) => {
  // id tracker
  const [numCount, setNumCount] = useState(1);

  // add question
  function handleAddQues(e) {
    e.preventDefault();

    const d = inputDefRef.current.innerText;
    const a = inputAnsRef.current.innerText;

    if (d && a) {
      setQuestionsList([...questionsList, { id: numCount, def: d, ans: a }]);
      setNumCount(numCount + 1);

      inputDefRef.current.innerText = "";
      inputAnsRef.current.innerText = "";
    }
  }
  return (
    <>
      <div className="mt-4 lg:mt-5 w-[100%] flex flex-col items-center  mb-4 lg:w-[50%] lg:mx-auto">
        <div
          className="w-[90%] mt-2 min-h-[10em] border-[1px] border-[#b1b1b1] rounded text-xl p-2 empty-input"
          contentEditable="true"
          ref={inputDefRef}
          input-placeholder="Write your question here..."></div>
        <div
          className="empty-input w-[90%] border-[1px] border-[#b1b1b1] rounded mb-4 mt-2 p-2 text-xl"
          contentEditable="true"
          ref={inputAnsRef}
          input-placeholder="Answer here..."></div>
        <button
          className="py-1 px-2 rounded text-lg bg-[#b989c2] hover:bg-[#a77aaf] transition-all duration-100 "
          type="button"
          onClick={handleAddQues}>
          Add Question
        </button>
      </div>
    </>
  );
};

export default InputFields;
