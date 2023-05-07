import { Dispatch, SetStateAction } from "react";

import { Button } from "../../../ui/button/Button";

type DefaultHomeButtonsProps = {
  createNewFlashcardSet: () => void;
  setIsImporting: Dispatch<SetStateAction<boolean>>;
};

const createTitle = "Create New";
const importTitle = "Import Questions";

const DefaultHomeButtons: React.FC<DefaultHomeButtonsProps> = ({
  createNewFlashcardSet,
  setIsImporting,
}) => {
  return (
    <div className="flex flex-col">
      <Button btnFunc={createNewFlashcardSet} btnTitle={createTitle} />
      <Button btnFunc={() => setIsImporting(true)} btnTitle={importTitle} />
      {/* <button onClick={() => createNewFlashcardSet()} className="normal-btn">
        Create New
      </button>
      <button onClick={() => setIsImporting(true)} className="normal-btn">
        ImportQuestions
      </button> */}
    </div>
  );
};

export default DefaultHomeButtons;
