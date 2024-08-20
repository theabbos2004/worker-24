import React, { Suspense, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import Authcontext from './contexts/AuthContext/Authcontext';
import {SignInPage, SearchWorkerPage, SignUpPage, RegisterPage, WorkerRegisterPage } from './pages/index';
import { AppLayout } from './layouts';
import { useDispatch, useSelector } from 'react-redux';
import { RRwindowSize } from './store/Reducer/siteRegister';
function App() {
  // let getWindowWidth=useSelector(store=>console.log(store.siteRegister))
  let dispatch=useDispatch()
  useEffect(()=>{
    let getWindowWidth=()=>{
      dispatch(RRwindowSize({w:Number(window.innerWidth),h:Number(window.innerHeight)}))
    }
    window.addEventListener("resize",getWindowWidth)
    return ()=>window.removeEventListener("resize",getWindowWidth)
  },[dispatch])
  return (
    <Authcontext>
      <Routes>
        <Route path="/" element={<Suspense><AppLayout/></Suspense>}>
          <Route index  element={<Suspense><SearchWorkerPage/></Suspense>}/>
        </Route>
        <Route path='/signIn' element={<Suspense><SignInPage/></Suspense>}>
          <Route path='register' element={<Suspense><RegisterPage/></Suspense>}/>
        </Route>
        <Route path='/signUp' element={<Suspense><SignUpPage/></Suspense>}>
          <Route path='register' element={<Suspense><RegisterPage/></Suspense>}/>
        </Route>
        <Route path='/worker-register' element={<Suspense><WorkerRegisterPage/></Suspense>}>
        </Route>
      </Routes>
    </Authcontext>
  );
}

export default App;
