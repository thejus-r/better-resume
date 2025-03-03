import { create } from "zustand";
import { z } from 'zod'
import { TWorkExperience } from "../types/WorkExperience";

// Zod Schema Definition and Type infer

const workExperienceSchema = z.discriminatedUnion("currentCompany", [
  z.object({
    currentCompany: z.literal(true),
    id: z.string().uuid(),
    companyName: z.string().trim().min(3),
    role: z.string().trim().min(3),
    from: z.string()
  }),
  z.object({
    currentCompany: z.literal(false),
    id: z.string().uuid(),
    companyName: z.string().trim().min(3),
    role: z.string().trim().min(3),
    from: z.string(),
    to: z.string()
  })
])

type WorkExperienceType = z.infer<typeof workExperienceSchema>


// Zustand State Manangement for WorkExperience

type TWorkExperienceStore = {
  allExperience: TWorkExperience[],
  addExperience: (experience: TWorkExperience) => void
  deleteExperience: (id: string) => void
  updateExperience: (updatedExperience: TWorkExperience) => void
}
const useWorkExperienceStore = create<TWorkExperienceStore>((set) => ({
  allExperience: [],
  addExperience: (experience) => set((state) => ({ allExperience: [...state.allExperience, experience] })),
  deleteExperience: (id) => set((state) => ({
    allExperience: state.allExperience.filter(el => el.id != id)
  })),
  updateExperience: (updatedExperience) => set((state) => {
    const list = state.allExperience.filter(el => el.id != updatedExperience.id)
    return {
      allExperience: [...list, updatedExperience]
    }
  })
}))


export { workExperienceSchema, useWorkExperienceStore }
export type { WorkExperienceType }
