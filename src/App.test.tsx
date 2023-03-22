import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("should render with the title visible", () => {
    render(<App />);
    expect(screen.getByText(/Vite \+ React1/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Click on the Vite and React logos to learn more/i)
    ).toBeInTheDocument();
  });
});
