import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white }) => {
  // Define the base classes for the button, dynamically including className, redirect address, onClick function, children, padding-x and default color

  //classes get adjusted with different values depending on diffrenet condition as demonstrated within ${}
  const classes = `button relative inline-flex items-center justify-center transition-colors h-11 hover:text-color-1 ${
    px || "px-7" // Default horizontal padding if none is provided
  }  
  ${white ? "text-n-8" : "text-n-1"}  ${className || ""}`; //default style for white, else different style, no addtional classNames if none are provided

  // Define the span classes for the button content
  // The `z-10` ensures this content is layered above any background or decoration
  const spanClasses = `relative z-10`;

  // Function to render a <button> element
  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      {/* Wrap children (button text/content) in a span with proper styling */}
      <span className={spanClasses}>{children}</span>
      {/* Add SVG decoration (appearance depends on the `white` prop) */}
      {ButtonSvg(white)}
    </button>
  );

  // Function to render an <a> element (used when `href` is provided)
  const renderLink = () => (
    <a href={href} className={classes}>
      {/* Wrap children (link text/content) in a span with proper styling */}
      <span className={spanClasses}>{children}</span>
      {/* Add SVG decoration (appearance depends on the `white` prop) */}
      {ButtonSvg(white)}
    </a>
  );

  // Render an <a> or <button> based on the presence of the `href` prop
  return href ? renderLink() : renderButton(); //if there is link associated with button rederLink()
};

export default Button;
