import { render, screen } from "@testing-library/react";

import LikedLaunch from "../components/commonComponents/LikedLaunch";

describe("Test suite for Liked Launch Component", () => {
  test("Liked Launch Component is rendered in the DOM", () => {
    render(<LikedLaunch />);
    const listItem = screen.getByRole("listitem");
    expect(listItem).toBeInTheDocument();
  });
});
