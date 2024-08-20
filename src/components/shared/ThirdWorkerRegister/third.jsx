import { Formik } from "formik";
import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { RRWorkerInfo, RRWorkerRegisterLevel } from "../../../store/Reducer/workersRegister";

function Third() {
  let dispatch = useDispatch();
  function getImageName(url) {
    let splitUrl=url.split("/")
    return splitUrl[splitUrl.length-1]
  }
  return (
    <Formik
      initialValues={{
        fullBodyImg:""
      }}
      validate={(values) => {
        const errors = {};
        if(!values.fullBodyImg.length>0){
          errors.fullBodyImg="Rasm yuklamadingiz"
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(RRWorkerInfo(values))
        dispatch(RRWorkerRegisterLevel(3))
        setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form
          className="col-12 m-2 d-flex flex-column gap-2"
          onSubmit={handleSubmit}
        >
          {!values?.fullBodyImg 
            ? <div className="row-12 gap-2">
            <label
              htmlFor="fullBodyImg"
              style={{
                fontSize: "0.8rem",
                fontWeight: "600",
                color: errors?.fullBodyImg ? "red" : "",
              }}
            >
              {errors.fullBodyImg ? errors.fullBodyImg : "To’liq bo’yingiz bilan tushgan rasmingizni jo’nating"}
            </label>
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              value={values?.fullBodyImg}
              type="file"
              className=" d-none"
              name="fullBodyImg"
              id="fullBodyImg"
              placeholder="min 16 yosh"
            />
            <label
              htmlFor="fullBodyImg"
              className="card p-5 col-12 rounded-4 d-flex align-items-center justify-content-center" 
              style={{height:"10rem",borderStyle:'dotted'}}
              >
                <i className="bi bi-upload fs-5"></i>
                <div className=" text-center" style={{fontSize:"0.8rem"}}>
                  Faqat bitta rasm yuklash mumkin:(jpg, png, mpeg, svg, psd)
                </div>
              </label>
              <div className="col-12 text-end text-secondary" style={{fontSize:"0.8rem"}}>max:10MB</div>
              </div>
            : <div className="row-12 card p-2 d-flex flex-row justify-content-between align-items-center">
              <div className="d-flex flex-row justify-content-between align-items-center gap-2">
                <img src="https://as1.ftcdn.net/v2/jpg/00/94/42/06/1000_F_94420602_HfnNfwwYnGlUG8ZXszndgoWTLKHXKJ4S.jpg" alt="profile" width="30rem" height="100%"/>
                <div className="">{getImageName(values?.fullBodyImg)}</div>
              </div>
              <i className="bi bi-trash fs-5"></i>
            </div>
          }
          <div className="col-12 my-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="col-12  flex-row card rounded-4 p-2 text-center d-flex justify-content-center align-items-center fw-semibold"
              style={{ background: "var(--color-yellow)" }}
            >
              Keyingi
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
}
export default memo(Third);
