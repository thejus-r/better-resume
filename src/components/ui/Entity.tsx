interface EntityProps {
  label: string;
  text: string;
}

const Entity = ({ label, text }: EntityProps) => {
  return (
    <div className="flex w-full flex-col gap-0.5 px-2">
      <p className="text-xs text-gray-400">{label}</p>
      <p className="text-sm font-medium text-gray-800">{text}</p>
    </div>
  );
};

export { Entity };
