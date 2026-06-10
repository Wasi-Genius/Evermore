import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

// A dummy component to test rendering layout
const DemoComponent = () => <h1>Welcome to Evermore</h1>;

describe("Frontend Component Rendering", () => {
  it("should successfully render text to the virtual screen", () => {
    render(<DemoComponent />);
    
    // Check if the heading exists on our simulated browser screen
    const heading = screen.getByText("Welcome to Evermore");
    expect(heading).toBeInTheDocument();
  });
});