// css
import styles from "../../styles/Home.module.css";

import { useRouter } from "next/router";

const CreateNewCard = ({ currTitle, setCurrTitle }) => {
  const router = useRouter();
  // create new
  function handleCreateNew(e) {
    e.preventDefault();

    if (currTitle) {
      localStorage.setItem("currTitle", currTitle);
      router.push("/edit");
      setCurrTitle("");
    }
  }

  return (
    <>
      <div className="w-[100vw] flex flex-col items-center">
        <h1 className="text-2xl font-bold">Create New Flashcard</h1>
        <input
          className="flex h-8 w-[65%] m-2 border-[1px] border-[#a8a8a8] md:w-[50%] lg:w-[30%] p-2 focus:outline-none"
          value={currTitle}
          type="text"
          onInput={(e) => {
            setCurrTitle(e.target.value);
          }}
        />
        <button
          onClick={handleCreateNew}
          className="cursor-pointer bg-[#b989c2] py-1 px-2 text-lg rounded my-[5px] hover:bg-[#a77aaf] transition-all duration-100">
          Create New
        </button>
      </div>
    </>
  );
};

export default CreateNewCard;
