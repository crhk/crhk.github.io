interface ChoiceProps {
  children: string;
}

export const Choice = ({ children }: ChoiceProps) => {
  return <li className="italic mb-10">{children}</li>;
};
