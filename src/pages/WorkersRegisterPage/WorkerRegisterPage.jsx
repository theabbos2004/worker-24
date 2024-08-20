import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FirstWorkerRegister, ForthWorkerRegister, SecondWorkerRegister, ThirdWorkerRegister } from "../../components/shared";

function WorkerRegisterPage() {
  let navigate = useNavigate();
  let {level}=useSelector(store=>store.workerRegister)
  return (
    <div 
      className="w-100 min-vh-100"
      style={{backgroundImage:`url(${require("../../assets/img/mountains-skyscape-trees-wallpaper-3840x2400.png")})`,backgroundPosition:'center',backgroundSize:"cover",overflowX:"hidden"}}
      >
      <div className="min-vh-100 col-12 col-md-6 p-3 d-flex flex-column justify-content-center align-items-center bg-white">
        <div className="col-12">
            <button
            className="bg-transparent border-0 p-0"
            style={{ cursor: "pointer" }}
            onClick={() => navigate(-1)}
            >
            <i className="bi bi-arrow-left fs-4"></i>
            </button>
        </div>
        <div className="col-10 d-flex justify-content-center">
          <div className=" col-8 d-flex flex-column">
            <div className="row-12 text-center fs-4 fw-bolder">Worker 24</div>
            <div className="col-12 d-flex justify-content-center">
                {level?.map((levelDrop ,levelDropIndex)=>
                <div key={levelDropIndex} className=" d-flex align-items-center gap-1 p-1">
                    <div className=" d-flex justify-content-center align-items-center" style={{width:"2rem",height:"2rem",borderRadius:"9rem",border:"0.15rem solid var(--color-yellow)",backgroundColor:levelDrop?.active ?"var(--color-yellow)":""}}>{levelDrop?.id}</div>
                    {(levelDropIndex+1 !== level?.length)?
                        <div style={{width:"2rem",height:'0.15rem',backgroundColor:"var(--color-yellow)"}}></div>
                    :""
                    }
                </div>
                )}
            </div>
            <div className="row-12 text-center fw-bolder" style={{
                fontSize:"1.1rem"
            }}>
              Ishchi bo’lib ro’yhatdan o’tish
            </div>
            {level?.map((level, levelIndex) =>
                level?.id === 1 && level?.show 
                ? <FirstWorkerRegister key={levelIndex}/>
                : level?.id === 2 && level?.show 
                ? <SecondWorkerRegister key={levelIndex}/>   
                : level?.id === 3 && level?.show
                ? <ThirdWorkerRegister key={levelIndex}/>
                : level?.id === 4 && level?.show
                ? <ForthWorkerRegister key={levelIndex}/>
                :
                ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(WorkerRegisterPage);
