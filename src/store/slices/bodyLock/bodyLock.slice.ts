import { createSlice } from "@reduxjs/toolkit";

interface bodyLockState {
    lockStatus: boolean;
}

const initialState: bodyLockState = {
    lockStatus: false,
};

export const bodyLockSlice = createSlice({
    name: "@@bodyLock",
    initialState,
    reducers: {
        setLock: (state) => {
            state.lockStatus = true;
        },
        setUnlock: (state) => {
            state.lockStatus = false;
        },
    },
});

export const bodyLockActions = bodyLockSlice.actions;
export const bodyLockReducer = bodyLockSlice.reducer;
