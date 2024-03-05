import React from "react";
import Image from "next/image";
import logo from "../public/images/Gardeniary.png";
import {
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import Link from "next/link";
import { useRef } from "react";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Navbar = ({
  user,
  logout,
  cart,
  addtoCart,
  removeFromCart,
  clearCart,
  subTotal,
}) => {
  // console.log(cart,addtoCart,removeFromCart,clearCart,subTotal);
  const [dropDown, setdropDown] = useState(false);
  
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  const ref = useRef();
  return (
    <div className="flex flex-col md:flex-row md:justify-start  justify-center items-center  text-gray-600 bg-white mb-1 shadow-xl ">
      <ToastContainer/>
      <div className="logo mx-5">
        <Link href={"/"}>
          <Image
            src={logo.src}
            width={60}
            height={20}
            className="w-auto"
            alt=""
          />
        </Link>
      </div>
      <div className="nav">
        <ul className="flex space-x-4 font-bold md:text-md">
          <Link href={"/Plants"} className="hover:text-green-400 ">
            <li>Plants</li>
          </Link>
          <Link href={"/Seed"} className="hover:text-green-400 ">
            <li>Seed</li>
          </Link>
          <Link href={"/Tools"} className="hover:text-green-400 ">
            <li>Tools</li>
          </Link>
          <Link href={"/Pots"} className="hover:text-green-400 ">
            <li>Pots</li>
          </Link>
        </ul>
      </div>
      <div className="cart cursor-pointer items-center absolute right-0 top-10 md:top-6 mx-5 flex">
      {dropDown && <div onMouseEnter={()=>(setdropDown(true))}
            onMouseLeave={()=>(setdropDown(false))} className="absolute right-4 md:top-6 top-4 z-10 bg-green-500 text-white text-sm font-medium rounded-md text-center w-32">
        <ol>
         <Link href={'/myaccount'}> <li className="hover:bg-green-600 hover:font-bold py-1">My account</li></Link>
         <Link href={'/Orders'}> <li className="hover:bg-green-600 hover:font-bold py-1">Orders</li></Link>
          <li className="hover:bg-green-600 hover:font-bold py-1 cursor-pointer" onClick={logout}>Logout</li>
        </ol>
      </div>}
        {user.value && (
          <MdAccountCircle
            onMouseEnter={()=>(setdropDown(true))}
            onMouseLeave={()=>(setdropDown(false))}
            className="text-xl md:text-2xl text-blue"
          />
        )} 
        

        {!user.value && (
          <Link href={"/Login"}>
            <button className="bg-green-500 px-2 py-1 rounded-md text-sm text-white  border-1 border-black">
              Login
            </button>
          </Link>
        )}
        <AiOutlineShoppingCart
          className="text-xl md:text-2xl ml-2 "
          onClick={toggleCart}
        />
      </div>
      {/* <div
        ref={ref}
      className={`h-full w-72 sideCart absolute top-0 right-0 bg-green-100 py-10 px-8 z-10 transform transition-transform ${Object.keys(cart).length!=0? 'translate-x-0':'translate-x-full'}`}
      > */}

      <div
        ref={ref}
        className={`h-full  w-72 sideCart absolute top-0 right-0 bg-green-100 py-10 px-8 z-10 transform transition-transform translate-x-full`}
      >
        <h2 className="font-bold text-xl text-center">Shopping cart</h2>
        <span
          className="absolute top-8 right-4 md:top-4 md:right-2   cursor-pointer text-2xl text-green-900"
          onClick={toggleCart}
        >
          <AiFillCloseCircle></AiFillCloseCircle>
        </span>
        <ol className="list-decimal font-semibold text-sm">
          {(cart == null || Object.keys(cart).length === 0) && (
            <div className="my-4 ">No items in the cart!!</div>
          )}
          {cart != null &&
            Object.keys(cart).map((k) => {
              return (
                <li key={k}>
                  <div className="item flex my-3">
                    <div className="w-2/3 font-semibold">
                      {cart[k].name}({cart[k].size})/{cart[k].variant}{" "}
                    </div>
                    <div className="w-1/3  flex items-center justify-center font-semibold text-lg">
                      {" "}
                      <AiFillMinusCircle
                        onClick={() => {
                          removeFromCart(
                            k,
                            1,
                            cart[k].price,
                            cart[k].name,
                            cart[k].size,
                            cart[k].variant
                          );
                        }}
                        className="mx-1 text-green-500 cursor-pointer"
                      />
                      <span className="text-sm"> {cart[k].qty}</span>
                      <AiFillPlusCircle
                        onClick={() => {
                          addtoCart(
                            k,
                            1,
                            cart[k].price,
                            cart[k].name,
                            cart[k].size,
                            cart[k].variant
                          );
                        }}
                        className="mx-1 text-green-500 cursor-pointer"
                      />{" "}
                    </div>
                  </div>
                </li>
              );
            })}
        </ol>
        {cart != null && Object.keys(cart).length != 0 && (
          <div className="font-bold my-6">
            SubTotal:{subTotal === 0 ? "" : subTotal}
          </div>
        )}
        <div className="flex ">
          <Link href={"/Checkout"}>
            <button className="flex mr-2 text-gray-100 bg-green-500 border-0 py-2 px-2 focus:outline-none hover:bg-green-700 rounded text-sm">
              <BsFillBagCheckFill className="m-1" />
              Checkout
            </button>
          </Link>
          <button
            onClick={clearCart}
            className="flex mr-2 text-gray-100 bg-green-500 border-0 py-2 px-2 focus:outline-none hover:bg-green-700 rounded text-sm"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
