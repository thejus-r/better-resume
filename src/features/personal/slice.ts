import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TPersonalDetails } from "./type";

type PersonalState = {
  value: TPersonalDetails;
};

const initialState: PersonalState = {
  value: {
    name: "",
    email: "",
    role: "",
    phoneNumber: "",
    place: "",
  },
};

export const personalSlice = createSlice({
  initialState,
  name: "Personal Slice",
  reducers: {
    update: (state, action: PayloadAction<TPersonalDetails>) => {
      state.value = action.payload;
    },
  },
});

export const { update } = personalSlice.actions;

export default personalSlice.reducer;
