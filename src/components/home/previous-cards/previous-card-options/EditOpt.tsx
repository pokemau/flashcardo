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
      className="cursor-pointer min-w-[2em] border-none transition-all duration-100 
    flex items-center justify-center bg-[#e4e4e4]/90 p-1 hover:bg-[#d8d8d8] 
    text-[1.3em]"
      type="button"
      onClick={() => {
        editCardSet(title);
      }}>
      <AiFillEdit />
    </button>
  );
};

export default EditOpt;
