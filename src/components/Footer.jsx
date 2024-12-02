import React from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    // Wrapper section with customized padding and styling
    <Section crosses className="!px-0 !py-10"> {/*! forces the style to take more precedence*/}
      {/* Container to center content and manage layout */}
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        {/* Copyright symbol in paragraph*/}
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>

        {/* List of social media icons */}
        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            // Anchor tag for each social media item
            <li
              key={item.id}
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              {/* Social media icon image */}
              <img
                src={item.iconUrl} 
                width={16} 
                height={16} 
                alt={item.title} 
              />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
