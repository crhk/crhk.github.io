interface ChoiceProps {
  children: string;
}

export const Choice = ({ children }: ChoiceProps) => {
  return <li>{children}</li>;
};
