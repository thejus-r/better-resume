import { configureStore } from "@reduxjs/toolkit";
import skillsReducer from "../features/skills/skillsSlice";
import projectsReducer from "../features/project/projectSlice";

const store = configureStore({
  reducer: {
    skills: skillsReducer,
    projects: projectsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
