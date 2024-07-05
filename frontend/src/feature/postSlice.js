import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  allPosts: [],
  listPosts: [],
  editId: "",
};

const postSlice = createSlice({
  name: "posts",
  initialState: initialValue,
  reducers: {
    setAllPosts: (state, action) => {
      state.allPosts = action.payload;
    },
    unsetAllPosts: (state) => {
      state.allPosts = [];
    },
    setListPosts: (state, action) => {
      state.listPosts = action.payload;
    },
    unsetListPosts: (state) => {
      state.listPosts = [];
    },
  },
});

export const { setAllPosts, unsetAllPosts, setListPosts, unsetListPosts } =
  postSlice.actions;
export default postSlice.reducer;
