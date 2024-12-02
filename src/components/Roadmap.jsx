import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";

// The Roadmap component represents the roadmap section of the application, showcasing current and upcoming features or progress.

const Roadmap = () => (
  // Section wrapper for the roadmap section with overflow-hidden to prevent content overflow.
  <Section className="overflow-hidden" id="roadmap">
    <div className="container md:pb-10">
      {/* Heading component to display the section title and subtitle */}
      <Heading tag="Ready to get started" title="What we’re working on" />

      {/* A grid layout for displaying roadmap items, with responsive behavior for medium screens and above */}
      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {/* Iterating over the roadmap data array to generate individual roadmap items */}
        {roadmap.map((item) => {
          // Determine the status of each roadmap item
          const status = item.status === "done" ? "Done" : "In progress";

          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`} // Styling roadmap items conditionally based on their properties like if they are colourful or in an even index
              key={item.id} // Unique key for each item
            >
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                {/* Decorative background grid image */}
                <div className="absolute top-0 left-0 max-w-full">
                  {/* bg of grid image behind each card */}
                  <img
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  {/* Header section containing the date and status of the roadmap item */}
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                    <Tagline>{item.date}</Tagline> {/* Date of the roadmap item in grey between square brackets*/}

                    {/* Status badge showing checkmark or laoding symbol for either "Done" or "In progress" */}
                    <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                      <img
                        className="mr-2.5"
                        src={item.status === "done" ? check2 : loading1} 
                        width={16}
                        height={16}
                        alt={status} 
                      />
                      <div className="tagline">{status}</div>
                    </div>
                  </div>

                  {/* Image representing the roadmap item */}
                  <div className="mb-10 -my-10 -mx-15">
                    {/* image unique to each card */}
                    <img
                      className="w-full"
                      src={item.imageUrl} 
                      width={628}
                      height={426}
                      alt={item.title} 
                    />
                  </div>

                  {/* Title and description of the roadmap item */}
                  <h4 className="h4 mb-4">{item.title}</h4>
                  <p className="body-2 text-n-4">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}

        {/* Gradient component for decorative purposes */}
        <Gradient />
      </div>

      {/* Button linking to a detailed roadmap page */}
      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button href="/roadmap">Our roadmap</Button>
      </div>
    </div>
  </Section>
);

export default Roadmap;
