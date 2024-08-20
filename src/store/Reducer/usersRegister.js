import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";


// )
export const createUser=createAsyncThunk("user",async (data,{rejectWithValue,fulfillWithValue})=>{
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        let id=Math.floor(Math.random()*10000)
        console.log(data);
        
        const raw = JSON.stringify({
            ...data,
            username:`user_${id}`,
            info:{pasportRaqam:"AA11111111",adress:"adress",
                phone:"+998912345678",
                Age:19,
                img:"",
            },
            abilities:{
                "gender":"male",
                "height":125,
                "weight":65
            }
            })
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow"
        };
            const response = await fetch(`${process.env.REACT_APP_URL}/users/clients`, requestOptions);
            if (!response.ok) {
                const errorData = await response.json();
                return rejectWithValue(errorData);
            }
            const responseData = await response.json();
            return fulfillWithValue(responseData);      

})
export const getUsers=createAsyncThunk("users",async ()=>{
        return await axios.get(`${process.env.REACT_APP_URL}/users/clients`)
        .then((response) =>response)
        .catch((error) => error);
    }
)
const initialState={
    userInfo: {
        userError:'',
        user:''
    },
}
const userSlice=createSlice({
    initialState,
    name:"workersregister",
    reducers:{
        RRWorkerInfo:(state,action)=>{
            state.workerInfo={...state?.workerInfo,...action.payload}
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(createUser.fulfilled,(state,action)=>{
            console.log(action);
        })
        .addCase(createUser.rejected,(state,action)=>{
            console.log(action);
        })
        .addCase(getUsers.fulfilled,(state,action)=>{
            let res=JSON.parse(action.payload)
            console.log(res);
        })
        .addCase(getUsers.rejected,(state,action)=>{
            let err=JSON.parse(action.payload)
            console.log(err);
        })
    }
})
export const {RRWorkerInfo,RRWorkerRegisterLevel}=userSlice.actions
export default userSlice.reducer