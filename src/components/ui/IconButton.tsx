interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const IconButton = ({ ...props }: IconButtonProps) => {
  return <button {...props}>text</button>;
};

export { IconButton };
