import { cva, type VariantProps } from "class-variance-authority";
import { createContext, useContext } from "react";
import { twMerge } from "tailwind-merge";

// Using context to manage state for the children element
type InputFieldContextType = {
  error: boolean;
  disable: boolean;
};

const InputFieldContext = createContext<InputFieldContextType>({
  disable: false,
  error: false,
});

// InputField.Root
type InputFieldProps = Omit<React.HTMLAttributes<HTMLDivElement>, "disable"> & {
  children: React.ReactNode;
  disable?: boolean;
  error?: boolean;
};

const InputField = ({ children, disable, error }: InputFieldProps) => {
  return (
    <InputFieldContext.Provider
      value={{ disable: disable! ?? false, error: error! ?? false }}
    >
      <div className="group mb-2.5 flex w-full flex-col gap-1.5">
        {children}
      </div>
    </InputFieldContext.Provider>
  );
};

// InputField.Input
const inputVariants = cva(
  [
    "border",
    "rounded-2xl",
    "p-2",
    "w-full",
    "border-gray-200",
    "text-gray-800",
  ],
  {
    variants: {
      error: {
        false: null,
        true: ["text-red-500", "border-red-500"],
      },
      disable: {
        false: null,
        true: ["opacity-50", "cursor-not-allowed"],
      },
      textArea: {
        false: null,
        true: ["h-24", "align-text-top"],
      },
    },
    defaultVariants: {
      error: false,
      disable: false,
      textArea: false,
    },
  },
);

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "disable"> &
  VariantProps<typeof inputVariants> & {};
const Input = ({ ...props }: InputProps) => {
  const { disable, error } = useContext(InputFieldContext);
  return (
    <input
      disabled={disable}
      className={twMerge(inputVariants({ disable: disable, error: error }))}
      {...props}
    />
  );
};

// InputField.TextArea
type TextAreaProps = Omit<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  "disable"
> &
  VariantProps<typeof inputVariants> & {};
const TextArea = ({ ...props }: TextAreaProps) => {
  const { disable, error } = useContext(InputFieldContext);
  return (
    <textarea
      rows={4}
      disabled={disable}
      className={twMerge(
        inputVariants({ disable: disable, error: error, textArea: true }),
      )}
      {...props}
    />
  );
};

// InputField.Label
const labelVariants = cva(["text-xs", "text-gray-500"], {
  variants: {
    error: {
      false: null,
      true: ["text-red-500"],
    },
    disable: {
      false: null,
      true: ["opacity-50", "cursor-not-allowed"],
    },
  },
  defaultVariants: {
    error: false,
    disable: false,
  },
});

type LabelProps = Omit<React.LabelHTMLAttributes<HTMLLabelElement>, "disable"> &
  VariantProps<typeof labelVariants> & {};

const Label = ({ ...props }: LabelProps) => {
  const { disable, error } = useContext(InputFieldContext);
  return (
    <label
      className={twMerge(labelVariants({ error: error, disable: disable }))}
      {...props}
    />
  );
};

// InputField.Error
const errorVariants = cva(["text-xs", "text-red-500"], {
  variants: {
    error: {
      false: ["hidden"],
      true: ["block"],
    },
  },
  defaultVariants: {
    error: false,
  },
});

type ErrorProps = Omit<
  React.ParamHTMLAttributes<HTMLParagraphElement>,
  "disable"
> &
  VariantProps<typeof errorVariants>;

const Error = ({ ...props }: ErrorProps) => {
  const { error } = useContext(InputFieldContext);
  return <p className={twMerge(errorVariants({ error }))} {...props} />;
};

const Root = InputField;
InputField.Root = Root;
InputField.Input = Input;
InputField.TextArea = TextArea;
InputField.Label = Label;
InputField.Error = Error;

export { Root, InputField, Input, Label, Error, TextArea };
