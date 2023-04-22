import { Dispatch, SetStateAction } from "react";

type CreateInputProps = {
  currTitle: string;
  setCurrTitle: Dispatch<SetStateAction<string>>;
  createNewFlashcardSet: () => void;
};

const CreateInput: React.FC<CreateInputProps> = ({
  currTitle,
  setCurrTitle,
  createNewFlashcardSet,
}) => {
  function checkIfEnter(e: React.KeyboardEvent<HTMLInputElement>): void {
    if (e.code === "Enter") {
      createNewFlashcardSet();
    }
  }
  return (
    <input
      className="flex h-8 w-[65%] m-2 border-[1px] border-[#a8a8a8] md:w-[50%] lg:w-[30%] p-2 focus:outline-none"
      value={currTitle}
      type="text"
      onChange={(e) => {
        setCurrTitle(e.target.value);
      }}
      onKeyDown={checkIfEnter}
    />
  );
};

export default CreateInput;
