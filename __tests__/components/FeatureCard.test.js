import { render, screen } from "@testing-library/react";
import { FeatureCard } from "../../src/components/Home/Features/FeatureCard";

describe("FeatureCard Component", () => {
  const mockFeature = {
    icon: "assets/images/icons/delivery-van.svg",
    title: "Free Shipping",
    description: "Order over $200",
  };

  it("renders the FeatureCard component with props", () => {
    render(<FeatureCard {...mockFeature} />);

    // Check for the title
    expect(screen.getByText("Free Shipping")).toBeInTheDocument();

    // Check for the description
    expect(screen.getByText("Order over $200")).toBeInTheDocument();

    // Check if the image renders correctly
    const image = screen.getByAltText("Free Shipping");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", mockFeature.icon);
  });
});
