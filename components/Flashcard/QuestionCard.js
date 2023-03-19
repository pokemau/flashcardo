const QuestionCard = ({ showAns, currAns, currQuestion }) => {
  return (
    <div className="relative w-[80vw] h-[40vh] mx-auto mb-2 text-center ">
      <div
        className={`card absolute w-full h-full border-[1px] border-[#c9c9c9] rounded mx-auto min-h-[10em]flex break-words ${
          showAns ? "card-flip" : null
        }`}>
        <div className="front-card absolute w-full h-full text-2xl bg-orange-300">
          <div className="absolute text-base top-1 left-1 text-gray-600">
            Question
          </div>
          {currQuestion}
        </div>
        <div className="back-card absolute w-full h-full text-2xl bold bg-green-300">
          <div className="absolute text-base top-1 left-1 text-gray-600">
            Answer
          </div>
          {`${showAns ? currAns : ""}`}
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
