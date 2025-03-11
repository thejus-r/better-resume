import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v6 as uuid } from "uuid";

type Skill = {
  id: string;
  name: string;
};

type SkillState = {
  list: Array<Skill>;
};

const initialState: SkillState = {
  list: [],
};

export const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      const newSkill: Skill = {
        id: uuid(),
        name: action.payload,
      };
      state.list.push(newSkill);
    },
    remove: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((item) => item.id != action.payload);
    },
  },
});

export const { add, remove } = skillsSlice.actions;

export default skillsSlice.reducer;
