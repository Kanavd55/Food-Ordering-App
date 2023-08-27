import { render,screen } from "@testing-library/react";
import Navbar from "../Navbar";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

test('Should load Header Component ', () => {
  render(
  <BrowserRouter><Provider store={appStore}>
    <Navbar/>
    </Provider>
    </BrowserRouter>)

    const homeLink=screen.getByText("Home");

    expect(homeLink).toBeInTheDocument();
})
