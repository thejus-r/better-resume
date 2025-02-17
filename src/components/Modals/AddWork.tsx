import { InputField } from "@components/ui/InputField"
import * as Switch from "@radix-ui/react-switch";
import * as Modal from "@components/ui/Modal"

const AddWorkModal = () => {
  return <>
    <Modal.Title>Add your work experience</Modal.Title>
    <form>
      <Modal.Content>
        <InputField label="Role" htmlFor="role" />
        <InputField label="Company Name" htmlFor="companyName" />
        <div className="flex flex-row gap-2">
          <Switch.Root className="peer mb-3 inline-flex w-9 h-5 rounded-full shrink-0 cursor-pointer transition-colors items-center border-2 border-transparent border-gray-300 data-[state=checked]:bg-gray-800 data-[state=unchecked]:bg-gray-200">
            <Switch.Thumb
              className="pointer-events-none block h-4 w-4 rounded-full transition-transform data-[state=unchecked]:bg-white data-[state=checked]:bg-white data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0" />
          </Switch.Root>
          <p className="text-sm">I currently work here</p>
        </div>
        <div className="flex flex-row w-full gap-4">
          <InputField label="From" type="month" htmlFor="formDate" />
          <InputField label="To" type="month" htmlFor="toDate" />
        </div>
      </Modal.Content>
      <Modal.Actions>
        <button className="text-sm text-red-500 bg-red-50 border border-red-500 rounded-full px-5 py-2">Cancel</button>
        <button className="text-sm text-white bg-gray-800 rounded-full px-5 py-2">Update</button>
      </Modal.Actions>
    </form>
  </>

}

export { AddWorkModal }





