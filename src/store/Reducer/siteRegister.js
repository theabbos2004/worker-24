import { createSlice } from "@reduxjs/toolkit"

const initialState={
    windowSize:{w:null,h:null}
}
const userSlice=createSlice({
    initialState,
    name:"siteRegister",
    reducers:{
        RRwindowSize:(state,action)=>{
            state.windowSize={...state?.windowSize,...action?.payload}
        }
    }
})
export const {RRwindowSize}=userSlice.actions
export default userSlice.reducer