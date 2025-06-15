'use client'

import { useAtom } from "jotai";
import { Card, CardContent } from "../ui/card";
import { questionsListAtom } from "@/lib/atoms";
import { Button } from "../ui/button";
import { useState } from "react";
import EditQuestionDialog from "./EditQuestionDialog";


const QuestionsList = () => {
  const [questions, setQuestions] = useAtom(questionsListAtom);

  const [hoverIndex, setHoverIndex] = useState(-1);
  const [editIndex, setEditIndex] = useState(-1);

  return (

    <div className="w-full md:w-[50%]">
      <h1 className="text-xl font-bold mb-2">Questions</h1>

      <Card className="h-[25rem]">

        <CardContent>
          {questions.map((q, index) => (
            <div
              key={q.id}
              onMouseLeave={() => setHoverIndex(-1)}
              onMouseEnter={() => setHoverIndex(index)}
              className="relative cursor-pointer bg-red-50">

              {editIndex !== index ? (
                <div>

                  <div>
                    {index + 1}){' '}
                    <span>{q.answer}</span> -{' '}
                    {q.question}
                  </div>

                  {hoverIndex === index && (

                    <EditQuestionDialog index={index} question={q}/>

                  )}

                </div>

              ) : (
                <div>EDITING</div>
              )}

            </div>

          ))}

        </CardContent>

      </Card>

      {/* <EditQuestionDialog /> */}

      <Button className="mt-2">Start</Button>
    </div>
  )


}

export default QuestionsList;
