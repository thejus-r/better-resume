type InputFieldProps = {
  placeholder?: string
  htmlFor: string
  disabled?: boolean
  label?: string
  type?: string
  error?: string
  register?: any
}

const InputField = ({ label, type, error, register, htmlFor, placeholder }: InputFieldProps) => {
  return <div className="flex flex-col gap-1 my-3">
    <div className="flex flex-col gap-1 ">
      {label && <label htmlFor={htmlFor} className="text-xs text-gray-500">{label}</label>}
      <input {...register} id={htmlFor} placeholder={placeholder} className="border h-10 p-2 border-gray-200 rounded-xl" type={type} />
    </div>
    {error && <p className="text-xs text-red-500">{error}</p>}
  </div>
}

export { InputField }

