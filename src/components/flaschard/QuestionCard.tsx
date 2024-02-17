import { Dispatch, SetStateAction } from "react";

type QuestionCardProps = {
  showAns: boolean;
  setShowAns: Dispatch<SetStateAction<boolean>>;
  currAns: string;
  currQuestion: string;
};

const QuestionCard: React.FC<QuestionCardProps> = ({
  showAns,
  setShowAns,
  currAns,
  currQuestion,
}) => {
  return (
    <>
      {/* CARD */}
      <div
        onClick={() => setShowAns((prevShowAns) => !prevShowAns)}
        className="card bg-transparent
        m-auto relative w-[90vw] lg:w-[60vw]">
        {/* INNER */}
        <div
          className={`card-inner relative text-center ${
            showAns ? "card-flip" : ""
          } relative h-[65vh] md:h-[55vh] rounded-md text-sm lg:text-xl
          break-words`}>
          {/* FRONT */}
          <div
            className="card-front absolute bg-[#c9af3f] flex items-center
            justify-center rounded-md p-1">
            <p className="absolute text-base top-1 left-1 text-gray-600">
              Question
            </p>

            <p>{currQuestion}</p>
          </div>

          {/* BACK */}
          <div
            className="card-back absolute bg-green-300 flex items-center
            justify-center rounded-md p-1">
            <p className="absolute text-base top-1 left-1 text-gray-600">
              Answer
            </p>

            <p>{`${showAns ? currAns : ""}`}</p>
          </div>
        </div>
      </div>

      {/* <div
        className="relative w-[80vw] lg:w-[60vw] bg-red-200 h-[40vh] mx-auto 
        mb-2 text-center">
        <div
          className="bg-green-600 w-full h-full rounded mx-auto
          min-h-[10em] card">
          <div
            className={`card-inner relative w-full h-full text-center
        ${showAns ? "card-flip" : ""}`}>
            <div
              className="card-front absolute w-full h-[40vh] text-2xl 
            bg-[#c9af3f]">
              <p className="absolute text-base top-1 left-1 text-gray-600">
                Question
              </p>

              <p className="break-all">{currQuestion}</p>
            </div>

            <div className="card-back w-full h-full text-2xl bold bg-green-300">
              <p className="absolute text-base top-1 left-1 text-gray-600">
                Answer
              </p>

              <p>{`${showAns ? currAns : ""}`}</p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default QuestionCard;
