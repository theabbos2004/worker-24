import { configureStore } from "@reduxjs/toolkit";
import workersRegister from "./Reducer/workersRegister";
import usersRegister from "./Reducer/usersRegister";
import siteRegister from "./Reducer/siteRegister";


const store=configureStore({
    reducer:{
        siteRegister:siteRegister,
        workerRegister:workersRegister,
        userRegister:usersRegister
    }
})
export default store