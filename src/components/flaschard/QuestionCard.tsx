type QuestionCardProps = {
  showAns: boolean;
  currAns: string;
  currQuestion: string;
};

const QuestionCard: React.FC<QuestionCardProps> = ({
  showAns,
  currAns,
  currQuestion,
}) => {
  return (
    <div className="relative w-[80vw] h-[40vh] mx-auto mb-2 text-center ">
      <div className="card w-full h-full lg:w-[70%] rounded mx-auto min-h-[10em]">
        <div className={`card-inner ${showAns ? "card-flip" : ""}`}>
          <div className="card-front absolute w-full h-full text-2xl bg-orange-300">
            <div className="absolute text-base top-1 left-1 text-gray-600">
              Question
            </div>
            {currQuestion}
          </div>

          <div className="card-back w-full h-full text-2xl bold bg-green-300">
            <div className="absolute text-base top-1 left-1 text-gray-600">
              Answer
            </div>
            {`${showAns ? currAns : ""}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
