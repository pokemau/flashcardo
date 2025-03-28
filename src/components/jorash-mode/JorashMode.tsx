import React, { Dispatch, SetStateAction, useRef, useState } from "react";

import { QuestionsListType } from "../../pages/edit";
import InvalidMessage from "../ui/notification/invalid-msg/InvalidMessage";
import { UserInput } from "./UserInput";
import AddQuesBtn from "./AddQuesBtn";

const invalidFormatMsg = "Invalid format, check number of lines.";

export type JorashModeProps = {
  setQuestionsList: Dispatch<SetStateAction<QuestionsListType[]>>;
};

const JorashMode: React.FC<JorashModeProps> = ({ setQuestionsList }) => {
  const [userInput, setUserInput] = useState("");
  const JMref = useRef<HTMLTextAreaElement>(null);
  const [isValidInput, setIsValidInput] = useState(true);

  return (
    <div
      className="mt-4 lg:mt-5 w-[100%] flex flex-col items-center mb-4
      lg:w-[50%] lg:mx-auto transition-all"
    >
      <UserInput JMref={JMref} setUserInput={setUserInput} />

      {!isValidInput && <InvalidMessage msg={invalidFormatMsg} />}

      <AddQuesBtn
        JMref={JMref}
        setIsValidInput={setIsValidInput}
        setQuestionsList={setQuestionsList}
        setUserInput={setUserInput}
        userInput={userInput}
      />
    </div>
  );
};

export default JorashMode;
