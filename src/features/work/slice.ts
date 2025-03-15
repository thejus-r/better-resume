import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TWorkExperience, TWorkExperiencePayload } from "./types";

import { v6 as uuid } from "uuid";

type WorkExperienceState = {
  experience: TWorkExperience[];
};

const initialState: WorkExperienceState = {
  experience: [
    // {
    //   id: uuid(),
    //   companyName: "Flooid LLP",
    //   role: "Software Developer",
    //   currentCompany: false,
    //   from: "2020-01",
    //   to: "2023-01",
    //   description: "Development work",
    // },
  ],
};

export const workExperienceSlice = createSlice({
  initialState,
  name: "Work Experience Slice",
  reducers: {
    add: (state, action: PayloadAction<TWorkExperiencePayload>) => {
      const newExperience: TWorkExperience = {
        id: uuid(),
        ...action.payload,
      };
      state.experience.push(newExperience);
    },

    remove: (state, action: PayloadAction<string>) => {
      state.experience = state.experience.filter(
        (each) => each.id != action.payload,
      );
    },

    update: (state, action: PayloadAction<TWorkExperience>) => {
      state.experience = state.experience.map((each) => {
        if (each.id == action.payload.id) {
          return action.payload;
        }
        return each;
      });
    },
  },
});

export const { add, remove, update } = workExperienceSlice.actions;

export default workExperienceSlice.reducer;
