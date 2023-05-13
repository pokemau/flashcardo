import { Dispatch, SetStateAction, RefObject, ChangeEvent } from "react";

type UserInputProps = {
  JMref: RefObject<HTMLTextAreaElement>;
  setUserInput: Dispatch<SetStateAction<string>>;
};

export const UserInput: React.FC<UserInputProps> = ({
  setUserInput,
  JMref,
}) => {
  const handleKeyPress = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setUserInput(e.target.value);
  };
  return (
    <>
      <textarea
        name="jorash-mode-textarea"
        placeholder="Write your question here..."
        className="h-full min-h-[15rem] resize-none w-[90%] mt-2
          border-[1px] border-[#b1b1b1] rounded text-xl p-2"
        onChange={(e) => handleKeyPress(e)}
        ref={JMref}
      ></textarea>
    </>
  );
};
