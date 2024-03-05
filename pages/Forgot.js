import React from 'react'
import Link from 'next/link'
import { useEffect } from 'react';
import { useRouter } from 'next/router'
const Forgot = () => {
  const router = useRouter()
  useEffect(() => {
    if(localStorage.getItem("token")){
      router.push("/")
    }
  }, [])
  return (
    <div>
      <section className="bg-gray-50 light:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 mx-auto md:h-[80vh] lg:py-0">
          <div className="flex flex-col items-center mb-6 text-2xl font-semibold text-gray-900 light:text-white">
            <img className="w-20 h-20  rounded-full" src="images/Gardeniary.png" alt="logo" />
            Gardeniary
          </div>
          <div className="w-full bg-white rounded-lg shadow light:border md:mt-0 sm:max-w-md xl:p-0 light:bg-gray-800 light:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl light:text-white">
                Forgot your password?
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 light:text-white">Your email</label>
                  <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500" placeholder="name@company.com" required="" />
                </div>
               
                <button type="submit" className="w-full text-white bg-lime-400 hover:bg-lime-500   font-medium rounded-lg text-sm  text-bold px-5 py-2.5 text-center 
                 ">Continue</button>
                <p className="text-sm font-light text-gray-500 light:text-gray-400">
                 Have an account ?
                  <Link href={"/Login"} className="font-medium text-lime-400 hover:text-lime-500 text-primary-600 hover:underline light:text-primary-500"> Login</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Forgot