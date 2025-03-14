import { configureStore } from "@reduxjs/toolkit";
import skillsReducer from "../features/skills/skillsSlice";
import projectsReducer from "../features/project/projectSlice";
import personalReducer from "../features/personal/slice";

const store = configureStore({
  reducer: {
    skills: skillsReducer,
    projects: projectsReducer,
    personal: personalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
