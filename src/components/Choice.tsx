interface ChoiceProps {
  children: string;
}

export const Choice = ({ children }: ChoiceProps) => {
  return <li className="italic">{children}</li>;
};
