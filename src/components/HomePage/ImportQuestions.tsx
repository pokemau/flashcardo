import { Dispatch, SetStateAction } from "react";

type ImportQuestionsProps = {
  setImportQuestions: Dispatch<SetStateAction<string>>;
};

const ImportQuestions: React.FC<ImportQuestionsProps> = ({
  setImportQuestions,
}) => {
  const divPlaceholder = "Enter exported questions here...";

  return (
    <div className="w-[65%] md:w-[50%] lg:w-[30%]">
      <div
        className="edit-form h-auto max-h-[50vh] overflow-auto"
        role="textbox"
        contentEditable={true}
        suppressContentEditableWarning={true}
        onFocus={(e) => (e.currentTarget.textContent = "")}
        onBlur={(e) => (e.currentTarget.textContent = divPlaceholder)}
        onInput={(e) => setImportQuestions(e.currentTarget.textContent || "")}>
        {divPlaceholder}
      </div>
    </div>
  );
};

export default ImportQuestions;
