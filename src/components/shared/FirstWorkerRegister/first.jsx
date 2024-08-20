import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { Field, Formik } from "formik";
import { RRWorkerInfo, RRWorkerRegisterLevel } from "../../../store/Reducer/workersRegister";
import MaskedInput from "react-text-mask";

function First() {
  let dispatch=useDispatch()
  
  return (
    <Formik
      initialValues={{
        fullName: "",
        pasport: "",
        email: "",
        phone: "",
        adress: "",
      }}
      validate={(values) => {
        console.log();
        const errors = {};
        if (values?.fullName.split("").length < 2) {
          errors.fullName = "Ism familyangini to'liq kiriting";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) &&
          values.email
        ) {
          errors.email = "email xato";
        } 
        else if (values?.pasport?.replace(/[^a-zA-Z\d]/g, '').length !== 9) {
          errors.pasport = "pasport raqami xato";
        }
        else if (values?.phone?.replace(/[^\d]/g, '').length !== 12) {
          errors.phone = "telefon raqami xato";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        let newValues = { ...values, pasport: values?.pasport.toUpperCase()};
        dispatch(RRWorkerInfo(newValues))
        dispatch(RRWorkerRegisterLevel(1))
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
          className="col-12 m-2 d-flex flex-column gap-3"
          onSubmit={handleSubmit}
        >
          <div className="row-12 gap-2">
            <label
              htmlFor="fullName"
              style={{
                fontSize: "0.8rem",
                fontWeight: "600",
                color: errors?.fullName ? "red" : "",
              }}
            >
              {errors.fullName
                ? errors.fullName
                : "Ism, Familiyangizni kiriting"}
            </label>
            <input
              required
              onChange={handleChange}
              onBlur={handleBlur}
              value={values?.fullName}
              type="text"
              className="card rounded-4 col-12 p-2 d-flex align-items-center"
              name="fullName"
              id="fullName"
              placeholder="Alisher Fayzullayev"
            />
          </div>
          <div className="row-12 gap-2">
            <label
              htmlFor="Pasport"
              style={{
                fontSize: "0.8rem",
                fontWeight: "600",
                color: errors.pasport ? "red" : "",
              }}
            >
              {errors?.pasport ? errors.pasport : "Pasport seriyasini kiriting"}
            </label>
            <Field name="pasport">
                {({ field }) => (
                  <MaskedInput
                    {...field}
                    mask={[/[a-zA-Z]/,/[a-zA-Z]/," ",/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,]}
                    placeholder="AA 9999999"
                    className=" text-uppercase card rounded-4 col-12 p-2 d-flex align-items-center"
                  />
                )}
              </Field>
          </div>
          <div className="row-12 gap-2">
            <label
              htmlFor="email"
              style={{
                fontSize: "0.8rem",
                fontWeight: "600",
                color: errors.email ? "red" : "",
              }}
            >
              {errors?.email ? errors.email : "emailingizni kiriting"}
            </label>
            <input
              required
              onChange={handleChange}
              onBlur={handleBlur}
              value={values?.email}
              type="text"
              className="card rounded-4 col-12 p-2 d-flex align-items-center"
              placeholder="user@gmail.com"
              id="email"
            />
          </div>
          <div className="row-12 gap-2">
              <label
                htmlFor="phone"
                style={{
                  fontSize: "0.8rem",
                  fontWeight: "600",
                  color: errors.phone ? "red" : "",
                }}
              >
                {errors?.phone ? errors.phone : "emailingizni kiriting"}
              </label>
              <Field name="phone">
                {({ field }) => (
                  <MaskedInput
                    {...field}
                    mask={['+','9','9','8',' ','(',/[1-9]/,/\d/,')',' ',/\d/,/\d/,/\d/,'-',/\d/,/\d/,'-',/\d/,/\d/]}
                    placeholder="+998 (__) ___-__-__"
                    className="form-control"
                  />
                )}
              </Field>
          </div>
          <div className="row-12 gap-2">
            <label
              htmlFor="adress"
              style={{
                fontSize: "0.8rem",
                fontWeight: "600",
                color: errors.adress ? "red" : "",
              }}
            >
              {errors?.adress
                ? errors.adress
                : "Yashash manzilingizni to’liq kiriting"}
            </label>
            <input
              required
              onChange={handleChange}
              onBlur={handleBlur}
              value={values?.adress}
              type="text"
              className="card rounded-4 col-12 p-2 d-flex align-items-center"
              placeholder="Yunusobod tumani, Bodomzor, Amir Temur 108"
              id="adress"
            />
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
export default memo(First)