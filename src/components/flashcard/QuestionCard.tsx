import { currentFlashcardsetAtom, currItemNumberAtom, showAnswerAtom } from "@/lib/atoms";
import { useAtom, useAtomValue } from "jotai";



const QuestionCard = () => {
  const [showAnswer, setShowAnswer] = useAtom(showAnswerAtom);
  const flashcardSet = useAtomValue(currentFlashcardsetAtom);
  const currItemNumber = useAtomValue(currItemNumberAtom);
  const currItem = flashcardSet[currItemNumber];

  return (
    <>
      {/* CARD */}
      <div
        onClick={() => setShowAnswer((prevShowAns) => !prevShowAns)}
        className="card bg-transparent
        m-auto relative w-[90vw] lg:w-[60vw]">
        {/* INNER */}
        <div
          className={`card-inner relative text-center ${showAnswer ? "card-flip" : ""
            } relative h-[65vh] md:h-[55vh] rounded-md text-lg lg:text-xl
          break-words`}>
          {/* FRONT */}
          <div
            className="card-front absolute bg-[#c9af3f] flex items-center
            justify-center rounded-md p-1">
            <p className="absolute text-base top-1 left-1 text-gray-600">
              Question
            </p>

            <p>{currItem?.question}</p>
          </div>

          {/* BACK */}
          <div
            className="card-back absolute bg-green-300 flex items-center
            justify-center rounded-md p-1">
            <p className="absolute text-base top-1 left-1 text-gray-600">
              Answer
            </p>

            <p>{`${showAnswer ? currItem?.answer : ""}`}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionCard;
