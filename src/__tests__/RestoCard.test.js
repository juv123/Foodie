import "@testing-library/jest-dom";
import React from 'react';
window.React = React;
import { render,screen } from "@testing-library/react";
import RestoCard, { Promoted} from "../../components/RestoCard";
import restoCard from "../../components/Mocks/restoCard.json";
describe("Testcases for Restocard",()=>{
//Test case for HOC 
it("should render restaurant card with promoted label ",()=>{
    const WrapPromoted = Promoted(RestoCard);
    render(<WrapPromoted resData={restoCard} />);
    const label = screen.getByText("Promoted");
    expect(label).toBeTruthy();
});
it("should load restocard component with props",()=>{
    render(<RestoCard resData={restoCard} />);
    const restocardItem=screen.getByText("Louis Burger"); //Test passed
    //const restocardItem=screen.getByText("KFC");            //Test failed  Error: TestingLibraryElementError: Unable to find an element with the text: KFC. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.
    expect(restocardItem).toBeInTheDocument();
});

});

