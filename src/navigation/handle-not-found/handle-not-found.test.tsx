import { render, screen } from "@testing-library/react";
import Component from "./handle-not-found";

test("renders page not found text", () => {
  render(<Component />);

  const textElement = screen.getByText(/page not found/i);
  expect(textElement).toBeInTheDocument();
});
