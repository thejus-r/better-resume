import type { FormSchemaType, SectionsType, SectionSchemaType} from "@lib/formSchema";
import { create } from "zustand";


type ResumeDataStore =  {
    sections: FormSchemaType,
    updateSection: (section: SectionsType, details: SectionSchemaType) => void
}

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
    sections: new Map(),
    updateSection: (section, details) => set((state) => {
      console.log(state.sections)
        return {
            sections: state.sections.set(section, details)
        }
    })
}))

export { useResumeStore }