import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v6 as uuid } from "uuid";

export type Project = {
  id: string;
  name: string;
  description: string;
};

type TProjectPayload = {
  name: string;
  description: string;
};

type ProjectState = {
  list: Project[];
};

const initialState: ProjectState = {
  list: [],
};

export const projectSlice = createSlice({
  initialState,
  name: "Project Slice",
  reducers: {
    remove: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((item) => item.id != action.payload);
    },
    update: (state, action: PayloadAction<Project>) => {
      state.list = state.list.map((item) => {
        if (item.id == action.payload.id) {
          item = action.payload;
        }
        return item;
      });
    },
    add: (state, action: PayloadAction<TProjectPayload>) => {
      const newProject: Project = {
        id: uuid(),
        ...action.payload,
      };
      state.list.push(newProject);
    },
  },
});

export const { add, remove, update } = projectSlice.actions;

export default projectSlice.reducer;
