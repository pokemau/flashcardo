import { AiFillEdit } from "react-icons/ai";
import { useRouter } from "next/router";

type EditOptProps = {
  title: string;
};

const EditOpt: React.FC<EditOptProps> = ({ title }) => {
  const router = useRouter();

  function editCardSet(title: string) {
    localStorage.setItem("currTitle", title);
    router.push("/edit");
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
