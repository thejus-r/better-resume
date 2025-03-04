import type { FormSchemaType, SectionsType, SectionSchemaType} from "@lib/formSchema";
import { create } from "zustand";
import { TWorkExperience } from "../types/sections";


type ResumeDataStore =  {
    workExperience: TWorkExperience[]
}

const useResumeStore = create<ResumeDataStore>(() => ({
  workExperience: []
}))

export { useResumeStore }