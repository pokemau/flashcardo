import { titleSetsAtom } from "@/lib/atoms"
import { useAtomValue } from "jotai";
import { Card } from "../ui/card";
import { getQuestionFromLocalStorage, setLocalStorageCurrentTitle } from "@/lib/utils";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const PreviousFlashcards = () => {
  const router = useRouter();
  const titleSets = useAtomValue(titleSetsAtom);

  const handleClick = (title: string) => {

    const questions = getQuestionFromLocalStorage(title);
    if (!questions) {
      toast.error("Flashcard set does not exist");
      return;
    }
    setLocalStorageCurrentTitle(title);
    router.push('/flashcard')
  }


  return (
    <div className="mx-auto w-[70vw] max-w-[35rem] mt-5">

      <h1 className="text-2xl font-bold text-center mb-2">Previous Flashcards</h1>
      <div></div>

      {titleSets.length ? (
        titleSets.map((title) => (

          <Card key={title}
            onClick={() => handleClick(title)}
            className="py-2 px-4 mb-2 cursor-pointer hover:bg-primary/5">
            <div>
              <h1>{title}</h1>
            </div>
          </Card>
        ))
      ) : (

        <div className="mt-3">
          <h1 className="text-center text-gray-400">You have not created any flashcard sets yet...</h1>
        </div>
      )}
    </div>
  )
}

export default PreviousFlashcards
