import { render,screen } from "@testing-library/react";
import Grocery from "../Grocery";
import "@testing-library/jest-dom";

describe("Grocery page test cases",()=>{
  
test("Should load Grocery component",()=>{

    render(<Grocery/>)

    const data=screen.getByRole("heading");

    expect(data).toBeInTheDocument();
  })

});