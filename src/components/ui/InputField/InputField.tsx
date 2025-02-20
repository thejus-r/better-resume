import { cva, cx, type VariantProps } from "class-variance-authority"

type InputFieldProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode
}

const InputField = ({ children }: InputFieldProps) => {
  return <div className="flex flex-col gap-2 mb-2.5 w-full group">{children}</div>
}

// Input 
const inputVariants = cva("border rounded-2xl p-1 w-full", {
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
  return <input className="border rounded-2xl p-1.5 w-full border-gray-200 text-gray-800 invalid:border-red-500" {...props} />
}

// Label
const labelVariants = cva("text-xs w-full", {
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
  return <label className="text-xs peer-invalid:text-red-500 text-gray-500" {...props} />
}

const Root = InputField
InputField.Root = Root
InputField.Input = Input
InputField.Label = Label

export { Root, InputField, Input, Label }
