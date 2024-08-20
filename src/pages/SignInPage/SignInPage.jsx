import React from 'react'
import { useState } from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
export default function SignInPage() {
  let [signIn,setSignIn]=useState([
    {id:0,title:"Telefon",active:false},
    {id:1,title:"Pochta",active:true}
  ])
  let location=useLocation()
  let navigate=useNavigate()
  return (
    location?.pathname==="/signIn/register"?
    <Outlet/>:
    <div className='vw-100 p-3 min-vh-100 d-flex justify-content-center align-items-center' style={{backgroundImage:`url(${require("../../assets/img/mountains-skyscape-trees-wallpaper-3840x2400.png")})`,backgroundPosition:'center',backgroundSize:"cover"}}>
      <div className='card rounded-5 col py-3 p-4 gap-3' style={{maxWidth:"25rem"}}>
        <div className='row-12 d-flex justify-content-center align-items-center'>
          <div className='col-3' style={{cursor:"pointer"}} onClick={()=>navigate(-1)}>
            <i className="bi bi-arrow-left fs-4" ></i>
          </div>
          <div className='col-6 text-center fs-4 fw-bolder'>Worker ID</div>
          <div className='col-3'></div>
        </div>
        <div className='row-12 text-center'>Worker ID tizimiga kirish</div>
        <div className='row-12 flex-row card rounded-4' style={{background:"var(--color-gray-1)"}}>
          {
            signIn?.map((signIn,index)=><button 
              key={index} 
              className={`col-6 card rounded-4 p-2 text-center d-flex border-0 justify-content-center align-items-center fw-semibold ${signIn?.active?"bg-white":"  bg-transparent text-white"}`}
              onClick={()=>{setSignIn(initialState=>initialState.map(item=>item?.id===signIn?.id ? {...item,active:true}:{...item,active:false}))}}
              >{signIn?.title}</button>)
          }
        </div>
        {
          signIn?.map((signIn,index)=>
            signIn?.title==="Pochta" && signIn?.active ?
            <div className='row-12 d-flex flex-column gap-2' key={index}>
              <div 
                className='row-12 flex-row card rounded-4 p-2 px-5 align-items-center gap-2'
                style={{cursor:"pointer"}}
                onClick={()=>{
                  navigate("register")
                }}
                >
                <i className="col-1 bi bi-google fs-5" style={{color:"var(--color-gray-1)"}}></i>
                <div className='col-11 text-center'>Google orqali kirish</div>
              </div>
              <div className='row-12 flex-row card rounded-4 p-2 px-5 align-items-center gap-2' style={{cursor:"pointer"}}
              onClick={()=>{navigate("register")}}
              >
                <i className="col-1 bi bi-apple fs-5" style={{color:"var(--color-gray-1)"}}></i>
                <div className='col-11 text-center'>Apple orqali kirish</div>
              </div>
              <div className='row-12 flex-row card rounded-4 p-2 px-5 align-items-center gap-2' style={{cursor:"pointer"}}
              onClick={()=>{navigate("register")}}
              >
                <i className="col-1 bi bi-facebook fs-5" style={{color:"var(--color-gray-1)"}}></i>
                <div className='col-11 text-center'>Facebook orqali kirish</div>
              </div>
              <div className='row-12 flex-row card rounded-4 p-2 px-5 align-items-center gap-2' style={{cursor:"pointer"}}
              onClick={()=>{navigate("register")}}
              >
                <i className="col-1 bi bi-telegram fs-5" style={{color:"var(--color-gray-1)"}}></i>
                <div className='col-11 text-center'>Telegram orqali kirish</div>
              </div>
              <button onClick={()=>navigate("register")} className='row-12 flex-row card rounded-4 p-2 text-center d-flex justify-content-center align-items-center text-white fw-semibold' style={{background:"var(--color-gray-1)"}}>
                Keyingi
              </button>
              <Link to={"/signup"}>Ro'yxatdan o'tish</Link>
            </div>
            :signIn?.title==="Telefon" && signIn?.active ?
            <div className='row-12 d-flex flex-column gap-2 justify-content-between' style={{minHeight:"12rem"}} key={index}>
              <div className='row-12 gap-2'>
                <label htmlFor="PhoneNumber" style={{fontSize:"0.9rem"}}>Telefon raqamingizni kiriting</label>
                <input  id='PhoneNumber' type='tel' className='card rounded-4 col-12 p-2 text-center d-flex justify-content-center align-items-center' placeholder='+998  (00)  000 - 00 - 00'    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
              </div>
              <div className='col-12'>
                <button onClick={()=>{navigate("register")}} className='col-12  flex-row card rounded-4 p-2 text-center d-flex justify-content-center align-items-center text-white fw-semibold' style={{background:"var(--color-gray-1)"}}>
                  Keyingi
                </button>
                <Link className='col-12' to={"/signup"}>Ro'yxatdan o'tish</Link>
              </div>
            </div>:"")
        }
        <Outlet/>
      </div>
    </div>
  )
}
