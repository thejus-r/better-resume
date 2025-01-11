import { X } from "@phosphor-icons/react";
export default function Badge() {
  return (
    <div className="flex w-fit items-center gap-1 rounded-full bg-gray-200 px-2 py-0.5 text-sm">
      ReactJS
      <button>
        <X />
      </button>
    </div>
  );
}
