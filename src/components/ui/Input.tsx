import { cn } from "@lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const inputVariants = cva(
  "px-2 py-2 border border-solid rounded-none text-sm placeholder:text-gray-400 w-full",
  {
    variants: {
      state: {
        default: "border-gray-500 text-black",
        error: " border-red-500 text-red-500",
      },
    },
    defaultVariants: {
      state: "default",
    },
  },
);

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = ({ state, ...props }: InputProps) => {
  return <input className={cn(inputVariants({ state }))} {...props} />;
};

export { Input };
