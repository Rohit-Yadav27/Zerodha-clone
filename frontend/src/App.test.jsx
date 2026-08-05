import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import Hero from "./landing_page/home/Hero";

describe("Hero Component", () => {
  test("render hero image", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("Hero Image");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
  });
});
