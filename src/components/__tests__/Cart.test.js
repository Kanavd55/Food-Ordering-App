import { fireEvent, render,screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import resMenuMockData from "../mocks/resMenuMockData.json";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import Navbar from "../Navbar";
import Cart from "../Cart";


global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json :()=>{
            return Promise.resolve(resMenuMockData)
        }
    })
})

it("Should load Restaurant Component",async ()=>{
    await act(async()=>render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Navbar/>
            <RestaurantMenu/>
            <Cart/>
            </Provider>
            </BrowserRouter>
        )
    )
    
    const accordionHeader=screen.getByText("What’s New-(3)");

    expect(accordionHeader).toBeInTheDocument();

    fireEvent.click(accordionHeader);

    const foodItem=screen.getByText("Coca-cola Masala");

    expect(foodItem).toBeInTheDocument();

    const itemCards=screen.getAllByTestId("itemCard");

    expect(itemCards.length).toBe(3);

    const addToCartBtns=screen.getAllByRole("button",{name:"Add to cart"});

    fireEvent.click(addToCartBtns[0]);

    const cartHeader=screen.getByText("Cart 🛒1");

    expect(cartHeader).toBeInTheDocument();

    fireEvent.click(cartHeader);

    const item=screen.getByTestId("cartItem");

    expect(item).toBeInTheDocument();
})