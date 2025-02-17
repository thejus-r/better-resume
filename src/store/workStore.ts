import { create } from "zustand";
import { z } from 'zod'

// Zod Schema Definition and Type
const workExperience = z.discriminatedUnion("currentCompany", [
  z.object({
    currentCompany: z.literal(true),
    companyName: z.string(),
  })
])

type WorkExperienceType = z.infer<typeof workExperience>

// Zustand State Manangement for WorkExperience

type WorkExperienceStoreType = {
  data: WorkExperienceType[]
}
const useWorkExperienceStore = create<WorkExperienceStoreType>((set) => ({
  data: []
}))


export { workExperience }
export type { WorkExperienceType }