import { ChoiceProps } from "../types/types";
import { Choice } from "./Choice";

interface ChoicesProps {
  choices: ChoiceProps[];
}

export const Choices = ({ choices }: ChoicesProps) => {
  return (
    <ul>
      {choices.map((choice) => (
        <Choice key={choice.label}>{choice.label}</Choice>
      ))}
    </ul>
  );
};
