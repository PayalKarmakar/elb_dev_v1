import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  allPosts: [],
  listPosts: [],
  editId: "",
  featuredPosts: [],
  recentPosts: [],
  postDetailsModal: false,
  postDetails: {},
  postReviews: [],
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
    showPostDetailsModal: (state) => {
      state.postDetailsModal = true;
    },
    hidePostDetailsModal: (state) => {
      state.postDetailsModal = false;
    },
    setPostsDetails: (state, action) => {
      state.postDetails = action.payload;
    },
    unsetPostsDetails: (state) => {
      state.postDetails = {};
    },
    setPostReviews: (state, action) => {
      state.postReviews = action.payload;
    },
    unsetPostReviews: (state) => {
      state.postReviews = [];
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
  showPostDetailsModal,
  hidePostDetailsModal,
  setPostsDetails,
  unsetPostsDetails,
  setPostReviews,
  unsetPostReviews,
} = postSlice.actions;
export default postSlice.reducer;
