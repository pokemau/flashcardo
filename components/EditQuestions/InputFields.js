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

    const d = inputDefRef.current.value;
    const a = inputAnsRef.current.value;

    if (d && a) {
      setQuestionsList([...questionsList, { id: numCount, def: d, ans: a }]);
      setNumCount(numCount + 1);

      inputDefRef.current.value = "";
      inputAnsRef.current.value = "";

      inputDefRef.current.focus();
    }
  }

  const checkEnter = (e) => {
    const d = inputDefRef.current.value;
    const a = inputAnsRef.current.value;

    if (d && a && e.key === "Enter") {
      handleAddQues(e);
    }
  };

  return (
    <>
      <div className="mt-4 lg:mt-5 w-[100%] flex flex-col items-center  mb-4 lg:w-[50%] lg:mx-auto">
        <textarea
          name="ques-form"
          placeholder="Write your question here..."
          className="block h-full min-h-[10em] resize-none w-[90%] mt-2 border-[1px] border-[#b1b1b1] rounded text-xl p-2"
          ref={inputDefRef}
          onKeyDown={checkEnter}></textarea>

        <textarea
          name="ans-form"
          placeholder="Answer here..."
          className="resize-none w-[90%] border-[1px] border-[#b1b1b1] rounded mb-4 mt-2 p-2 text-xl"
          ref={inputAnsRef}
          onKeyDown={checkEnter}></textarea>

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
