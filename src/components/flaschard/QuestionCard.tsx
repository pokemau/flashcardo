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
    <div
      className="relative w-[80vw] lg:w-[60vw] h-[40vh] mx-auto 
    mb-2 text-center">
      <div
        className="bg-transparent w-full h-full rounded mx-auto
      min-h-[10em] card">
        <div
          className={`card-inner relative w-full h-full text-center
        ${showAns ? "card-flip" : ""}`}>
          <div
            className="card-front absolute w-full h-full text-2xl 
          bg-orange-300">
            <p className="absolute text-base top-1 left-1 text-gray-600">
              Question
            </p>

            <p>{currQuestion}</p>
          </div>

          <div className="card-back w-full h-full text-2xl bold bg-green-300">
            <p className="absolute text-base top-1 left-1 text-gray-600">
              Answer
            </p>

            <p>{`${showAns ? currAns : ""}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
