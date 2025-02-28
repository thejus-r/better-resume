type TSwitchProps = React.InputHTMLAttributes<HTMLInputElement> & {};
const Switch = ({ ...props }: TSwitchProps) => {
  return (
    <label className="relative h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-gray-200 bg-gray-200 transition-colors has-checked:bg-black">
      <input {...props} type="checkbox" className="peer sr-only" />
      <span className="pointer-events-none absolute block h-4 w-4 translate-x-0 rounded-full bg-white transition-all peer-checked:translate-x-4" />
    </label>
  );
};

export { Switch };
