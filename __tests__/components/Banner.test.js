/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Banner from "../../src/components/Home/Banner";

describe("Banner Component", () => {
  beforeEach(() => {
    render(<Banner />);
  });

  it("renders the main heading correctly", () => {
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass(
      "text-4xl md:text-6xl text-gray-800 font-medium mb-4 capitalize"
    );
    expect(heading.textContent.replace(/\s+/g, " ").trim()).toBe(
      "best collection for home decoration"
    );
  });

  it("renders the descriptive paragraph", () => {
    const paragraph = screen.getByText(
      /Lorem, ipsum dolor sit amet consectetur/i
    );
    expect(paragraph).toBeInTheDocument();
  });

  it("renders the Shop Now button with correct styling", () => {
    const shopNowButton = screen.getByRole("link", { name: /shop now/i });
    expect(shopNowButton).toBeInTheDocument();
    expect(shopNowButton).toHaveAttribute("href", "#");
    expect(shopNowButton).toHaveClass(
      "bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md hover:bg-transparent hover:text-primary duration-300"
    );
  });

  it("renders the banner with correct background image and styling", () => {
    const bannerDiv = document.querySelector(
      ".bg-cover.bg-no-repeat.bg-center"
    );
    expect(bannerDiv).toBeInTheDocument();
    expect(bannerDiv).toHaveClass("bg-cover bg-no-repeat bg-center py-36");
    expect(bannerDiv).toHaveStyle({
      backgroundImage: "url('assets/images/banner-bg.jpg')",
    });
  });

  it("renders the container div", () => {
    const containerDiv = document.querySelector(".container");
    expect(containerDiv).toBeInTheDocument();
  });

  it("has responsive text size classes on heading", () => {
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading.className).toContain("text-4xl");
    expect(heading.className).toContain("md:text-6xl");
  });
});
