import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import EditQuestion from "./EditQuestion";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

const QuestionsList = ({
  questionsList,
  setQuestionsList,
  currTitle,
  titleSets,
  setTitleSets,
  inputDefRef,
  inputAnsRef,
}) => {
  const router = useRouter();

  const [editIndex, setEditIndex] = useState(-1);
  const [hoverIndex, setHoverIndex] = useState(-1);

  function startFlashcard(e) {
    e.preventDefault();

    if (questionsList.length) {
      localStorage.setItem(currTitle, JSON.stringify(questionsList));
      setTitleSets([...titleSets, currTitle]);
      router.push("/flashcard");
    }
  }

  function handleDeleteQuestions(e, question) {
    e.preventDefault();

    setQuestionsList(
      questionsList.filter(
        (ques) =>
          (ques.def && ques.ans && ques.id) !==
          (question.def && question.ans && question.id)
      )
    );
  }

  function editSelectedQuestion(question, index) {
    setEditIndex(index);
  }

  // set title sets on local storage
  useEffect(() => {
    if (titleSets.length) {
      localStorage.setItem("titleSets", JSON.stringify(titleSets));
    }
  }, [titleSets]);

  return (
    <div className="w-full lg:w-[50%]">
      <div className="flex items-center flex-col">
        <h1 className="text-2xl font-bold">Questions</h1>

        <div className="w-[95%] mb-2 border-[1px] border-[#b3b3b3] min-h-[20vh] h-auto rounded lg:min-h-[30vh] lg:max-h-[75vh] overflow-auto">
          {questionsList &&
            questionsList.map((question, index) => (
              <div
                className="relative cursor-pointer border-b-[1px] border-[#b3b3b3] "
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(-1)}
                key={question.id}>
                {editIndex !== index ? (
                  <div className="hover:bg-[#ebebeb] rounded px-2 py-[.60rem] ">
                    <div className="break-words">
                      {index + 1}){" "}
                      <span className="font-bold">{question.ans}</span> -{" "}
                      {question.def}
                    </div>

                    {hoverIndex === index && (
                      <div className="flex absolute right-2 top-1 z-10 border-[1px] border-[#b1b1b1] rounded">
                        <button
                          className="question-list-btn rounded-tl rounded-bl"
                          onClick={() => editSelectedQuestion(question, index)}>
                          <AiFillEdit />
                        </button>

                        <button
                          className="question-list-btn rounded-tr rounded-br"
                          onClick={(e) => {
                            handleDeleteQuestions(e, question);
                          }}>
                          <BsFillTrashFill />
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    <EditQuestion
                      question={question}
                      index={index}
                      setEditIndex={setEditIndex}
                    />
                  </>
                )}
              </div>
              // <div
              //   className="flex items-center h-auto mb-[0.2em] border-b-[1px] border-[#b3b3b3] w-full"
              //   key={question.id}>
              //   {editIndex !== index ? (
              //     <>
              //       <div className="bg-orange-300 w-[80%] flex items-center">
              //         <div className="break-words">
              //           {index + 1}) {question.ans} - {question.def}
              //         </div>
              //       </div>
              //       <div className="flex ml-auto">
              //         <button
              //           className="question-list-btn"
              //           onClick={() => editSelectedQuestion(question, index)}>
              //           <AiFillEdit />
              //         </button>

              //         <button
              //           className="question-list-btn"
              //           onClick={(e) => {
              //             handleDeleteQuestions(e, question);
              //           }}>
              //           <BsFillTrashFill />
              //         </button>
              //       </div>
              //     </>
              //   ) : (
              //     <EditQuestion question={question} index={index} />
              //   )}
              // </div>
            ))}
        </div>

        <button
          className="cursor-pointer rounded px-4 py-1 bg-[#b989c2] hover:bg-[#a77aaf] transition-all duration-100"
          onClick={startFlashcard}
          type="button">
          Start
        </button>
      </div>
    </div>
  );
};

export default QuestionsList;
