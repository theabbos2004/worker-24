import React, { useState } from 'react'
import { FlagUzIcon } from '../../assets/icon'
import { Link, useNavigate } from 'react-router-dom'
import styles from "./header.module.css"
export default function Header() {
    let navigate=useNavigate()
    let [menu]=useState([
        {id:0,title:"Foydalanuvchilar uchun",path:"",active:false},
        {id:1,title:"Ishchilar uchun",path:"/worker-register",active:false},
        {id:2,title:"BIz haqimizda",active:false},
    ])
    let [isMenu,setIsMenu]=useState(false)
  return (
    <header className='w-100 p-2 px-3 card rounded-5 d-flex flex-col justify-content-center shadow-lg' style={{minHeight:"4rem"}}>
        <div className={`col-12 d-flex flex-row justify-content-between align-items-center ${isMenu?"pb-2":""}`}>
            <div className='col-4 col-lg-2'>
                <div className='fst-italic h4' style={{fontWeight:"900",fontFamily:"sans-serif",color:"var(--color-web-icon)"}}>Worker</div>
            </div>
            <div className="col-lg-6 d-none d-lg-flex gap-3 gap-lg-4" style={{listStyleType:"none",fontWeight:"500"}}>
            {
                menu?.map((item,index)=><Link to={item?.path} key={index} className=' text-decoration-none' style={{color:"var(--color-gray-1)"}}>
                    {item?.title}
                </Link>)
            }
            </div>
            <div className='col-lg-4 d-flex flex-row justify-content-end align-items-center gap-3'>
                <button type='button' className='btn card p-1 rounded-4 d-flex flex-row justify-content-center align-items-center gap-1'>
                    <FlagUzIcon/>
                    <div className='d-none d-sm-block'>o'zbekcha</div>
                    <i className="bi bi-chevron-down"></i>
                </button>
                <button 
                    type='button' 
                    // ${styles.exit_btn}
                    className={`btn card p-1 px-2 px-sm-5 rounded-4 d-flex flex-row justify-content-center align-items-center gap-1`}
                    style={{backgroundColor: "var(--color-yellow)"}}
                    onClick={()=>navigate("/signIn")}
                    >
                    <i className="bi bi-box-arrow-right"></i>
                    <div className=' d-none d-md-block'>kirish</div>
                    
                </button>
                <button 
                    type='button'
                    className={`d-lg-none d-flex btn card p-1 rounded-4 d-flex flex-row justify-content-center align-items-center gap-1`}
                    style={{minWidth:"2rem"}}
                    onClick={()=>setIsMenu(initialState=>!initialState)}
                    >
                    <i className="bi bi-list"></i>
                </button>
            </div>
        </div>
        <div className={`${isMenu?"d-flex":"d-none"} px-2 row-12 flex-row justify-content-around gap-2 align-items-center border-top`} style={{listStyleType:"none",fontWeight:"500"}}>
            {
                menu?.map((item,index)=><Link to={item?.path} key={index} className=' text-decoration-none' style={{color:"var(--color-gray-1)"}}>
                    {item?.title}
                </Link>)
            }
        </div>
    </header>
  )
}
