import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface UiState {
  showModal: boolean;
  isDisable: boolean;
  showToast: boolean;
  location: string;
  openBurger: boolean;
  darkMode: boolean;
}

const initialState: UiState = {
  showModal: false,
  isDisable: false,
  showToast: false,
  location: "",
  openBurger: false,
  darkMode: true
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openModal(state) {
      state.showModal = !state.showModal;
    },
    disable(state) {
      state.isDisable = !state.isDisable;
    },
    openToast(state) {
      state.showToast = !state.showToast;
    },
    setLocation(state, action) {
      const location = action.payload;

      state.location = location;
    },
    openBurger(state) {
      state.openBurger = !state.openBurger;
    },
    showDarkMode(state) {
      state.darkMode = !state.darkMode;
    },
  },
});
export const uiActions = uiSlice.actions;

export default uiSlice;
