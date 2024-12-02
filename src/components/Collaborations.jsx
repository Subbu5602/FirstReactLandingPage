import { brainwaveSymbol, check } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";

const Collaboration = () => {
  return (
    <Section crosses>
      {/* Container for holding the content and layout */}
      <div className="container lg:flex">
        
        {/* Left side section with features list and a button */}
        <div className="max-w-[25rem]">
          {/* Heading for the section */}
          <h2 className="h2 mb-4 md:mb-8">
            AI Chat App for seamless collaboration
          </h2>

          {/* List of collaboration features */}
          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  {/* Checkmark icon for each item */}
                  <img src={check} width={24} height={24} alt="check" />
                  {/* Title for the feature */}
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {/*description text for each feature (if available)*/}
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>

          {/* Button to trigger action */}
          <Button>Try it now</Button>
        </div>

        {/* Right side section with circle */}
        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          {/* Small grey Description text for the right side, on top of circle*/}
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>

          {/* Circular container with a visual representation */}
          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100"> {/*normally size is 75%, increased to 100% for md devices*/}
            {/* Center circle container */}
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
            {/* circle with colorful border */}
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                {/* Center brainwave image */}
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={brainwaveSymbol}
                    width={48}
                    height={48}
                    alt="brainwave"
                  />
                </div>
              </div>
            </div>

            {/* List of app icons arranged in a circular layout */}
            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  // origin-bottom to give each pic object a reference to their final position in the circle depending on their index
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  {/* Container for each app icon */}
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    {/* Icons for the app */}
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>

            {/* Decorative curves for visual enhancement */}
            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
