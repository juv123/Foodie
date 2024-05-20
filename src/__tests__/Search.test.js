import React from 'react';
window.React = React;
import { fireEvent, render,screen } from "@testing-library/react";
import Body from "../../components/Body";
import MOCK_DATA from "../../components/Mocks/MockresList.json";
import { BrowserRouter } from 'react-router-dom';
import "@testing-library/jest-dom";
import {act} from "react-dom/test-utils";
//mock fetch
global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})
beforeAll(()=>{
  console.log("before all test cases");
})
beforeEach(()=>console.log("before each test case"))
afterAll(()=>console.log("after all test cases"))
afterEach(()=>console.log("after each test case"))
//test case
it("should search reslist for Burger",async()=>{
    await act(async() =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeSearch=screen.getAllByTestId("searchCard");
  const searchButton=screen.getByRole("button",{name:"Search"}); 
  const searchInput=screen.getByTestId("searchInput");
  console.log(searchInput);
   fireEvent.change(searchInput, {target: {value:"burger"} });
    fireEvent.click(searchButton);
   const cardsAfterSearch= screen.getAllByTestId("searchCard");
    expect(cardsAfterSearch.length).toBe(2);
    //expect(cardsBeforeSearch.length).toBe(9);
    //screen.debug();
         //console.log(searchInput)
    //console.log(searchButton)
    //expect(searchButton).toBeInTheDocument();
});
it("should load top rated restaurants",async()=>{
    await(act(async()=>
    render(<Body />)))
    const cardsBeforeSearch=screen.getAllByTestId("searchCard");
    expect(cardsBeforeSearch.length).toBe(9);
    const topratedButton=screen.getByRole("button",{name:"Top Rated Restaurants"});
    fireEvent.click(topratedButton);
    const cardsAfterSearch=screen.getAllByTestId("searchCard");
    expect(cardsAfterSearch.length).toBe(8);
});