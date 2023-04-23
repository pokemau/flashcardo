import { BiExport } from "react-icons/bi";

type ExportOptProps = {
  title: string;
};

const ExportOpt: React.FC<ExportOptProps> = ({ title }) => {
  async function exportQuestions(title: string) {
    const questionsToExport = localStorage.getItem(title);

    try {
      if (questionsToExport) {
        await navigator.clipboard.writeText(questionsToExport);
      }
    } catch (err) {
      alert("Failed to Export.");
    }
  }

  return (
    <button
      className="question-list-btn"
      type="button"
      onClick={() => {
        exportQuestions(title);
      }}>
      <BiExport />
    </button>
  );
};

export default ExportOpt;
