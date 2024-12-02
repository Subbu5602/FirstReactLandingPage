import { brainwave } from "../assets";
import { navigation } from "../constants"; //nav bar menu items
import { disablePageScroll, enablePageScroll} from "scroll-lock";
import { useLocation } from "react-router-dom";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";

const Header = () => {
  const pathName = useLocation(); //get corresponding path when clicking any element in navbar
  const [openNavigation, setOpenNavigation] = useState(false);

  //for opening/closing sidebar in sm devices
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if(!openNavigation) 
      return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    //using dynamic js and template literals, when sidebar closed, solid color bg in header, when open, bg changes for resulting ppattern of open sidebar 
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      {/* anchor link for purple brain logo */}
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={brainwave} alt="Logo" width={190} height={40} />
        </a>
        {/* css for open/closed sidebar */}
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {/* anchor links for each element in nav bar and a route when clicking on any element */}
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathName.hash 
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>

        <a
          href="#signup"
          className="button mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New Account
        </a>
        <Button className="lg:flex" href="#login">
          Sign In
        </Button>

        {/* Hamburger Menu Button */}
        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
