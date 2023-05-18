import { Dispatch, SetStateAction, RefObject } from "react";
import Image from "next/image";

import { AiOutlineQuestionCircle } from "react-icons/ai";
import tooltip from "../../../public/images/question-format-tooltip.jpg";

import { QuestionsListType } from "../../pages/edit";
import { Button } from "../../ui/button/Button";
import { generateUID } from "../../utils/generateUID";

type AddQuesBtnProps = {
  setIsValidInput: Dispatch<SetStateAction<boolean>>;
  setQuestionsList: Dispatch<SetStateAction<QuestionsListType[]>>;
  userInput: string;
  setUserInput: Dispatch<SetStateAction<string>>;
  JMref: RefObject<HTMLTextAreaElement>;
};

const AddQuesBtn: React.FC<AddQuesBtnProps> = ({
  setIsValidInput,
  setQuestionsList,
  userInput,
  setUserInput,
  JMref,
}) => {
  const addQuestions = (textValues: string) => {
    if (textValues.length === 0) return;
    const entries = textValues
      .split("\n")
      .filter((entry) => entry.trim() !== "");

    const isValidLen = Math.floor(entries.length % 2) !== 0;
    if (isValidLen) {
      setIsValidInput(false);
      setTimeout(() => {
        setIsValidInput(true);
      }, 1200);
      return;
    }

    for (let i = 0; i < entries.length - 1; i += 2) {
      const ans = entries[i + 1];
      const def = entries[i];

      setQuestionsList((prev) => [
        ...prev,
        { id: generateUID(), def: def, ans: ans },
      ]);
    }

    setUserInput("");
    if (JMref.current) JMref.current.value = "";
  };
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center ">
        <Button
          btnFunc={() => addQuestions(userInput)}
          btnTitle="Add Questions"
        />
        <div className="group relative inline-block">
          <AiOutlineQuestionCircle
            className="cursor-pointer text-[1.5rem]
              text-[#797979] font-[300]"
          />

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
  );
};

export default AddQuesBtn;
