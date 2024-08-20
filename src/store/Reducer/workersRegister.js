import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState={
    workerInfo: {},
    level: [
      { id: 1, active: true ,show:true},
      { id: 2, active: false ,show:false},
      { id: 3, active: false ,show:false},
      { id: 4, active: false ,show:false},
    ],
    abality:[
        {id:1,title:"Uy ishlari"},
        {id:2,title:"Yuk tashish"},
        {id:3,title:"Uy ko’chirish"},
        {id:4,title:"Uborka"},
        {id:5,title:"Yer chopish"},
        {id:6,title:"Elektrik"},
        {id:7,title:"Mebel buzish, yig’ish "},
        {id:8,title:"Buzish ishlari"},
        {id:9,title:"Sanitexnika"},
        {id:10,title:"Malyarka"},
        {id:11,title:"Tom ustasi"},
        {id:12,title:"Kafelchi"},
        {id:13,title:"Beton quyish"},
        {id:14,title:"Styashka quyish"},
        {id:15,title:"Qazish ishlari"},
        {id:16,title:"Pol, patalok ishlari"},
    ]
}

export const createWorker=createAsyncThunk("worker",
    async (data,{rejectWithValue,fulfillWithValue})=>{
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        let {fullName,email,height,job}=data    
        let id=Math.floor(Math.random()*10000)
        let raw=JSON.stringify({
            id,
            name:fullName,
            email,
            username:`user ${id}`,
            password:'password',
            abilities:{
                gender:"gander",
                height,
                weight:123,
                job
            }
        })
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
          };
        const workerRes= await fetch(process.env.REACT_APP_URL+`/users/workers`,requestOptions).then(res=>res.json())
        if(!workerRes.ok){
        return rejectWithValue(workerRes.message)
        }            
        return fulfillWithValue(workerRes)
    }
)


const chatSlice=createSlice({
    initialState,
    name:"workersregister",
    reducers:{
        RRWorkerRegisterLevel:(state,action)=>{
            let id=action?.payload
            state.level=state.level.map((levelDrop) =>
                levelDrop?.id < id + 1
                  ? { ...levelDrop, active: true, show: false }
                  : levelDrop?.id === id + 1
                  ? { ...levelDrop, active: true, show: true }
                  : { ...levelDrop, active: false, show: false }
                );
        },
        RRWorkerInfo:(state,action)=>{
            state.workerInfo={...state?.workerInfo,...action.payload}
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(createWorker.pending,(state)=>{
            console.log("...Loading");
        })
        .addCase(createWorker.fulfilled,(state,action)=>{
            console.log(action);
        })
        .addCase(createWorker.rejected,(state,action)=>{
            console.log(action);
        })
    }
})
export const {RRWorkerInfo,RRWorkerRegisterLevel}=chatSlice.actions
export default chatSlice.reducer