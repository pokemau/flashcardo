import { AiFillEdit } from "react-icons/ai";

type EditOptProps = {
  title: string;
};

const EditOpt: React.FC<EditOptProps> = ({ title }) => {
  function editCardSet(title: string) {
    console.log(title);
  }

  return (
    <button
      className="question-list-btn"
      type="button"
      onClick={() => {
        editCardSet(title);
      }}>
      <AiFillEdit />
    </button>
  );
};

export default EditOpt;
