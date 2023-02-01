import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
    },
    reducers: {
        setUserData: (state, action) => {
            state.user = action.payload
        },

        changeName: (state, action) => {
            console.log(action)
            state.user.firstName = action.payload.firstName
            state.user.lastName = action.payload.lastName
        }
    }
})

export const { setUserData, changeName } = userSlice.actions
export default userSlice.reducer
