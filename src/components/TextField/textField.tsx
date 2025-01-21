import { cn } from "@lib/utils";
import { ReactNode } from "react";
import type { InputHTMLAttributes, LabelHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const TextField = ({ children }: { children: ReactNode }) => {
  return <div className="relative my-4 flex w-full flex-col">{children}</div>;
};

// Label Element
const labelVariants = cva(
  "absolute -top-2.5 left-2 w-fit bg-white px-1 font-mono text-xs lowercase",
  {
    variants: {
      state: {
        default: "text-gray-500 peer-focus:text-blue-500",
        error: "text-red-500 peer-focus:text-red-500",
        disabled: "text-gray-300 pointer-events-none",
      },
    },
    defaultVariants: {
      state: "default",
    },
  },
);

interface LabelProps
  extends LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelVariants> {}

const Label: React.FC<LabelProps> = ({ className, state, ...props }) => {
  return <label className={cn(labelVariants({ state }))} {...props} />;
};

// Input Element
const inputVariants = cva(
  "peer w-full border px-2 py-2 outline-none focus:outline-blue-500 disabled:border-gray-300 disabled:text-gray-300",
  {
    variants: {
      state: {
        default: " border-gray-300 focus:outline-blue-500",
        error: "border-red-500 focus:text-red-500",
        disabled: "pointer-events-none",
      },
    },
    defaultVariants: {
      state: "default",
    },
  },
);
interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}
const Input: React.FC<InputProps> = ({ className, state, ...props }) => {
  return <input className={cn(inputVariants({ state }))} {...props} />;
};

const Root = TextField;
TextField.Root = Root;
TextField.Label = Label;
TextField.Input = Input;

export { TextField, Root, Label, Input };
