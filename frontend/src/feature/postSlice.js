import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  allPosts: [],
  listPosts: [],
  editId: "",
  featuredPosts: [],
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
    setEditPost: (state, action) => {
      state.editId = action.payload;
    },
    unsetEditPost: (state) => {
      state.editId = "";
    },
    setFeaturedPosts: (state, action) => {
      state.featuredPosts = action.payload;
    },
    unsetFeaturedPosts: (state) => {
      state.featuredPosts = [];
    },
  },
});

export const {
  setAllPosts,
  unsetAllPosts,
  setListPosts,
  unsetListPosts,
  setEditPost,
  unsetEditPost,
  setFeaturedPosts,
  unsetFeaturedPosts,
} = postSlice.actions;
export default postSlice.reducer;
