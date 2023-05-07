import { Dispatch, SetStateAction } from "react";

type DefaultHomeButtonsProps = {
  createNewFlashcardSet: () => void;
  setIsImporting: Dispatch<SetStateAction<boolean>>;
};

const DefaultHomeButtons: React.FC<DefaultHomeButtonsProps> = ({
  createNewFlashcardSet,
  setIsImporting,
}) => {
  return (
    <div className="flex flex-col">
      <button onClick={() => createNewFlashcardSet()} className="normal-btn">
        Create New
      </button>
      <button onClick={() => setIsImporting(true)} className="normal-btn">
        ImportQuestions
      </button>
    </div>
  );
};

export default DefaultHomeButtons;
