import React, { Suspense, useEffect, useState } from "react";
import { lazy } from "react";
import ReactDOM from "react-dom/client";
import {data as swiggyRestaurantList} from '../config/data.js'
import Header from "../components/Header.js";
import Body from "../components/Body.js";
import { createBrowserRouter,Outlet,RouterProvider} from "react-router-dom";
import About from "../components/About.js";
import Contact from "../components/Contact.js";
import Error from "../components/Error.js";
import Restaurant from "../components/Restaurant.js";
import UserContext from "../config/userContext.js";
const Grocery=lazy(()=>import("../components/Grocery.js"));//lazy loading
//import Grocery from "../components/Grocery.js";
import { Provider } from "react-redux";
import appStore from "../config/appStore.js";
import Cart from "../components/Cart.js";
//------Food app



const AppLayout=()=>{

    const [userName,setUserName]=useState();
    useEffect(()=>{
        const data = {
            name:"Admin",
        };
        setUserName(data.name);
    },[]);
   
    return(
        <Provider store={appStore}>
        <UserContext.Provider value={{user:userName,setUserName}}>
        <div className="app">
           
           <Header />
          
          <Outlet />
        </div>
        </UserContext.Provider>
        </Provider>
    );
};
const appRouter=createBrowserRouter([

        
        {
                path: "/",
                element: <AppLayout />,
                children:[
                    {
                        path: "/",
                        element: <Body />,
                       
                       },
                    {
                        path: "/about",
                        element: <About />,
                       
                       },
                       {
                           path:"/contact",
                           element:<Contact />,
                         
                        
                       },
                       {
                        path:"/grocery",
                        element:<Suspense fallback={<h1>loading</h1>}><Grocery /></Suspense>,
                      
                     
                    },
                       {
                        path:"/restaurants/:resId",
                        element:<Restaurant />,
                      
                     
                    },
                    {
                        path:"/cart",
                        element:<Cart/>
                    }
                ],
                errorElement:<Error />,
            },
       
   ]);
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />);
//root.render(<AppLayout />)

