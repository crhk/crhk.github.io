import { Choice } from "./Choice";

interface ChoicesProps {
  choices: string[];
}

export const Choices = ({ choices }: ChoicesProps) => {
  return (
    <ul>
      {choices.map((choice) => (
        <Choice key={choice}>{choice}</Choice>
      ))}
    </ul>
  );
};
