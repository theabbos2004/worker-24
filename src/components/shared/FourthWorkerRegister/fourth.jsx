import React, { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createWorker } from "../../../store/Reducer/workersRegister";

function Fourth() {
  let { workerInfo } = useSelector((store) => store.workerRegister);
  const [workerError,setWorkerError]=useState()
  let navigate=useNavigate()
  let dispatch=useDispatch()
  return (
        <form
          className="col-12 m-2 d-flex flex-column gap-2"
          onSubmit={(e)=>{
            e.preventDefault()
            dispatch(createWorker(workerInfo))
            .then(res=>{
              if(res.error?.message==="Rejected"){
                setWorkerError(res.payload)
              }
              else{
                setWorkerError(null)
                navigate("/")
              }
            })
          }}
        >
          <div className="col-12 card ro  unded-4 p-3 d-flex flex-column gap-3" style={{lineHeight:"1rem"}}>
            <div className={`${workerError?"d-block":"d-none"} text-danger text-center fw-semibold`}>{workerError}</div>
            <div className="row-12 d-flex">
              <div className="col-3 rounded-2 overflow-hidden d-flex align-items-center">
                <img alt="profile" src={workerInfo?.fullBodyImg} style={{maxHeight:"3rem"}}/>
              </div>
              <div className="col-9 d-flex justify-content-center aligwpn-items-center">{workerInfo?.fullName}</div>
            </div>
            <div className="col-12 card p-1 rounded-4 px-3">
              <label className=" text-secondary" style={{fontSize:"0.8rem"}}>Telefon Raqam</label>
              <div>{workerInfo?.phone}</div>
            </div>
            <div className="col-12 card p-1 rounded-4 px-3">
              <label className=" text-secondary" style={{fontSize:"0.8rem"}}>Pasport seriasi</label>
              <div>{workerInfo?.pasport}</div>
            </div>
            <div className="col-12 card p-1 rounded-4 px-3">
              <label className=" text-secondary" style={{fontSize:"0.8rem"}}>Email</label>
              <div>{workerInfo?.email}</div>
            </div>
            <div className="row-12 flex-row card p-1 rounded-4">
              <div className="col-6 px-3">
                <label className=" text-secondary" style={{fontSize:"0.8rem"}}>Yoshi</label>
                <div>{workerInfo?.age}</div>
              </div>
              <div className="col-6 px-3">
                <label className=" text-secondary" style={{fontSize:"0.8rem"}}>Bo'yi</label>
                <div>{workerInfo?.height}</div>
              </div>
            </div>
            <div className="col-12 card p-1 rounded-4 px-3">
              <label className=" text-secondary" style={{fontSize:"0.8rem"}}>Yashash manzili</label>
              <div>{workerInfo?.adress}</div>
            </div>
            <div className="col-12">
              <label className="text-secondary mb-1" style={{fontSize:"0.8rem"}}>Qo’lingizdan keladigan ishlar</label>
              <div
                className="row-12" 
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "10px",
                  listStyleType: "none",
                }}>
                  {
                    workerInfo?.abalityChoosed?.map((abality,abalityIndex)=><div key={abalityIndex} className="card text-center p-1" style={{background:"var(--color-gray)"}}>
                      {abality}
                    </div>)
                  }
              </div>
            </div>
          </div>
          <div className="col-12 my-2">
            <button
              type="submit"
              className="col-12  flex-row card rounded-4 p-2 text-center d-flex justify-content-center align-items-center fw-semibold"
              style={{ background: "var(--color-yellow)" }}
            >
              tayyor
            </button>
          </div>
        </form>
  );
}
export default memo(Fourth);
