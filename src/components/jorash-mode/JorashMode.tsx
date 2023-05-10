import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useRef,
  useState,
} from "react";
import Image from "next/image";

import { AiOutlineQuestionCircle } from "react-icons/ai";
import tooltip from "../../../public/images/question-format-tooltip.jpg";

import { QuestionsListType } from "../../pages/edit";
import { generateUID } from "../../utils/generateUID";
import { Button } from "../../ui/button/Button";
import InvalidMessage from "../../ui/notification/invalid-msg/InvalidMessage";

const invalidFormatMsg = "Invalid format, check number of lines.";

export type JorashModeProps = {
  setQuestionsList: Dispatch<SetStateAction<QuestionsListType[]>>;
};

const JorashMode: React.FC<JorashModeProps> = ({ setQuestionsList }) => {
  const [userInput, setUserInput] = useState("");
  const JMref = useRef<HTMLTextAreaElement>(null);
  const [isValidInput, setIsValidInput] = useState(true);

  const handleKeyPress = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setUserInput(e.target.value);
  };

  const addQuestions = (textValues: string) => {
    if (textValues.length === 0) return;
    const entries = textValues.split("\n").filter((entry) => entry !== "");

    const isValidLen = Math.floor(entries.length % 2) !== 0;
    if (isValidLen) {
      setIsValidInput(false);
      setTimeout(() => {
        setIsValidInput(true);
      }, 1200);
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
        {!isValidInput && <InvalidMessage msg={invalidFormatMsg} />}

        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center gap-2 mt-2">
            <Button
              btnFunc={() => addQuestions(userInput)}
              btnTitle="Add Questions"
            />
            <div className="group relative inline-block">
              <AiOutlineQuestionCircle className="cursor-pointer text-[1.5rem]" />

              <div
                className="invisible group-hover:visible opacity-0 
                group-hover:opacity-100 transition-all absolute rounded
                top-[140%] right-[-220%] w-[8rem] z-10"
              >
                <Image
                  alt="question-format-tooltip"
                  src={tooltip}
                  className="rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JorashMode;
