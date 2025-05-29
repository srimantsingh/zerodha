import React from "react";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Hero from "../Hero";


describe("Hero Component", () => {
    test("renders Hero image", () => {
        render(<Hero/>);
        const heroImage = screen.getByAltText("Hero Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", "media/image/hero.png");
        }
        );
    });
            