// css
import styles from "../../styles/Home.module.css";

import { useRouter } from "next/router";

const CreateNew = ({ currTitle, setCurrTitle }) => {
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
      <div className="">
        <h1>Create New Flashcard</h1>
        <input
          className={styles["create-input"]}
          value={currTitle}
          type="text"
          onInput={(e) => {
            setCurrTitle(e.target.value);
          }}
        />
        <button onClick={handleCreateNew} className={styles["create-new-btn"]}>
          Create New
        </button>
      </div>
    </>
  );
};

export default CreateNew;
