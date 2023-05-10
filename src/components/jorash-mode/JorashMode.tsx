/*
  "Jorash Mode" is a special feature requested by my friend :D
*/

import React, {
  ChangeEvent,
  Dispatch,
  RefObject,
  SetStateAction,
  useRef,
  useState,
} from "react";
import { QuestionsListType } from "../../pages/edit";
import { generateUID } from "../../utils/generateUID";
import { Button } from "../../ui/button/Button";

export type JorashModeProps = {
  setQuestionsList: Dispatch<SetStateAction<QuestionsListType[]>>;
  questionsList: QuestionsListType[];
};

const JorashMode: React.FC<JorashModeProps> = ({
  setQuestionsList,
  questionsList,
}) => {
  const [userInput, setUserInput] = useState("");
  const JMref = useRef<HTMLTextAreaElement>(null);

  const handleKeyPress = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setUserInput(e.target.value);
  };

  const addQuestions = (textValues: string) => {
    if (textValues.length === 0) return;
    const entries = textValues.split("\n").filter((entry) => entry !== "");

    const isValidLen = Math.floor(entries.length % 2) !== 0;
    if (isValidLen) {
      return;
    }

    for (let i = 0; i < entries.length - 1; i += 2) {
      const ans = entries[i];
      const def = entries[i + 1];

      setQuestionsList((prev) => [
        ...prev,
        { id: generateUID(), def: def, ans: ans },
      ]);
    }

    setUserInput("");
    if (JMref.current) JMref.current.value = "";
  };

  const test = () => {
    console.log(questionsList);
  };
  return (
    <>
      <div
        className="mt-4 lg:mt-5 w-[100%] flex flex-col items-center mb-4
        lg:w-[50%] lg:mx-auto transition-all"
      >
        <textarea
          name="jorash-mode-textarea"
          placeholder="Write your question here..."
          className="h-full min-h-[15rem] resize-none w-[90%] mt-2
          border-[1px] border-[#b1b1b1] rounded text-xl p-2"
          onChange={(e) => handleKeyPress(e)}
          ref={JMref}
        ></textarea>

        <Button
          btnFunc={() => addQuestions(userInput)}
          btnTitle="Add Questions"
        />
      </div>
    </>
  );
};

export default JorashMode;
