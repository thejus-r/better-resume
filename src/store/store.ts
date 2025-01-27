import { create } from "zustand";

type SectionType = "personal"

type Sections = Map<SectionType, object>

type ResumeDataStore =  {
    sections: Sections,
    updateSection: (section: SectionType, details: object) => void
}

const useResumeStore = create<ResumeDataStore>((set) => ({
    sections: new Map(),
    updateSection: (section, details) => set((state) => {
        return {
            sections: state.sections.set(section, details)
        }
    }),
}))

export type { SectionType, Sections }
export { useResumeStore }