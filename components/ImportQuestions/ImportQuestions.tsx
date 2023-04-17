import { QuestionsListType } from "../../pages/edit";

interface ImportQuestionsProps {
  title: string;
  questions: QuestionsListType[];
}

const ImportQuestions: React.FC<ImportQuestionsProps> = ({
  title,
  questions,
}) => {
  return (
    <div>
      <p>{title}</p>
    </div>
  );
};

export default ImportQuestions;
