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
  return (
    <div>
      <p>You are black</p>
    </div>
  );
};

export default ImportQuestions;