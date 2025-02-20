import { create } from "zustand";
import { z } from 'zod'


// Zod Schema Definition and Type infer

const workExperienceSchema = z.discriminatedUnion("currentCompany", [
  z.object({
    currentCompany: z.literal(true),
    id: z.string().uuid(),
    companyName: z.string(),
    role: z.string().min(10),
    from: z.string()
  }),
  z.object({
    currentCompany: z.literal(false),
    id: z.string().uuid(),
    companyName: z.string(),
    role: z.string().min(10),
    from: z.string(),
    to: z.string()

  })
])

type WorkExperienceType = z.infer<typeof workExperienceSchema>


// Zustand State Manangement for WorkExperience

type WorkExperienceStoreType = {
  allExperience: WorkExperienceType[],
  addExperience: (experience: WorkExperienceType) => void
  deleteExperience: (id: string) => void
}
const useWorkExperienceStore = create<WorkExperienceStoreType>((set) => ({
  allExperience: [],
  addExperience: (experience) => set((state) => ({ allExperience: [...state.allExperience, experience] })),
  deleteExperience: (id) => set((state) => ({
    allExperience: state.allExperience.filter(el => el.id != id)
  }))
}))


export { workExperienceSchema, useWorkExperienceStore }
export type { WorkExperienceType }
