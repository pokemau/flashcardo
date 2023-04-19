import { useState } from "react";
import { QuestionsListType } from "../../pages/edit";

type ImportQuestionsProps = {
  title: string;
  questions: QuestionsListType[];
  titleSets: string[];
};

const ImportQuestions: React.FC<ImportQuestionsProps> = ({
  title,
  questions,
  titleSets,
}) => {
  const handleClickImport = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div>
      <button onClick={handleClickImport}>Import</button>
    </div>
  );
};

export default ImportQuestions;
