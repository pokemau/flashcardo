'use client'

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { currentTitleAtom } from "@/lib/atoms";
import { useAtom } from "jotai";
import { useState } from "react";

import { titleAlreadyExists } from "@/lib/utils";
import Importing from "./Importing";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


const CreateNewCard = () => {
  const router = useRouter();
  const [isImporting, setIsImporting] = useState(false);
  const [title, setTitle] = useAtom(currentTitleAtom);

  function createNewFlashcardSet() {
    if (title.length === 0) {
      toast.warning('Title cannot be blank.');
      return;
    }

    if (titleAlreadyExists(title)) {
      toast.warning('Title already exists.');
      return;
    };

    setTitle(title);
    localStorage.setItem('currTitle', title);
    router.push('/edit')
  }

  return (
    <div className="w-[70vw] md:w-[40vw] max-w-[40rem] mx-auto text-center mt-2">

      <h1 className="text-2xl font-bold">Create New Flashcard</h1>
      <Input placeholder="Enter title of flashcard set" className="mt-2 focus:outline-none"
        onChange={e => setTitle(e.target.value)} />

      {isImporting ? (
        <Importing />
      ) : (

        <div className="flex flex-col min-w-[10rem] w-[30%] mx-auto gap-2 mt-4">
          <Button onClick={createNewFlashcardSet}>Create New</Button>
          <Button onClick={() => setIsImporting(true)}>Import Questions</Button>
        </div>
      )}

    </div>
  )

}

export default CreateNewCard;
