import styles from "../../styles/Edit.module.css";

import Image from "next/image";
import { useRouter } from "next/router";

const QuestionsList = ({
  questionsList,
  setQuestionsList,
  currTitle,
  titleSets,
  setTitleSets,
}) => {
  const router = useRouter();
  // start flashcard
  function handleStart(e) {
    e.preventDefault();

    if (questionsList.length > 0) {
      localStorage.setItem(currTitle, JSON.stringify(questionsList));
      setTitleSets([...titleSets, currTitle]);
      router.push("/flashcard");
    }
  }

  // delete questions
  function handleDelQues(event, question) {
    event.preventDefault();
    setQuestionsList(
      questionsList.filter(
        (ques) =>
          (ques.def && ques.ans && ques.id) !==
          (question.def && question.ans && question.id)
      )
    );
  }
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
                  <button
                    className="ml-auto cursor-pointer min-w-[2.5em] border-none transition-all duration-100 rounded flex items-center justify-center bg-[#e4e4e4] p-1 hover:bg-[#d8d8d8]"
                    onClick={() => {
                      handleDelQues(event, question);
                    }}>
                    <Image
                      src="/assets/trash.png"
                      width={20}
                      height={20}
                      alt="trash icon"
                    />
                  </button>
                </div>
              ))}
          </div>
        </div>
        <button
          className="cursor-pointer rounded px-4 py-1 bg-[#b989c2] hover:bg-[#a77aaf] transition-all duration-100"
          onClick={handleStart}
          type="button">
          Start
        </button>
      </div>
    </>
  );
};

export default QuestionsList;
