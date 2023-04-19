import { useRouter } from "next/router";
import { useEffect, useState, Dispatch, SetStateAction } from "react";
import EditQuestion from "./EditQuestion";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { QuestionsListType } from "../../pages/edit";

interface QuestionsListProps {
  questionsList: QuestionsListType[];
  setQuestionsList: Dispatch<SetStateAction<QuestionsListType[]>>;
  currTitle: string;
  titleSets: string[];
  setTitleSets: Dispatch<SetStateAction<string[]>>;
}

const QuestionsList: React.FC<QuestionsListProps> = ({
  questionsList,
  setQuestionsList,
  currTitle,
  titleSets,
  setTitleSets,
}) => {
  const router = useRouter();

  const [editIndex, setEditIndex] = useState(-1);
  const [hoverIndex, setHoverIndex] = useState(-1);

  function startFlashcard(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    if (questionsList.length) {
      localStorage.setItem(currTitle, JSON.stringify(questionsList));
      setTitleSets([...titleSets, currTitle]);
      router.push("/flashcard");
    }
  }

  function handleDeleteQuestions(
    e: React.MouseEvent<HTMLButtonElement>,
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

  function editSelectedQuestion(question: QuestionsListType, index: number) {
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
                      questionsList={questionsList}
                      setQuestionsList={setQuestionsList}
                    />
                  </>
                )}
              </div>
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
