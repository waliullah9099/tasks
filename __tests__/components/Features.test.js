import { render, screen } from "@testing-library/react";
import Features from "../../src/components/Home/Features/Features";

describe("Features Component", () => {
  it("renders the Features component correctly", () => {
    render(<Features />);

    // Check for the number of FeatureCards rendered
    const featureCards = screen.getAllByTestId("feature-card");
    expect(featureCards).toHaveLength(3);

    // Check for specific feature texts
    expect(screen.getByText("Free Shipping")).toBeInTheDocument();
    expect(screen.getByText("Order over $200")).toBeInTheDocument();
    expect(screen.getByText("Money Returns")).toBeInTheDocument();
    expect(screen.getByText("30 days money returns")).toBeInTheDocument();
    expect(screen.getByText("24/7 Support")).toBeInTheDocument();
    expect(screen.getByText("Customer support")).toBeInTheDocument();
  });
});
