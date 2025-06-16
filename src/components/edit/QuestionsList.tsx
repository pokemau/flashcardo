'use client'

import { useAtom, useAtomValue } from "jotai";
import { Card, CardContent } from "../ui/card";
import { questionsListAtom, titleAtom } from "@/lib/atoms";
import { Button } from "../ui/button";
import { useState } from "react";
import EditQuestionDialog from "./EditQuestionDialog";
import { toast } from "sonner";
import { addTitleToTitleSetsLocalStorage } from "@/lib/utils";
import { useRouter } from "next/navigation";


const QuestionsList = () => {
  const router = useRouter();

  const currTitle = useAtomValue(titleAtom);

  const [questionsList, setQuestionsList] = useAtom(questionsListAtom);

  const [hoverIndex, setHoverIndex] = useState(-1);
  const [editIndex, setEditIndex] = useState(-1);

  function start() {
    if (questionsList.length === 0) {
      toast.warning('Questions cannot be empty');
      return;
    }

    localStorage.setItem(currTitle, JSON.stringify(questionsList));
    addTitleToTitleSetsLocalStorage(currTitle);
    router.push('/flashcard');
  }

  return (

    <div className="w-full md:w-[50%]">
      <h1 className="text-xl font-bold mb-2">Questions</h1>

      <Card className="min-h-[25rem] max-h-[35rem] overflow-y-auto py-2">

        <CardContent className="px-2">
          {questionsList.map((q, index) => (
            <div
              key={q.id}
              onMouseLeave={() => setHoverIndex(-1)}
              onMouseEnter={() => setHoverIndex(index)}
              className="relative cursor-pointer border-b-[1px] py-1">

              {editIndex !== index && (
                <div>

                  <div className="py-2">
                    {index + 1}){' '}
                    <span>{q.answer}</span> -{' '}
                    {q.question}
                  </div>

                  {hoverIndex === index && (

                    <div className="absolute right-2 top-1 z-10">
                      <EditQuestionDialog index={index} question={q} />
                    </div>

                  )}

                </div>

              )}

            </div>

          ))}

        </CardContent>

      </Card>

      <Button
        onClick={start}
        className="mt-2">Start</Button>
    </div>
  )


}

export default QuestionsList;
