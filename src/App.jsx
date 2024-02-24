
import{useForm} from 'react-hook-form'
import { useState } from 'react'
// import { toast, ToastContainer } from 'react-toastify';
import './App.css'

function App() {
  const{register,handleSubmit,formState:{errors}}=useForm()

  const[submit,setSubmit]=useState(false)

 const doneSubmit=(data)=>{
    console.log(data)
    setSubmit(true)
  }




  return (
    <>
     <div>
      <form id='form' onSubmit={handleSubmit(doneSubmit)}>

        {submit?<div className='success-message'>Registration Successful !</div>: null}

        <label>
          <input type='text'
          id='firstname'
          placeholder='Enter First Name'
          {...register("firstName",{required:"Firstname Required"})} />
        </label> {/* we will not use onchange and value bcz instead of storing it we will give reference and instead we will create a object register and will pass the keys eg:firstName to get the value from the object*/}

        <span>{errors.firstName?.message}</span>

        <label>
          <input type='text'
           id='lastname'
           placeholder='Enter Last Name' 
           {...register("LastName",{required:"Lastname Required"})} />
        </label>

        <span>{errors.LastName?.message}</span>

        <label>
          <input type='email'
           id='email'
           placeholder='Enter Email'
          {...register("Email",{required: "Email Required" ,pattern:{value:/^\S+@\S+$/i,message:"Invalid email" }})} />
         </label>

         <span>{errors.Email?.message}</span>

        <label>
          <input type='password'
           id='password' 
           placeholder='Enter Password'
           {...register("Password",{required:"Password Required",
           minLength:{value:4,message:"Password must be more than 4 characters"},
           maxLength:{value:20,message:"Password cannot be more than 20 characters"}})} />
         </label>

         <span>{errors.Password?.message}</span>

        <label><button type='submit'>Submit</button></label>
      </form>
     </div>
    </>
  )
}

export default App
