'use client'

import { currentFlashcardsetAtom, currentTitleAtom } from "@/lib/atoms";
import { Question } from "@/lib/types";
import { getLocalStorageCurrentTitle, getQuestionFromLocalStorage } from "@/lib/utils";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const Flashcard = () => {
  const router = useRouter();
  const [currTitle, setCurrTitle] = useAtom(currentTitleAtom);
  const [flashcardSet, setFlashcardSet] = useAtom(currentFlashcardsetAtom);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const title = getLocalStorageCurrentTitle();
    if (!title) {
      toast.error('Flashcard set does not exist');
      router.push('/');
      return;
    }
    setCurrTitle(title);

    const questions = getQuestionFromLocalStorage(title);
    if (!questions) {
      toast.error('Flashcard set does not exist');
      router.push('/');
      return;
    }
    setFlashcardSet(questions);

    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full w-full min-h-[200px]">
        <span className="text-lg text-muted-foreground">Loading...</span>
      </div>
    );
  }

  return (
    <div>
      <h1 className="font-bold text-4xl mb-4">{currTitle}</h1>
      {flashcardSet.map((question: Question, index) => (
        <div key={question.id}>
          <h1>{index+1}) {question.question} - {question.answer}</h1>
        </div>
      ))}
    </div>
  );
};

export default Flashcard;
