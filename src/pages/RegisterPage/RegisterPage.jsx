import React, { memo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Field, Formik } from 'formik'
import { useDispatch } from 'react-redux'
import { createUser } from '../../store/Reducer/usersRegister'

function RegisterPage() {
  const [createUserErr,setCreateUserErr]=useState(null)
  let navigate=useNavigate()
  let dispatch=useDispatch()
  return (
    <div 
      className='vw-100 min-vh-100 d-flex justify-content-center align-items-center'
      style={{backgroundImage:`url(${require("../../assets/img/mountains-skyscape-trees-wallpaper-3840x2400.png")})`,backgroundPosition:'center',backgroundSize:"cover"}}
      >
      <div className='card rounded-5 col py-3 p-4 gap-3' style={{maxWidth:"25rem"}}>
        <div className='row-12 d-flex justify-content-center align-items-center'>
          <div className='col-3' style={{cursor:"pointer"}} onClick={()=>navigate(-1)}>
            <i className="bi bi-arrow-left fs-4" ></i>
          </div>
          <div className='col-6 text-center fs-4 fw-bolder'>Worker ID</div>
          <div className='col-3'></div>
        </div>
        <div className='row-12 text-center text-capitalize fw-bolder'>ro’yhatdan o’tish</div>
        {
          createUserErr && <div className='row-12 text-danger text-center text-capitalize fw-bolder'>{createUserErr}</div>
        }
        <Formik 
            initialValues={{ fullName:'',email: '', password: '' , returnPassword:"", faq:false}}
            validate={values => {
              const errors = {};
              if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) && values.email
              ){
                errors.email = 'email xato';
              }
              else if(values.password.length<8 && values.password){
                errors.password="Parol uzunligi 8 belgidan kam bo'lmasligi kerak"
              }
              else if(values.password!==values.returnPassword && values.returnPassword){
                errors.returnPassword="parol maos kelmadi"
              }
              else if(!values.faq){
                errors.faq="maxfiylik siyosatiga rozi bo'ling"
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              let {fullName,email,password}=values
              dispatch(createUser({name:fullName,email,password}))
              .then(res=>{
                if(!res?.error){
                  navigate("/")
                }
                else{
                  setCreateUserErr(res?.payload?.message)
                }
              })
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
        <form className='col-12 d-flex flex-column gap-2' onSubmit={handleSubmit}>
          <div className='row-12 gap-2'>
            <label htmlFor="fullName" style={{fontSize:"0.9rem",color:errors?.fullName ? "red":""}}>{errors.fullName?errors.fullName:"Ism, Familiyangizni kiriting"}</label>
            <input
              required
              onChange={handleChange}
              onBlur={handleBlur}
              value={values?.fullName}
              type='text' 
              className='card rounded-4 col-12 p-2 d-flex align-items-center' 
              name="fullName"
              id='fullName' 
              placeholder='Alisher Fayzullayev'/>
          </div>
          <div className='row-12 gap-2'>
            <label htmlFor="email" style={{fontSize:"0.9rem",color:errors.email?"red":""}}>{errors?.email?errors.email:"E-mailingizni kiriting"}</label>
            <input
              required
              onChange={handleChange}
              onBlur={handleBlur}
              value={values?.email}
              type='text' 
              className='card rounded-4 col-12 p-2 d-flex align-items-center' 
              placeholder='aaaaaaaaaa@gmail.com'
              id='email'/>
          </div>
          <div className='row-12 gap-2'>
            <label htmlFor="password" style={{fontSize:"0.9rem",color:errors.password?"red":""}}>{errors?.password?errors.password:"Parolingizni kiriting"}</label>
            <input
              required
              onChange={handleChange}
              onBlur={handleBlur}
              value={values?.password}
              type='text' 
              minLength={8}
              className='card rounded-4 col-12 p-2 d-flex align-items-center' 
              placeholder='********'
              id='password'/>
          </div>
          <div className='row-12 gap-2'>
            <label htmlFor="returnPassword" style={{fontSize:"0.9rem",color:errors.returnPassword? "red":""}}>{errors?.returnPassword?errors.returnPassword:"Qayta parolingizni kiriting"}</label>
            <input
              required
              onChange={handleChange}
              onBlur={handleBlur}
              value={values?.returnPassword}
              type='text' 
              minLength={8}
              className='card rounded-4 col-12 p-2 d-flex align-items-center' 
              placeholder='********'
              id='returnPassword'/>
          </div>
          <div className='row-12 gap-2'>
            <div className="form-check">
              <Field type="checkbox" name="faq" className="form-check-input" id="flexCheckChecked"/>
              <label className="form-check-label" htmlFor="flexCheckChecked" style={{color:errors.faq? "red":""}}>
                {errors.faq?errors.faq:"Maxfiylik siyosatini qabul qilish"}
              </label>
            </div>
          </div>
          <div className='col-12'>
            <button 
              type='submit' 
              disabled={isSubmitting} 
              className='col-12  flex-row card rounded-4 p-2 text-center d-flex justify-content-center align-items-center text-white fw-semibold' 
              style={{background:"var(--color-gray-1)"}}>
              Tayyor
            </button>
          </div>
        </form>
       )}
        </Formik>
      </div>
    </div>
  )
}

export default memo(RegisterPage)