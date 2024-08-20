import React from 'react'
import { Outlet } from "react-router-dom";
import { Header, MakeOwner, Map } from "../../components";

export default function AppLayout() {
  return (
    <div className="App vw-100 min-vh-100 overflow-hidden position-relative p-2">
        <Map/>
        <div className="w-100 h-100 p-1 container col">
          <Header/>
          <Outlet/>
          <MakeOwner/>
        </div>
    </div>
  )
}
