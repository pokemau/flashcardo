import { AiFillCopy } from "react-icons/ai";

const CopyQuestionsOpt: React.FC = () => {
  function copyQuestions() {
    // TODO::PROCESS QUESTIONS
  }

  return (
    <button
      className="cursor-pointer min-w-[2em] border-none transition-all duration-100
    flex items-center justify-center bg-[#e4e4e4]/90 p-1 hover:bg-[#d8d8d8]
    text-[1.3em]"
      type="button"
      onClick={() => {
        copyQuestions();
      }}
    >
      <AiFillCopy />
    </button>
  );
};

export default CopyQuestionsOpt;
