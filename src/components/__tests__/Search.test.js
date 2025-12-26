import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import moc_res_list from "../mocks/resturent_list_mock.json";
import { act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(moc_res_list);
    },
  });
});

it("Should search resturent list for (Pasta Palace) text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const resCardListBeforeSearch = screen.getAllByTestId("res-card");
  expect(resCardListBeforeSearch.length).toBe(9);
  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchText = screen.getByTestId("search-resturent");
  fireEvent.change(searchText, { target: { value: "Pasta Palace" } });
  fireEvent.click(searchBtn);
  const resCardListAfterSearch = screen.getAllByTestId("res-card");
  expect(resCardListAfterSearch.length).toBe(1);
});

it("Should filter top rated resturent", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const resCardListBeforeSearch = screen.getAllByTestId("res-card");
  expect(resCardListBeforeSearch.length).toBe(9);
  const topRatedResturentBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  fireEvent.click(topRatedResturentBtn);
  const resCardListAfterSearch = screen.getAllByTestId("res-card");
  expect(resCardListAfterSearch.length).toBe(6);
});
