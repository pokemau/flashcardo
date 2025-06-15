import QuestionsList from "@/components/edit/QuestionsList";
import AddQuestions from "@/components/edit/QuestionsTextarea";

export default function Edit() {
  return (
    <div className="flex flex-col md:flex-row gap-10 mt-4 px-6 md:px-15">
      <AddQuestions />
      <QuestionsList />
    </div>
  )
}
