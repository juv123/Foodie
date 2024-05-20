import { useEffect, useState } from "react";
import {CART_LOGO,LOGO_URL } from "../config/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../config/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../config/userContext";
import { useSelector } from "react-redux";
import React from 'react'
window.React = React
const Header=()=>{
    const [btnLog,setLoginout]=useState("Login"); 
    const data=useContext(UserContext);
   // console.log("component renderd");
    useEffect(()=>{
        //console.log('use effect called')
    },[btnLog])
    const onlineStatus=useOnlineStatus();
    //console.log('status'+onlineStatus);
    //REdux-subscribing using store
   const cartItems=useSelector((store)=>store.cart.items);
  // console.log(cartItems)
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-sky-500/50 mb-10">
       <div className="logoContainer">
        <img className="w-20 h-10" src={LOGO_URL}/><h3 className="foodie"><b><i>Foodie</i></b></h3>
    </div>
    <div className="nav-items">
        <ul className="flex p-4 m-4">
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About us</Link></li>
          <li className="px-4"><Link to="/contact">Contact us</Link></li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4">
    <div className="relative py-1.8">
  <div className="t-0 absolute left-3">
    <p className="flex h-1 w-1 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white"><Link to="/cart">({cartItems.length})</Link></p>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="file: mt-0 h-6 w-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
  </svg>
</div></li>
         {/* <li className="px-4"><button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={()=>{
           btnLog==="Login"
           ?setLoginout("Logout")
           :setLoginout("Login")          }
          }>{btnLog}</button></li>*/}
          <li>{data.user}{onlineStatus? "🟢":"🔴"}</li>
        </ul>

    </div>
    </div>
    );
}
export default Header;