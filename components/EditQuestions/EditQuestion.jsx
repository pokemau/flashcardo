const EditQuestion = ({ question }) => {
  return (
    <div className="bg-orange-300 p-2 w-[50%]">
      <p>{question.id}</p>
      <p>{question.def}</p>
      <p>{question.ans}</p>
    </div>
  );
};

export default EditQuestion;
