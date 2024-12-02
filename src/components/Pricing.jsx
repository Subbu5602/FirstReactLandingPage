import React from "react";
import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";

// The Pricing component represents the pricing section of the page.
const Pricing = () => {
  return (
    // A Section wrapper for the entire component with an "overflow-hidden" class to ensure no overflow content is visible.
    <Section className="overflow-hidden" id="pricing">
      {/* This div contains decorative elements and sets the z-index to layer above other content */}
      <div className="container relative z-2">
        {/* A hidden container(containing sphere and small planets,only for lg devices) used for decorative purposes */}
        <div className="relative hidden justify-center mb-[6.5rem] lg:flex">
          {/* big colourful sphere */}
          <img
            src={smallSphere}
            alt="Sphere"
            height={255}
            width={255}
            className="relative z-1"
          />
          {/* A div containing the image of the small planets behind big sphere, positioned in the center of the container */}
          <div className="absolute top-1/2 left-1/2 pointer-events-none w-[60rem] -translate-x-1/2 -translate-y-1/2">
            <img
              src={stars} 
              alt="Stars"
              className="w-full"
              height={400}
              width={950}
            />
          </div>
        </div>

        {/* Heading component to display the section title and subheading */}
        <Heading tag="Get Started" title="Pay Once, Use Forever" />

        {/* Main content section that includes the pricing list and decorative lines */}
        <div className="relative">
          <PricingList />{" "}
          <LeftLine />{" "}
          <RightLine />{" "}
        </div>
      </div>
    </Section>
  );
};


export default Pricing;
