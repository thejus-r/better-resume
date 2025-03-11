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
    addMultiple: (state, action: PayloadAction<Array<string>>) => {
      const tempList = state.list.map((skill) => skill.name);
      action.payload.map((newSkill) => {
        if (!tempList.includes(newSkill)) {
          const newSkillObj: Skill = {
            id: uuid(),
            name: newSkill,
          };
          state.list.push(newSkillObj);
        }
      });
    },
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

export const { add, remove, addMultiple } = skillsSlice.actions;

export default skillsSlice.reducer;
