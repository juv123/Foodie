import Contact from "../../components/Contact";
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from 'react'
window.React = React
describe("Contact us page Test cases group",()=>{
  test("should load contact component",()=> {
    render(<Contact/>);
    const heading=screen.getByRole('heading');
    const text=screen.getByText('Submit');
    expect(text).toBeInTheDocument();
  //expect(heading).toBeInTheDocument();
});
test("should load input name from Contact component",()=>{
  render(<Contact />)
const inputName=screen.getByPlaceholderText("Name");
expect(inputName).toBeInTheDocument();
});
it("should load 2 input boxes on Contact component",()=>{
  render(<Contact />)
  const inputBoxes=screen.getAllByRole("textbox");
  expect(inputBoxes.length).toBe(2)
  //use either test or it 
})
});
