import { Dispatch, SetStateAction } from "react";

type ImportQuestionsProps = {
  setImportQuestions: Dispatch<SetStateAction<string>>;
};

const ImportQuestions: React.FC<ImportQuestionsProps> = ({
  setImportQuestions,
}) => {
  const divPlaceholder = "Enter exported questions here...";

  function handleAddPlaceholderTextOnFocus(e: React.FormEvent<HTMLDivElement>) {
    const currDivText = e.currentTarget.textContent;
  }

  function handleAddPlaceholderTextOnBlur(e: React.FormEvent<HTMLDivElement>) {
    const currDivText = e.currentTarget.textContent;

    if (!currDivText) e.currentTarget.textContent = divPlaceholder;
  }

  return (
    <div className="w-[65%] md:w-[50%] lg:w-[30%]">
      <div
        className="import-field edit-form h-auto max-h-[50vh] overflow-auto"
        role="textbox"
        contentEditable={true}
        placeholder="Enter exported questions here..."
        suppressContentEditableWarning={true}
        onFocus={(e) => handleAddPlaceholderTextOnFocus(e)}
        onBlur={(e) => handleAddPlaceholderTextOnBlur(e)}
        onInput={(e) => setImportQuestions(e.currentTarget.textContent || "")}>
        {divPlaceholder}
      </div>
    </div>
  );
};

export default ImportQuestions;
