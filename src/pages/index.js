import React from "react"
const SearchWorkerPage=React.lazy(()=>import("./SearchWorkerPage/SearchWorkerPage"));
const SignInPage=React.lazy(()=>import("./SignInPage/SignInPage"));
const SignUpPage=React.lazy(()=>import("./SignUpPage/SignUpPage"));
const RegisterPage=React.lazy(()=>import("./RegisterPage/RegisterPage"));
const WorkerRegisterPage=React.lazy(()=>import("./WorkersRegisterPage/WorkerRegisterPage"));
export { SearchWorkerPage , SignInPage ,SignUpPage , RegisterPage ,WorkerRegisterPage}