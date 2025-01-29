import { cn } from "@lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const textAreaVariants = cva(
  "px-2 py-2 border border-solid rounded-none text-sm placeholder:text-gray-400 w-full min-h-24",
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

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textAreaVariants> {}

const TextArea = ({ state, ...props }: TextAreaProps) => {
  return <textarea className={cn(textAreaVariants({ state }))} {...props} />;
};

export { TextArea };
