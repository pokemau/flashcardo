import { RefObject } from "react";
import { BiExport } from "react-icons/bi";

type ExportOptProps = {
  exportMsgRef: RefObject<HTMLDivElement>;
  title: string;
};

const ExportOpt: React.FC<ExportOptProps> = ({ title, exportMsgRef }) => {
  async function exportQuestions(title: string) {
    const questionsToExport = localStorage.getItem(title);

    try {
      if (questionsToExport) {
        await navigator.clipboard.writeText(questionsToExport);
        exportMsgRef.current?.classList.add("show-export-msg");
        setTimeout(() => {
          exportMsgRef.current?.classList.remove("show-export-msg");
        }, 800);
      }
    } catch (err) {
      alert("Failed to Export.");
    }
  }

  return (
    <>
      <button
        className="question-list-btn"
        type="button"
        onClick={() => {
          exportQuestions(title);
        }}
      >
        <BiExport />
      </button>
    </>
  );
};

export default ExportOpt;
