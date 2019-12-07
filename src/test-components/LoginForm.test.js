import React from "react";
// import Enzyme from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
// import { LoginForm } from "../components";

// Enzyme.configure({ adapter: new Adapter() });

// describe("<LoginForm/>", () => {
//   let mockForm;
//   const setState = jest.fn();
//   const useStateSpy = jest.spyOn(React, "useState");
//   useStateSpy.mockImplementation(init => [init, setState]);

//   beforeEach(() => {
//     mockForm = Enzyme.shallow(<LoginForm />);
//   });

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   describe("Email Input", () => {
//     it("Updates the input when a user types in a value", () => {
//       mockForm
//         .find(".emailinput")
//         .simulate("change", { target: { value: "ozal@aol.com" } });
//       console.log(mockForm.state("email"));
//     });
//   });
// });
import { render, fireEvent, getByTestId } from "@testing-library/react";
import { LoginForm } from "../components";

it("App loads with initial state of 0", () => {
  const { container } = render(<LoginForm />);
  const countValue = getByTestId(container, "email");
  expect(countValue.textContent).toBe("");
});
