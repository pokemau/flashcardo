import { useEffect, Dispatch, SetStateAction } from "react";
import { Button } from "../ui/button/Button";

type ControlQuesBtnProps = {
  showAns: boolean;
  setShowAns: Dispatch<SetStateAction<boolean>>;
  currNum: number;
  setCurrNum: Dispatch<SetStateAction<number>>;
  questionsListLen: number;
};

const prevQuesTitle = "<";
const nextQuesTitle = ">";

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
    <div className="flex w-[50%] m-auto justify-center">
      <Button btnFunc={goToPrevQuestion} btnTitle={prevQuesTitle} />
      {/* <Button
        btnFunc={showAnswer}
        btnTitle={`${showAns ? "Hide" : "Show"} Answer`}
      /> */}
      <Button btnFunc={goToNextQuestion} btnTitle={nextQuesTitle} />
    </div>
  );
};

export default ControlQuestionsButtons;
