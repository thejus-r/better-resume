import { create } from "zustand";

type ResumeDataStore =  {
    count: number
}

const useResumeStore = create<ResumeDataStore>(() => ({
    count: 1
}))


export { useResumeStore }