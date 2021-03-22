import { render, screen } from "@testing-library/react";
import AppWrap from "./AppWrap";

test("renders learn react link", () => {
  render(<AppWrap />);
  const linkElement = screen.getByText(/Send and receive money/i);
  expect(linkElement).toBeInTheDocument();
});
