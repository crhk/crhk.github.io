import { ChoiceProps } from "../types/types";
import { Choice } from "./Choice";

interface ChoicesProps {
  choices: ChoiceProps[];
}

export const Choices = ({ choices }: ChoicesProps) => {
  return (
    <ol className="my-5 list-decimal text-xl">
      {choices.map((choice) => (
        <Choice key={choice.label}>{choice.label}</Choice>
      ))}
    </ol>
  );
};
