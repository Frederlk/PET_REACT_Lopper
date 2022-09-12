import { createSlice } from "@reduxjs/toolkit";

interface menuState {
    menuStatus: boolean;
}

const initialState: menuState = {
    menuStatus: false,
};

export const menuSlice = createSlice({
    name: "@@menu",
    initialState,
    reducers: {
        openMenu: (state) => {
            state.menuStatus = true;
        },
        closeMenu: (state) => {
            state.menuStatus = false;
        },
    },
});

export const menuActions = menuSlice.actions;
export const menuReducer = menuSlice.reducer;
