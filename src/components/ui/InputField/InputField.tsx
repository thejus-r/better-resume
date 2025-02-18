import { cva } from "class-variance-authority"

type states = "default" | "disabled" | "error"

const inputFieldVariants = cva("", {
  variants: {
    state: {
      default: "text-black"
    }
  },
  defaultVariants: {
    state: "default"
  }
})

type InputFieldProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode
}

const InputField = ({ children }: InputFieldProps) => {
  return <div>{children}</div>
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
}

const Input = ({ ...props }: InputProps) => {
  return <input {...props} />
}

// Label

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
}

const Label = ({ ...props }: LabelProps) => {
  return <label {...props} />
}

const Root = InputField
InputField.Root = Root
InputField.Input = Input
InputField.Label = Label

export { Root, InputField, Input, Label }
