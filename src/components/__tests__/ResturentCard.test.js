import { render, screen } from "@testing-library/react";
import ResturentCard, {WithPromoted} from "../ResturentCard";
import mockData from "../mocks/resturents_mock.json";
import promotedMockData from "../mocks/resturents_promoted_mock.json";
import "@testing-library/jest-dom";

it("should render ResturentCard component with props data", () => {
  render(<ResturentCard resData={mockData} />);
  const name = screen.getByText("Burger Hub");
  expect(name).toBeInTheDocument();
});

it("Should render ResturentCard Component with Promoted label", () => {
  // Test Higher Order Compoennt : withPromotedLabel()
  const ResturentCardPromoted = WithPromoted(ResturentCard);
  render(<ResturentCardPromoted resData={promotedMockData}/>)
  const promotedLabel = screen.getByText("Promoted");
  expect(promotedLabel).toBeInTheDocument();
});
