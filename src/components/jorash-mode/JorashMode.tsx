import { ChangeEvent, useRef, useState } from "react";
import { QuestionsListType } from "../../pages/edit";
import { generateUID } from "../../utils/generateUID";

const JorashMode = () => {
  const [userInput, setUserInput] = useState("");
  const [questionsList, setQuestionsList] = useState<QuestionsListType[]>([]);
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

    let i = 0;
    while (i < entries.length - 1) {
      const ans = entries[i];
      const def = entries[i + 1];

      setQuestionsList((prev) => [
        ...prev,
        { id: generateUID(), def: def, ans: ans },
      ]);

      i += 2;
    }

    setUserInput("");
    if (JMref.current) JMref.current.value = "";
  };

  const test = () => {
    console.log(questionsList);
  };
  return (
    <>
      <div>
        <button onClick={test}>SHOW QUESTIONS</button>
        <textarea
          name="jorash-mode-textarea"
          placeholder="Write your question here..."
          className="h-full min-h-[15rem] resize-none w-[90%] mt-2
          border-[1px] border-[#b1b1b1] rounded text-xl p-2"
          onChange={(e) => handleKeyPress(e)}
          ref={JMref}
        ></textarea>

        <button onClick={() => addQuestions(userInput)}>Add Questions</button>
      </div>
    </>
  );
};

export default JorashMode;
