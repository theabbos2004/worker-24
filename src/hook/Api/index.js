import axios from "axios"

const workersApi=async ()=>{
    return await axios.get("https://6dc75de5-6867-4381-9691-9fb1cb80a739.mock.pstmn.io/workers").then((res)=>{
        return res
    })
}
export {workersApi}