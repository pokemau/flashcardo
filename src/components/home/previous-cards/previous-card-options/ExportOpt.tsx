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
        className="cursor-pointer min-w-[2em] border-none transition-all duration-100 
    flex items-center justify-center bg-[#e4e4e4]/90 p-1 hover:bg-[#d8d8d8] 
    text-[1.3em]"
        type="button"
        onClick={() => {
          exportQuestions(title);
        }}>
        <BiExport />
      </button>
    </>
  );
};

export default ExportOpt;
