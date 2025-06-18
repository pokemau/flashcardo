import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "../ui/textarea"
import { questionsListAtom } from "@/lib/atoms"
import { useAtom } from "jotai"
import { toast } from "sonner"
import { Question } from "@/lib/types"

type EditQuestionProps = {
  question: Question;
  index: number
}

const EditQuestionDialog: React.FC<EditQuestionProps> = ({
  question, index
}) => {
  const [open, setOpen] = useState(false);

  const [newAnswer, setNewAnswer] = useState(question.answer);
  const [newQuestion, setNewQuestion] = useState(question.question);

  const [questionsList, setQuestionsList] = useAtom(questionsListAtom);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const ques = newQuestion.trim();
    const ans = newAnswer.trim();

    if (!ques || !ans) {
      toast.warning('Fields cannot be empty');
      return;
    }

    const updatedQuestionsList = [...questionsList];
    updatedQuestionsList[index] = {
      id: question.id,
      question: ques,
      answer: ans,
    };

    setQuestionsList(updatedQuestionsList);
    setOpen(false);
    toast.success("Question updated!");
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Edit</Button>
      </DialogTrigger>
      <DialogContent className="md:min-w-[40rem]">
        <DialogHeader>
          <DialogTitle>Edit question</DialogTitle>
        </DialogHeader>
        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div className="grid gap-3">
            <Label>Question</Label>
            <Textarea
              value={newQuestion}
              onChange={e => setNewQuestion(e.target.value)}
            />
          </div>
          <div className="grid gap-3">
            <Label>Answer</Label>
            <Textarea
              value={newAnswer}
              onChange={e => setNewAnswer(e.target.value)}
            />
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              type="button"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit">
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default EditQuestionDialog;
