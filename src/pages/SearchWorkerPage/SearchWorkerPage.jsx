import React from 'react'
import { Download, Search } from "../../components"
export default function UserPage() {
  return (
    <div className="d-flex justify-content-around align-items-center flex-column flex-md-row py-3 w-100" style={{height:"calc(100vh - 10rem)"}}>
      <Search/>
      <Download/>
    </div>
  )
}
