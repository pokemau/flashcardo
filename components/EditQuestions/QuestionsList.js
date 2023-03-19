import { useRouter } from "next/router";
import { useEffect } from "react";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

const QuestionsList = ({
  questionsList,
  setQuestionsList,
  currTitle,
  titleSets,
  setTitleSets,
}) => {
  const router = useRouter();

  // toggle <bool> if current question is being edited
  const { value: isEditable, toggleValue: toggleEditable } = useToggle();

  // start flashcard
  function startFlashcard(e) {
    e.preventDefault();

    if (questionsList.length > 0) {
      localStorage.setItem(currTitle, JSON.stringify(questionsList));
      setTitleSets([...titleSets, currTitle]);
      router.push("/flashcard");
    }
  }

  // delete questions
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

  // set title sets on local storage
  useEffect(() => {
    if (titleSets.length) {
      localStorage.setItem("titleSets", JSON.stringify(titleSets));
    }
  }, [titleSets]);

  return (
    <>
      <div className="text-center lg:w-[50%] lg:mx-auto">
        <div>
          <h1 className="text-2xl font-bold ">Questions</h1>

          <div className="w-[90%] mx-auto mb-2 border-[1px] border-[#b3b3b3] min-h-[20vh] rounded p-2 lg:min-h-[30vh] lg:max-h-[75vh] overflow-auto">
            {questionsList &&
              questionsList.map((question, index) => (
                <div
                  className="flex text-start items-center min-h-[2em] mb-[0.2em] border-b-[1px] border-[#b3b3b3]"
                  key={index}>
                  <p>
                    {index + 1}) {question.ans} - {question.def}
                  </p>

                  <div className="flex ml-auto">
                    {/* <button
                      className="question-list-btn"
                      onClick={toggleEditable}>
                      <AiFillEdit />
                    </button> */}

                    <button
                      className="question-list-btn"
                      onClick={() => {
                        handleDeleteQuestions(e, question);
                      }}>
                      <BsFillTrashFill />
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <button
          className="cursor-pointer rounded px-4 py-1 bg-[#b989c2] hover:bg-[#a77aaf] transition-all duration-100"
          onClick={startFlashcard}
          type="button">
          Start
        </button>
      </div>
    </>
  );
};

export default QuestionsList;
