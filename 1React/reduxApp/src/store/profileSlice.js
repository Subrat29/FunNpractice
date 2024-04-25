import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: ''
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        login: (state, action) => {
            state.name = action.payload
        }
    }
})

export const { login } = profileSlice.actions
export default profileSlice.reducer