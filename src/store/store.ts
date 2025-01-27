import { create } from "zustand";

type SectionType = "personal" | "work"

type Sections = Map<SectionType, object>

type ResumeDataStore =  {
    sections: Sections,
    updateSection: (section: SectionType, details: object) => void
}

let defaultValue:Sections = new Map()
defaultValue.set("personal", {
    name: "Thejus Rajendran"
})

function debounce<T extends (...args: any[]) => void>(func: T, delay: number): (...args: Parameters<T>) => void {
  let timer: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>): void => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

const useResumeStore = create<ResumeDataStore>((set) => ({
    sections: defaultValue,
    updateSection: debounce((section, details) => set((state) => {
        return {
            sections: state.sections.set(section, details)
        }
    }), 2000),
}))

export type { SectionType, Sections }
export { useResumeStore }