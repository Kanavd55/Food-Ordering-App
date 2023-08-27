import { fireEvent, render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../Body";
import MOCK_DATA from "../mocks/resListDataMock.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json :()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it('should render the Body component with search button functionality', async () => {
  await act(async ()=>render(
  <BrowserRouter><Body/></BrowserRouter>) ) ;

  const searchBtn=screen.getByTestId("searchBtn");
  expect(searchBtn).toBeInTheDocument();
  const searchInput=screen.getByPlaceholderText("Restaurant or Cuisine");
  expect(searchInput).toBeInTheDocument();
  const resCard=screen.getAllByTestId("resCard");
  expect(resCard.length).toBe(20);
  fireEvent.change(searchInput,{
    target:{
        value:"pizza",
    }
  })

  fireEvent.click(searchBtn);
  const resCardAfter=screen.getAllByTestId("resCard");
  expect(resCardAfter.length).toBe(4);
});

it("should check top rated button functionality",async ()=>{
    await act(async ()=>render(<BrowserRouter><Body/></BrowserRouter>));
    const resCard=screen.getAllByTestId("resCard");
    expect(resCard.length).toBe(20);
    const topRatedBtn=screen.getByTestId("topRatedBtn");
    expect(topRatedBtn).toBeInTheDocument();
    fireEvent.click(topRatedBtn);
    const resCardAfter=screen.getAllByTestId("resCard");
    expect(resCardAfter.length).toBe(15);

})

