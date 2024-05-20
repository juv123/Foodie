import React from 'react';
window.React = React;
import { fireEvent, render,screen } from "@testing-library/react";
import MOCK_DATA from "../../components/Mocks/rescardCategory.json";
import { BrowserRouter } from 'react-router-dom';
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../config/appStore";
import {act} from "react-dom/test-utils";
import Restaurant from '../../components/Restaurant';
import Header from '../../components/Header';
import Cart from '../../components/Cart';
//mock fetch
global.fetch=jest.fn(()=>
    Promise.resolve({
        json: ()=>Promise.resolve(MOCK_DATA),
})
);

it("should load resto card category Recommended(20)",async()=>{
    await act(async()=>render(
       
          <Restaurant />
        
    ))
    const accordionHeader=screen.getByText("Recommended(20)");
    fireEvent.click(accordionHeader);
    expect(screen.getAllByTestId("foodItems").length).toBe(20);
 });
it("should load cart(0) initially",async()=>{
    await act(async()=>render(
        <Provider store={appStore}>
                   <BrowserRouter>
        <Header />
            </BrowserRouter>
        </Provider>));
        const cartItemsBeforeAdd=screen.getByText("(0)");
         expect(cartItemsBeforeAdd).toBeInTheDocument();
        //const addButton=screen.getByRole("button",{name:"+"});
        //fireEvent.click(addButton);

 
    })
    it("should add 1 item to cart when click on + button first time",async()=>{
await  act(async()=>render(
    <Provider store={appStore}>
    <BrowserRouter>
    <Header />
    <Restaurant />
       </BrowserRouter>
    </Provider>
))
const cartItemsafterAdd=screen.getAllByRole("button",{name:"+"});
console.log(cartItemsafterAdd)
fireEvent.click(cartItemsafterAdd[0]);
const cartItems=screen.getByText("(1)");
expect(screen.getAllByTestId("foodItems").length).toBe(21)
expect(cartItems).toBeInTheDocument();
    })
    it("should add 2 items when click on + button on second time",async()=>{
        await  act(async()=>render(
            <Provider store={appStore}>
            <BrowserRouter>
            <Header />
            <Restaurant />
               </BrowserRouter>
            </Provider>))
            const cartItemsafterAdd=screen.getAllByRole("button",{name:"+"});
            fireEvent.click(cartItemsafterAdd[1]);
            const cartItems=screen.getByText("(2)");
            expect(screen.getAllByTestId("foodItems").length).toBe(22)
            expect(cartItems).toBeInTheDocument();
    })

    it("should load the clear cart",async()=>{
        await  act(async()=>render(
            <Provider store={appStore}>
            <BrowserRouter>
            <Header />
            <Restaurant />
            <Cart />
               </BrowserRouter>
            </Provider>))
            const clearCartBtn=screen.getByRole("button",{name:"Clear Cart"})
            fireEvent.click(clearCartBtn);
            const emptyCart=screen.getByText("Cart is Empty!");
            expect(screen.getAllByTestId("foodItems").length).toBe(20)
            expect(emptyCart).toBeInTheDocument();
            
    })