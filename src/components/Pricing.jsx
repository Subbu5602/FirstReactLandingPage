import React from "react";
import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import {LeftLine, RightLine} from "./design/Pricing";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="relative hidden justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            alt="Sphere"
            height={255}
            width={255}
            className="relative z-1"
          />
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
        <Heading tag="Get Started" title="Pay Once, Use Forever"/>

        <div className="relative">
            <PricingList/>
            <LeftLine/>
            <RightLine/>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
