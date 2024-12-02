export const GradientLight = () => {
  return (
    // aspect square means aspect ration of 1:1
    // The element is styled with a radial gradient background that starts with a deep blue shade and fades to transparent.
    // `from-[#28206C]`: Sets the starting color of the radial gradient to a deep blue shade (#28206C).
    // `to-[#28206C]/0`: Sets the ending color of the gradient to the same color as the starting color (#28206C) but with 0 opacity,
    // making the gradient fade to fully transparent at the edges.
    // `to-70%`: Positions the end of the gradient at 70% of the element's dimensions, ensuring the gradient fades to transparent only after 70% of the element's width/height.
    <div className="absolute top-0 left-1/4 w-full aspect-square bg-radial-gradient from-[#28206C] to-[#28206C]/0 to-70% pointer-events-none" />
  );
};
