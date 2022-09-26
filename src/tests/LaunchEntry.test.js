import { render, screen } from "@testing-library/react";
import LaunchEntry from "../components/commonComponents/LaunchEntry";

describe("Test suite for Launch Entry Component", () => {
  test("Launch Entry Component is rendered in the DOM", () => {
    render(<LaunchEntry />);
    const listItem = screen.getByRole("listitem");
    expect(listItem).toBeInTheDocument();
  });
});
