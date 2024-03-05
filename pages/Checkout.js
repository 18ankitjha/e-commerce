import React from 'react'
import {
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import {MdOutlinePayment} from "react-icons/md";
import { BsFillBagCheckFill } from "react-icons/bs";
import Link from "next/link";
import Head from 'next/head';
import Script from 'next/script';

const Checkout = ({ cart, addtoCart, removeFromCart, clearCart, subTotal }) => {
  const intiatepayment=()=>{
      ipcongi
  }
  return (
    <div className='container m-auto'>
      <Head><meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"/>
      </Head>
      {/* <Script type="application/javascript" src={`${process.env.PAYTM_HOST}/merchantpgpui/checkoutjs/merchants/${process.env.PAYTM_MKID}.js`} onload="onScriptLoad();" crossorigin="anonymous">
        
      </Script> */}
      <h1 className='font-bold  text-3xl my-8 text-center'>Checkout</h1>
      <h2 className='px-16 ml-2 font-semibold text-xl my-4'> 1.Delivery Details</h2>
      <div className="mx-auto flex px-16 mt-10 flex-col md:flex-row
       ">
        <div className="px-2 md:w-1/2 " >

          <div className=" mb-4">
            <label htmlFor="name" className="leading-7  text-sm text-gray-600">Name</label>
            <input type="email" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>

        </div>
        <div className="px-2 md:w-1/2 " >

          <div className=" mb-4">
            <label htmlFor="email" className="leading-7  text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>

        </div>

      </div>

      <div className="mx-auto flex px-16  flex-col md:flex-row ">
        <div className="px-2 w-full " >

          <div className=" mb-4">
            <label htmlFor="Address" className="leading-7  text-sm text-gray-600">Address</label>

            <textarea id="Address" cols="10" rows="2" name="Address" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
          </div>

        </div>
      </div>

      <div className="mx-auto flex px-16  flex-col md:flex-row ">
        <div className="px-2 md:w-1/2 " >
          <div className=" mb-4">
            <label htmlFor="phone" className="leading-7  text-sm text-gray-600">Phone</label>
            <input type="phone" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="px-2 md:w-1/2 " >
          <div className=" mb-4">
            <label htmlFor="City" className="leading-7  text-sm text-gray-600">City</label>
            <input type="text" id="City" name="City" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>

      </div>

      <div className="mx-auto flex px-16  flex-col  ">
        <div className="px-2 md:w-1/2 " >
          <div className=" mb-4">
            <label htmlFor="state" className="leading-7  text-sm text-gray-600">State</label>
            <input type="text" id="state" name="state" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="px-2 md:w-1/2 " >
          <div className=" mb-4">
            <label htmlFor="Pincode" className="leading-7  text-sm text-gray-600">Pincode</label>
            <input type="text" id="Pincode" name="Pincode" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>

      </div>

      <h2 className='px-16 ml-2 font-semibold text-xl my-4'> 2.Review your items & Pay</h2>
      <div className="mx-auto  px-16 mt-10 
       ">

        <div
          className="h-full  sideCart my-4 p-8 z-10 bg-green-300"
        >
          <ol className="list-decimal font-semibold">
            {Object.keys(cart).length === 0 && <div className="my-4 ">No items in the cart!!</div>}
            {Object.keys(cart).map((k) => {
              return (
                <li key={k}>
                  <div className="item flex my-3">
                    <div className="font-semibold w-2/5">{cart[k].name} ({cart[k].size})/({cart[k].variant}) </div>
                    <div className="w-3/5  flex items-center justify-center font-semibold text-lg">
                      {" "}
                      <AiFillMinusCircle onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className="mx-1 text-green-500 cursor-pointer" />
                      <span className="text-sm"> {cart[k].qty}</span>
                      <AiFillPlusCircle onClick={() => { addtoCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className="mx-1 text-green-500 cursor-pointer" />{" "}
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>


          <span className='font-medium'> Subtotoal: {subTotal}</span>
        </div>
        {/* Payment */}
        <div className="my-3">
        <Link href={'/Checkout'}>
          <button className="flex  text-gray-100 bg-blue-500 border-0 py-2 px-2 focus:outline-none hover:bg-blue-700 rounded text-sm">
            <MdOutlinePayment className="m-1" />
            Pay ₹{subTotal}
          </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Checkout