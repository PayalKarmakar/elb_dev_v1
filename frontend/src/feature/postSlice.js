import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  allPosts: [],
  listPosts: [],
  editId: "",
  featuredPosts: [],
  recentPosts: [],
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
    setRecentPosts: (state, action) => {
      state.recentPosts = action.payload;
    },
    unsetRecentPosts: (state) => {
      state.recentPosts = [];
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
  setRecentPosts,
  unsetRecentPosts,
} = postSlice.actions;
export default postSlice.reducer;
