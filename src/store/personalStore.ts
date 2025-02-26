import { create } from "zustand"
import { TPersonalDetails } from "../types/PersonalDetails"


type TPersonalDetailStore = {
  detail: TPersonalDetails | undefined
  updateDetails: (updatedDetails: TPersonalDetails) => void
}

const usePersonalExperienceStore = create<TPersonalDetailStore>((set) => ({
  detail: undefined,
  updateDetails: (updatedDetails) => set(() => ({ detail: updatedDetails }))
}))

export { usePersonalExperienceStore }
