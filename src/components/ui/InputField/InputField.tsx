import { cva, cx, type VariantProps } from "class-variance-authority"

const inputFieldVariants = cva("flex flex-col gap-2 mb-2.5", {
  variants: {
    state: {
      default: "",
      disabled: "cursor-none"
    }
  },
  defaultVariants: {
    state: "default"
  },
})

type InputFieldProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof inputFieldVariants> & {
  children: React.ReactNode
}

const InputField = ({ state, children }: InputFieldProps) => {
  return <div className={cx(inputFieldVariants({ state }))}>{children}</div>
}

// Input 
const inputVariants = cva("border rounded-2xl p-2", {
  variants: {
    state: {
      default: "border-gray-200 text-gray-800",
      disabled: "border-gray-100 bg-gray-50 text-gray-400 placeholder:text-gray-400",
      error: "text-red-500",
    }
  },
  defaultVariants: {
    state: "default"
  },
})

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & VariantProps<typeof inputVariants> & {
}

const Input = ({ state, ...props }: InputProps) => {
  return <input className={cx(inputVariants({ state }))} {...props} />
}

// Label
const labelVariants = cva("text-xs", {
  variants: {
    state: {
      default: "text-gray-500"
    }
  },
  defaultVariants: {
    state: "default"
  }
})

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & VariantProps<typeof labelVariants> & {
}

const Label = ({ state, ...props }: LabelProps) => {
  return <label className={cx(labelVariants({ state }))} {...props} />
}

const Root = InputField
InputField.Root = Root
InputField.Input = Input
InputField.Label = Label

export { Root, InputField, Input, Label }
