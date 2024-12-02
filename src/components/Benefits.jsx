import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

// Showcasing different benefits
const Benefits = () => {
  return (
    <Section id="features">
      {/* Container for the entire section */}
      <div className="container relative z-2"> {/*Frontmost*/}
        {/* passing values to Heading component*/}
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with Brainwave"
        />

        {/* Wrapper for benefit cards, flex wrap so elements go to next line if insufficient space*/}
        <div className="flex flex-wrap gap-10 mb-10">
          {/* Iterates over the 'benefits' array and renders a card for each item */}
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]" //no repeat for bg image, stretched fully in height and width
              style={{
                // Sets the background image for each benefit card
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              {/* Inner content of the benefit card */}
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                {/* Title of the benefit */}
                <h5 className="h5 mb-5">{item.title}</h5>
                {/* Description of the benefit */}
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                {/* Section containing an icon and a "Explore more" call-to-action */}
                <div className="flex items-center mt-auto">
                  {/*Colourful buttons in front of explore more message */}
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  {/* Arrow component */}
                  <Arrow />
                </div>
              </div>

              {/* Background overlay with a clipping path to create a unique shape */}
              <div
                className="absolute inset-0.5 bg-n-8" //inset means 0.125rem from all directions
                style={{ clipPath: "url(#benefits)" }} //black background of each item box thing and transparent robo face, visible only within elements of id "benefits" 
              >
                {/* Transparent robo face that appears on hover with a fade-in effect */}
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              {/* ClipPath component for additional visual styling */}
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;

