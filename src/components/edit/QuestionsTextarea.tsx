'use client'

import { useState } from "react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";
import { useSetAtom } from "jotai";
import { questionsListAtom } from "@/lib/atoms";
import { generateUID } from "@/lib/utils";

const AddQuestions = () => {
  const [input, setInput] = useState('');
  const setQuestionsList = useSetAtom(questionsListAtom);

  function addQuestions() {
    if (input.length === 0) { return; }

    const entries = input.split('\n').filter(e => e.trim() != '');

    const isValidLen = Math.floor(entries.length % 2) === 0;

    if (!isValidLen) {
      toast.warning('Invalid format in the text area');
      return;
    }

    for (let i = 0; i < entries.length; i += 2) {
      const answer = entries[i + 1];
      const question = entries[i];

      setQuestionsList((prev) => [
        ...prev,
        { id: generateUID(), question, answer }
      ])
    }

    setInput('')
  }

  return (
    <div className="w-full md:w-[50%]">
      <Textarea
        value={input}
        onChange={e => setInput(e.target.value)}
        className="min-h-[30rem]" />

      <Button onClick={() => addQuestions()} className="mt-2">Add Questions</Button>
    </div>
  )

}

export default AddQuestions;
