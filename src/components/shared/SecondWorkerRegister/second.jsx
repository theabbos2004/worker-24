import { Field, Formik } from "formik";
import React, { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RRWorkerInfo, RRWorkerRegisterLevel } from "../../../store/Reducer/workersRegister";

function Second() {
  let { abality } = useSelector((store) => store.workerRegister);
  let [isAbality,setIsAbality]=useState(false)
  let dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        age: "",
        height: "",
        abalityChoosed: [],
      }}
      validate={(values) => {
        const errors = {};
        if (values?.age < 16) {
          errors.age = "kamida 16 ga to'lgan bo'lishingiz kerak";
        }
        else if(values?.abalityChoosed.length<1){
          errors.abalityChoosed="min 1 ta qobilyatingizni tanlang"
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        let newValues={...values,job:String(values.abalityChoosed)}
        dispatch(RRWorkerInfo(newValues))
        dispatch(RRWorkerRegisterLevel(2))
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
          className="col mt-2 gap-2"
          onSubmit={handleSubmit}
        >
          <div className="row-12 gap-2">
            <label
              htmlFor="age"
              style={{
                fontSize: "0.8rem",
                fontWeight: "600",
                color: errors?.age ? "red" : "",
              }}
            >
              {errors.age ? errors.age : "yoshingizni kiriting"}
            </label>
            <input
              required
              onChange={handleChange}
              onBlur={handleBlur}
              value={values?.age}
              type="number"
              className="card rounded-4 col-12 p-2 d-flex align-items-center"
              min={16}
              max={110}
              name="age"
              id="age"
              placeholder="min 16 yosh"
            />
          </div>
          <div className="row-12 gap-2">
            <label
              htmlFor="height"
              style={{
                fontSize: "0.8rem",
                fontWeight: "600",
                color: errors.height ? "red" : "",
              }}
            >
              {errors?.height ? errors.height : "bo'yingizni kiriting"}
            </label>
            <input
              required
              onChange={handleChange}
              onBlur={handleBlur}
              value={values?.height}
              type="number"
              max={250}
              min={100}
              className=" text-uppercase card rounded-4 col-12 p-2 d-flex align-items-center"
              placeholder="180"
              id="height"
            />
          </div>
          <div className="row-12 d-flex flex-column gap-2">
            <label
              htmlFor="abality"
              style={{
                fontSize: "0.8rem",
                fontWeight: "600",
                color: errors.abalityChoosed ? "red" : "",
              }}
            >
              {errors?.abalityChoosed
                ? errors.abalityChoosed
                : "Nima ish qo’lingizdan keladi "}
            </label>
            <div
              className="card d-flex flex-row justify-content-between rounded-4 col-12 p-2 align-items-center"
              onClick={()=>setIsAbality(initialState=>!initialState)}
            >
              <div>
                {values?.abality?.choosed ? values?.abality?.choosed : "Tanlov"}
              </div>
              {
                isAbality
                ?<i className="bi bi-chevron-up"></i>
                :<i className="bi bi-chevron-down"></i>
              }
            </div>
            {
              isAbality &&
              <ul
                className="col-12 card rounded-4 p-2 gap-2 m-0"
                role="group"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "10px",
                  listStyleType: "none",
                  padding: 0,
                }}
              >
                {abality?.map((abality, abalityIndex) => (
                  <li
                    key={abalityIndex}
                    className="list-unstyled d-flex align-items-center gap-2"
                  >
                    <Field
                      type="checkbox"
                      name="abalityChoosed"
                      className=""
                      value={abality?.title}
                      onChange={handleChange}
                    />
                    <div>{abality?.title}</div>
                  </li>
                ))}
              </ul>
            }
          </div>
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
export default memo(Second);
