import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

describe("Contact Us page Test Case", () => {
  /* afterAll(()=>{
    console.log("After All") 
  })

  afterEach(()=>{
     console.log("After Each") 
  })

  beforeAll(()=>{
    console.log("Before All")
  })

  beforeEach(()=>{
    console.log("Before Each")
  }) */

  test("Should load Contact Us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    // Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should load button isnide the component", () => {
    render(<Contact />);
    // Assertion
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  test("Should load input inside the componet", () => {
    render(<Contact />);

    const input = screen.getByPlaceholderText("name");
    expect(input).toBeInTheDocument();
  });

  test("Should load 2 input boxes inside the componet", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");
    // console.log(inputBoxes.length);

    expect(inputBoxes.length).toBe(2);
    // or
    //   expect(inputBoxes.length).not.toBe(3);
  });
});
