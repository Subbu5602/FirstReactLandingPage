import React from "react";
import { pricing } from "../constants";
import Button from "./Button";
import { check } from "../assets";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) => (
        // odd indexed element in pricing are bigger than the even numbered ones
        //&>h4 refers to the h4 that is the direct child of the parent element
        <div
          key={item.id}
          className="odd:my-4 w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
         > 
          <h4 className="h4 mb-4">{item.title}</h4>
          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {item.description}
          </p>
          <div className="flex items-center h-[5.5rem] mb-6">
            {item.price && (
              <div>
                <div className="h3">$</div>
                <div className="text-[5.5rem] leading-none font-bold">
                  {item.price}
                </div>
              </div>
            )}
          </div>
          <Button className="w-full mb-6">
            {item.price ? "Get Started" : "Contact Us"}
          </Button>
          <ul>
            {item.features.map((item, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6"
              >
                <img src={check} alt="Check" width={24} height={24} />
                <p className="body-2 ml-4">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
