import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import skillsReducer from "../features/skills/skillsSlice";
import projectsReducer from "../features/project/projectSlice";
import personalReducer from "../features/personal/slice";

const rootReducer = combineReducers({
  personal: personalReducer,
  projects: projectsReducer,
  skills: skillsReducer,
});

const presistConfig = {
  key: "root",
  storage,
};

const presistedState = persistReducer(presistConfig, rootReducer);

export const store = configureStore({
  reducer: presistedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
