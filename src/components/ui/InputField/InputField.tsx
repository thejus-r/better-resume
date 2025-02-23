import { cva, type VariantProps } from "class-variance-authority"
import { createContext, useContext } from "react"
import { twMerge } from "tailwind-merge"


// Using context to manage state for the children element
type InputFieldContextType = {
  error: boolean,
  disable: boolean
}

const InputFieldContext = createContext<InputFieldContextType>({ disable: false, error: false })


// InputField.Root
type InputFieldProps = Omit<React.HTMLAttributes<HTMLDivElement>, "disable"> & {
  children: React.ReactNode,
  disable?: boolean,
  error?: boolean
}

const InputField = ({ children, disable, error }: InputFieldProps) => {
  return <InputFieldContext.Provider value={{ disable: disable! ?? false, error: error! ?? false }}>
    <div className="flex flex-col gap-2 mb-2.5 w-full group">{children}</div>
  </InputFieldContext.Provider>
}


// InputField.Input
const inputVariants = cva(
  ["border", "rounded-2xl", "p-2", "w-full", "border-gray-200", "text-gray-800"], {
  variants: {
    error: {
      false: null,
      true: ["text-red-500", "border-red-500"]
    },
    disable: {
      false: null,
      true: ["opacity-50", "cursor-not-allowed"]
    },
  },
  defaultVariants: {
    error: false,
    disable: false
  },
})

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "disable"> & VariantProps<typeof inputVariants> & {
}
const Input = ({ ...props }: InputProps) => {
  const { disable, error } = useContext(InputFieldContext)
  return <input disabled={disable} className={twMerge(inputVariants({ disable: disable, error: error }))} {...props} />
}



// InputField.Label
const labelVariants = cva(["text-xs", "text-gray-500"], {
  variants: {
    error: {
      false: null,
      true: ["text-red-500"]
    },
    disable: {
      false: null,
      true: ["opacity-50", "cursor-not-allowed"]
    }
  },
  defaultVariants: {
    error: false,
    disable: false
  }
})

type LabelProps = Omit<React.LabelHTMLAttributes<HTMLLabelElement>, "disable"> & VariantProps<typeof labelVariants> & {
}

const Label = ({ ...props }: LabelProps) => {
  const { disable, error } = useContext(InputFieldContext)
  return <label className={twMerge(labelVariants({ error: error, disable: disable }))} {...props} />
}

const Root = InputField
InputField.Root = Root
InputField.Input = Input
InputField.Label = Label

export { Root, InputField, Input, Label }
