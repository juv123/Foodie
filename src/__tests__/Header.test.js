import Header from "../../components/Header";
import { fireEvent, render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from 'react'
import { Provider } from "react-redux";
import appStore from "../../config/appStore";
import { BrowserRouter } from "react-router-dom";
window.React = React
it("should load login button in Header component",()=>{
    render( <BrowserRouter>
    <Provider store={appStore}>
 <Header />
 </Provider>
 </BrowserRouter>);
 const loginButton=screen.getByRole("button",{name:"Login"});//Querying
 expect(loginButton).toBeInTheDocument();//Asserting
});
it("should load cart in Header Component",()=>{
    render( <BrowserRouter>
        <Provider store={appStore}>
     <Header />
     </Provider>
     </BrowserRouter>);
    // const cartItems=screen.getByText(/cart/);//using reg exp
     //expect(cartItems).toBeInTheDocument();
});
it("should test logout button loaded when click on login button",()=>{
render( <BrowserRouter>
        <Provider store={appStore}>
     <Header />
     </Provider>
     </BrowserRouter>);
     const loginButton=screen.getByRole("button",{name:"Login"});
     fireEvent.click(loginButton);
     const logoutButton=screen.getByRole("button",{name:"Logout"});
     expect(logoutButton).toBeInTheDocument();
});