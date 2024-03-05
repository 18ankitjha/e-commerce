import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

const Login = () => {
  // const router = useRouter()
  // const [name, setName] = useState("")
  const router = useRouter()
  useEffect(() => {
    if(localStorage.getItem("token")){
      router.push("/")
    }
  }, [])
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleChange=(e)=>{
    if(e.target.name==="email"){
      setEmail(e.target.value)
    }else if(e.target.name==="password"){
      setPassword(e.target.value)
    }
  
  }
  const handleSubmit=async (e)=>{
    e.preventDefault()
    const data={
      email,password
    }
    
    let res=await fetch(`/api/login`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    })

    let response=await res.json();
    console.log(response)
    
    setEmail("")
    setPassword("")
    if(response.success){
     localStorage.setItem("token",response.token)
    toast.success(`Welcome ${response.name}`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
      setTimeout(() => {
        
        router.push(`${process.env.NEXT_PUBLIC_HOST}`)
      }, 1000);
    }else{
      toast.error("Invalid Credentials", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
  }
  return (
    <div>
      <ToastContainer />
      <section className="bg-gray-50 light:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="flex flex-col items-center mb-6 text-2xl font-semibold text-gray-900 light:text-white">
            <img className="w-20 h-20 mr-2 rounded-full" src="images/Gardeniary.png" alt="logo" />
            Gardeniary
          </div>
          <div className="w-full bg-white rounded-lg shadow light:border md:mt-0 sm:max-w-md xl:p-0 light:bg-gray-800 light:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl light:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" method='POST' onSubmit ={handleSubmit}>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 light:text-white">Your email</label>
                  <input value={email} onChange={handleChange} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500" placeholder="name@company.com" required="" />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 light:text-white">Password</label>
                  <input value={password} onChange={handleChange} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500" required="" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 light:bg-gray-700 light:border-gray-600 light:focus:ring-primary-600 light:ring-offset-gray-800" required="" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-500 light:text-gray-300">Remember me</label>
                    </div>
                  </div>
                  <Link href="/Forgot" className="text-sm font-medium text-primary-600 text-lime-400 hover:text-lime-500 hover:underline light:text-primary-500">Forgot password?</Link>
                </div>
                <button type="submit" className="w-full text-white bg-lime-400 hover:bg-lime-500   font-medium rounded-lg text-sm  text-bold px-5 py-2.5 text-center 
                 ">Sign In</button>
                <p className="text-sm font-light text-gray-500 light:text-gray-400">
                  Don’t have an account yet?
                  <Link href={"/Signup"} className="font-medium text-lime-400 hover:text-lime-500 text-primary-600 hover:underline light:text-primary-500">Sign up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login