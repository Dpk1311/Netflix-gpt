import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState:{
        gptToggle: false
    },
    reducers:{
        gpttoggleview:(state)=>{
            state.gptToggle = !state.gptToggle
        }
    }
})

export const {gpttoggleview} = gptSlice.actions

export default gptSlice.reducer