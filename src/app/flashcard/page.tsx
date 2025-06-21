'use client'

import QuestionCard from "@/components/flashcard/QuestionCard";
import { Button } from "@/components/ui/button";
import { currentFlashcardsetAtom, currentTitleAtom, currItemAtom, currItemNumberAtom, showAnswerAtom } from "@/lib/atoms";
import { Question } from "@/lib/types";
import { getLocalStorageCurrentTitle, getQuestionFromLocalStorage } from "@/lib/utils";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

function randomizeQuestions(questions: Question[]): Question[] {
  const arr = [...questions];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const Flashcard = () => {
  const router = useRouter();
  const [currTitle, setCurrTitle] = useAtom(currentTitleAtom);
  const [flashcardSet, setFlashcardSet] = useAtom(currentFlashcardsetAtom);
  const [loading, setLoading] = useState(true);
  const [showAnswer, setShowAnswer] = useAtom(showAnswerAtom);

  const [currItemNumber, setCurrItemNumber] = useAtom(currItemNumberAtom)
  const [currItem, setCurrItem] = useAtom(currItemAtom);

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
    setFlashcardSet(randomizeQuestions(questions));
    setCurrItem(flashcardSet[currItemNumber]);

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
     <QuestionCard/>
    </div>
  );
};

export default Flashcard;
