import { render, screen } from "@testing-library/react";
import LaunchesTable from "../components/commonComponents/LaunchesTable";

describe("Test suite for Launches Table Component", () => {
  test("Launches Table Component is rendered in the DOM", () => {
    render(<LaunchesTable />);
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
    expect(list).toHaveClass("list");
  });
});
