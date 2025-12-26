import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../ResturentMenu";

import MOCK_Menu_DATA from "../mocks/resturent_menu.mock.json";
import { act } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_Menu_DATA),
  })
);

it("should load resturent menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );
  const accordionHeader = screen.getByText("Noodles & Rice (3)");
  fireEvent.click(accordionHeader);
  const menuItemList = screen.getAllByTestId("menu-items");
  expect(menuItemList.length).toBe(3);

  const addButton = screen.getAllByRole("button", { name: "Add +" });

  expect(screen.getByText("Cart (0-items)")).toBeInTheDocument();
  fireEvent.click(addButton[0]);
  const cartCountAfterClick = screen.getByText("Cart (1-items)");

  expect(cartCountAfterClick).toBeInTheDocument();
  fireEvent.click(addButton[1]);
  expect(screen.getByText("Cart (2-items)")).toBeInTheDocument();

  const menuItemListAfterAdd = screen.getAllByTestId("menu-items");
  expect(menuItemListAfterAdd.length).toBe(5);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  expect(screen.getAllByTestId("menu-items").length).toBe(3);
});
