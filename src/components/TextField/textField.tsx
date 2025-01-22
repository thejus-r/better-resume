import { cn } from "@lib/utils";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import type { InputHTMLAttributes, LabelHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import * as RadixPopover from "@radix-ui/react-popover";
import { Warning } from "@phosphor-icons/react";

type TextFieldState = "default" | "disabled" | "error";

type TextFieldContextType = {
  state: TextFieldState;
  setState: React.Dispatch<React.SetStateAction<TextFieldState>>;
} | null;

const TextFieldContext = createContext<TextFieldContextType>(null);

TextFieldContext.displayName = "TEXT_FIELD_CONTEXT";

const TextField = ({
  children,
  fieldState,
}: {
  children: ReactNode;
  fieldState?: TextFieldState;
}) => {
  const [state, setState] = useState<TextFieldState>("default");

  // Guard
  if (fieldState == undefined) fieldState = "default";

  useEffect(() => {
    setState(fieldState);
    return () => {
      setState(fieldState);
    };
  }, [fieldState]);

  return (
    <TextFieldContext.Provider value={{ state, setState }}>
      <div className="relative flex w-full flex-col py-3">{children}</div>
    </TextFieldContext.Provider>
  );
};

// Label Element
const labelVariants = cva(
  "absolute top-1.5 left-2 w-fit bg-white px-1 font-mono text-xs lowercase",
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

const Label: React.FC<LabelProps> = ({ className, ...props }) => {
  const { state } = useContext(TextFieldContext)!;
  return <label className={cn(labelVariants({ state }))} {...props} />;
};

// Input Element
const inputVariants = cva(
  "peer w-full border px-2 py-2 outline-none focus:outline-blue-500 disabled:border-gray-300 disabled:text-gray-300",
  {
    variants: {
      state: {
        default: " border-gray-300 focus:outline-blue-500",
        error: "border-red-500 ",
        disabled: "pointer-events-none",
      },
    },
    defaultVariants: {
      state: "default",
    },
  },
);

// Error Popup

const helperVariants = cva("", {
  variants: {
    type: {
      error: "",
    },
    defaultVariants: {
      type: "error",
    },
  },
});

const Helper = ({ helperText }: { helperText: string }) => {
  return (
    <div className="w-fill flex items-center justify-start text-pretty bg-red-100 text-xs lowercase text-red-500">
      <div className="flex h-full items-center justify-center bg-red-500 text-white">
        <Warning size={14} className="m-1" />
      </div>
      <p className="px-2 py-1">{helperText}</p>
    </div>
  );
};

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "disabled">,
    VariantProps<typeof inputVariants> {}
const Input: React.FC<InputProps> = ({ className, ...props }) => {
  const { state } = useContext(TextFieldContext)!;
  const disabled = state == "disabled" ? true : false;

  return (
    <input
      disabled={disabled}
      className={cn(inputVariants({ state }))}
      {...props}
    />
  );
};

const Root = TextField;
TextField.Root = Root;
TextField.Label = Label;
TextField.Input = Input;
TextField.Helper = Helper;

export { TextField, Root, Label, Input, Helper };
