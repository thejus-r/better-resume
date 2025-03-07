
import { X } from "@phosphor-icons/react"

type ChipProps = | {
  removable: false
  children: React.ReactNode
}
  | {
    children: React.ReactNode
    removable: true
    onRemove: () => void
  }

type ChipPropsAll = Extract<ChipProps, { removable: true }>

const Chip = ({ removable, onRemove, children }: ChipPropsAll) => {

  return <div className="border flex gap-1 justify-center items-center border-gray-200 py-1 px-2 rounded-full bg-gray-100 text-gray-600 text-sm">
    {children}
    {removable &&
      <button onClick={onRemove}>
        <X />
      </button>
    }
  </div>
}

export { Chip }
