import { useEffect, useState, Dispatch, SetStateAction } from "react";

import { QuestionsListType } from "../../../pages/edit";
import EditQuestion from "./EditQuestion";
import StartBtn from "../start-btn/StartBtn";
import QuesOpts from "../ques-list-opts/QuesOpts";

type QuestionsListProps = {
  questionsList: QuestionsListType[];
  setQuestionsList: Dispatch<SetStateAction<QuestionsListType[]>>;
  currTitle: string;
  titleSets: string[];
  setTitleSets: Dispatch<SetStateAction<string[]>>;
};

const QuestionsList: React.FC<QuestionsListProps> = ({
  questionsList,
  setQuestionsList,
  currTitle,
  titleSets,
  setTitleSets,
}) => {
  const [editIndex, setEditIndex] = useState(-1);
  const [hoverIndex, setHoverIndex] = useState(-1);

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

        <div
          className="w-[95%] mb-2 border-[1px] border-[#b3b3b3]
          min-h-[20vh] h-auto rounded lg:min-h-[30vh] lg:max-h-[75vh]
          overflow-auto">
          {questionsList &&
            questionsList.map((question, index) => (
              <div
                className="relative cursor-pointer border-b-[1px]
                border-[#b3b3b3]"
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(-1)}
                key={question.id}>
                {editIndex !== index ? (
                  <div
                    className="hover:bg-[#ebebeb] rounded px-2 
                    py-[.60rem] ">
                    <div className="break-words">
                      {index + 1}){" "}
                      <span className="font-bold">{question.ans}</span> -{" "}
                      {question.def}
                    </div>

                    {hoverIndex === index && (
                      <QuesOpts
                        index={index}
                        question={question}
                        questionsList={questionsList}
                        setEditIndex={setEditIndex}
                        setQuestionsList={setQuestionsList}
                      />
                    )}
                  </div>
                ) : (
                  <EditQuestion
                    question={question}
                    index={index}
                    setEditIndex={setEditIndex}
                    questionsList={questionsList}
                    setQuestionsList={setQuestionsList}
                  />
                )}
              </div>
            ))}
        </div>

        <StartBtn
          currTitle={currTitle}
          questionsList={questionsList}
          setTitleSets={setTitleSets}
          titleSets={titleSets}
        />
      </div>
    </div>
  );
};

export default QuestionsList;
