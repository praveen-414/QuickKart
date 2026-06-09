import { createSlice } from "@reduxjs/toolkit";

const activeTab = createSlice({
  name: "tabActive",
  initialState: {
    categories: ["All", "Mens", "Womens", "Jewelery"],
    tab: "All",
  },
  reducers: {
    setTab: (state, action) => {
      state.tab = action.payload;
    },
  },
});


export const {setTab} = activeTab.actions;
export default activeTab.reducer;