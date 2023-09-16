import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  search: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state, action) => {
      state.user = null;
      state.token = null;
    },
    setSearch: (state, action) => {
      state.search = action.payload.search;
    },
  },
});

export const { setLogin, setLogout, setSearch } = authSlice.actions;
export default authSlice.reducer;
