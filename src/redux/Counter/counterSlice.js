import {createSlice} from "@reduxjs/toolkit"

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value:0,

    },
    reducers: {
        increase: (state) => {
            state.value += 1;
        },
        decrease: (state) => {
            state.value -= 1;
        },
        setValue: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const {increase, decrease, setValue} = counterSlice.actions;
export default counterSlice.reducer;