interface QuestionProps {
  question: string;
}

export const Question = ({ question }: QuestionProps) => {
  return (
    <div>
      <h1 className="text-xl font-extrabold">{question}</h1>
    </div>
  );
};
