import { useEffect, Dispatch, SetStateAction } from "react";

interface ControlQuesBtnProps {
  showAns: boolean;
  setShowAns: Dispatch<SetStateAction<boolean>>;
  currNum: number;
  setCurrNum: Dispatch<SetStateAction<number>>;
  questionsListLen: number;
}

const ControlQuestionsButtons: React.FC<ControlQuesBtnProps> = ({
  showAns,
  setShowAns,
  currNum,
  setCurrNum,
  questionsListLen,
}) => {
  useEffect(() => {
    window.addEventListener("keydown", keyboardPressHandler);

    return () => {
      window.removeEventListener("keydown", keyboardPressHandler);
    };
  });

  function keyboardPressHandler(e: KeyboardEvent) {
    const currKey = e.code;

    if (currKey === "ArrowRight" || currKey === "KeyD") goToNextQuestion();
    if (currKey === "ArrowLeft" || currKey === "KeyA") goToPrevQuestion();
    if (currKey === "Space") showAnswer();
  }

  function goToNextQuestion() {
    if (currNum + 1 < questionsListLen) {
      setCurrNum((prevNum) => prevNum + 1);
    } else setCurrNum(0);

    setShowAns(false);
  }

  function goToPrevQuestion() {
    if (currNum > 0) {
      setCurrNum((prevNum) => prevNum - 1);
    } else setCurrNum(questionsListLen - 1);

    setShowAns(false);
  }

  function showAnswer() {
    setShowAns((prevShowAns) => !prevShowAns);
  }

  return (
    <div className="flex justify-center">
      <button
        className="flashcard-btn px-11"
        type="button"
        onClick={() => goToPrevQuestion()}>
        Previous
      </button>

      <button
        className="flashcard-btn"
        type="button"
        onClick={() => showAnswer()}>{`${
        showAns ? "Hide" : "Show"
      } Answer`}</button>

      <button
        className="flashcard-btn px-11"
        type="button"
        onClick={() => goToNextQuestion()}>
        Next
      </button>
    </div>
  );
};

export default ControlQuestionsButtons;
