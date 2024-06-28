import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  locationModal: false,
  categoryModal: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    setLocationModal: (state) => {
      state.locationModal = true;
    },
    unsetLocationModal: (state) => {
      state.locationModal = false;
    },
  },
});

export const { setLocationModal, unsetLocationModal } = searchSlice.actions;
export default searchSlice.reducer;
